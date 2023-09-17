import './reports.scss';
import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import Icon from '@mui/material/Icon';
import Reported_post_view from './view_post';

function User_Report_tnd() {

    const [selectPost, setselectPost] = useState(0);

    const handlepostClick = (PostID) => {
        setselectPost(PostID);
    };

    const handleBackToReports = () => {
        setselectPost(0); // Set selectPost to zero to make the table visible
    };


    const PAGE_SIZE = 7; // Number of rows to display per page
    const [currentPage, setCurrentPage] = useState(0);

    const { data: reportsDataURND, isLoading, isError } = useQuery(
        ["reportsDataURND"],
        async () => {
            const response = await makeRequest.get(`/reports/userReportsND`);
            return response.data;
        }
    );

    // Calculate the range of rows to display based on the current page
    const startIndex = currentPage * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;

    // Slice the data array to display only the current page's rows
    const displayedData = reportsDataURND ? reportsDataURND.slice(startIndex, endIndex) : [];

    const totalPages = Math.ceil((reportsDataURND?.length || 0) / PAGE_SIZE);

    return (
        <div className="t-div">

            {selectPost !== 0 ? (<Reported_post_view selectedPost={selectPost} onBackToReports={handleBackToReports} />) : (
                <div>
                    <div className="t-div-topic">
                        <p>User Reports - To Do</p>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Reported User</th>
                                <th>User ID</th>
                                <th>Report Type</th>
                                <th>Severity</th>
                                <th>Remarks</th>
                                <th>Status</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reportsDataURND && reportsDataURND.map((row) => (
                                <tr key={row.id}>
                                    <td>{row.poster_name}</td>
                                    <td>{row.reported_user_id}</td>
                                    <td>{row.type}</td>
                                    <td>
                                        {row.severity === 1 ? "High" : row.severity === 2 ? "Medium" : "Low"}
                                    </td>
                                    <td>{row.content}</td>
                                    <td>
                                        {/* change the icon according to the value of row.report_status */}
                                        {row.report_status === "ongoing" ? (
                                            <Icon className="material-icons icon-custom-color">
                                                drafts_rounded
                                            </Icon>
                                        ) : (
                                            <Icon className="material-icons icon-custom-color">
                                                email_rounded
                                            </Icon>
                                        )}
                                    </td>
                                    <td><span class="material-icons" onClick={() => handlepostClick(row.reported_user_id)}>
                                        visibility
                                    </span></td>
                                </tr>
                            ))}

                        </tbody>

                    </table>
                    <div className="pagination">
                        <button
                            onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 0))}
                            disabled={currentPage === 0}
                        >
                            {"<"}
                        </button>
                        <span>Page {currentPage + 1} of {totalPages}</span>
                        <button
                            onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1))}
                            disabled={currentPage === totalPages - 1 || isLoading}
                        >
                            {">"}
                        </button>
                    </div>
                </div>

            )}

            {/* Pagination Controls */}


            {/* // )} */}
        </div>)
}

export default User_Report_tnd;