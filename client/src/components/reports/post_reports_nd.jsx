import './reports.scss';
import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import Icon from '@mui/material/Icon';
import Reported_post_view from './view_post';

function Post_Report_tnd() {

    const [selectPost, setselectPost] = useState(0);

    const handlepostClick = (report_id) => {
        // console.log(report_id);
        setselectPost(report_id);
    };

    const handleBackToReports = () => {
        setselectPost(0); // Set selectPost to zero to make the table visible
    };

    const PAGE_SIZE = 7; // Number of rows to display per page
    const [currentPage, setCurrentPage] = useState(0);

    const { data: reportsDataPRND, isLoading, isError } = useQuery(
        ["reportsDataPRND"],
        async () => {
            const response = await makeRequest.get(`/reports/postReportsND`);
            return response.data;
        }
    );

    // Calculate the range of rows to display based on the current page
    const startIndex = currentPage * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;

    // Slice the data array to display only the current page's rows
    const displayedData = reportsDataPRND ? reportsDataPRND.slice(startIndex, endIndex) : [];

    const totalPages = Math.ceil((reportsDataPRND?.length || 0) / PAGE_SIZE);

    // console.log(reportsDataPRND[3].report_id);

    return (
        <div className={`t-div`}>
            {selectPost !== 0 ? (<Reported_post_view selectedPost={selectPost} onBackToReports={handleBackToReports} />) : (
                <div>
                    <div className={`t-div-topic`}>
                        <p>Post Reports - To Do</p>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Poster</th>
                                <th>Post ID</th>
                                <th>Report Type</th>
                                <th>Severity</th>
                                <th>Remarks</th>
                                <th>Status</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedData.map((row) => (
                                <tr key={row.reported_post_id}>
                                    <td>{row.poster_name}</td>
                                    <td>{row.reported_post_id}</td>
                                    <td>{row.type}</td>
                                    <td>
                                        {row.severity === 1 ? "High" : row.severity === 2 ? "Medium" : "Low"}
                                    </td>
                                    <td>{row.content}</td>
                                    <td>
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
                                    <td>
                                        <span className="material-icons" onClick={() => handlepostClick(row.report_id)}> visibility</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Pagination Controls */}
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
                </div>)}
        </div >
    );
}

export default Post_Report_tnd;
