import React, { useState, useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import Icon from '@mui/material/Icon';
import Reported_post_view from './view_post';

function Post_Report_tnd() {
    const [selectPost, setSelectPost] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [displayedData, setDisplayedData] = useState([]);
    const PAGE_SIZE = 7;

    const handlepostClick = (report_id) => {
        setSelectPost(report_id);
    };

    const handleBackToReports = () => {
        setSelectPost(0);
    };

    const { data: reportsDataPRND, isLoading, isError, refetch } = useQuery(
        ["reportsDataPRND", currentPage],
        async () => {
            const response = await makeRequest.get(`/reports/postReportsND?page=${currentPage + 1}&pageSize=${PAGE_SIZE}`);
            return response.data;
        }
    );

    // Calculate the range of rows to display based on the current page
    const startIndex = currentPage * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;

    useEffect(() => {
        if (reportsDataPRND) {
            // Append the page data to the displayedData
            setDisplayedData((prevData) => [...reportsDataPRND.slice(startIndex, endIndex)]);
        }
    }, [reportsDataPRND, startIndex, endIndex]);

    const totalPages = Math.ceil((reportsDataPRND?.length || 0) / PAGE_SIZE);

    const handleNextPageClick = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage((prevPage) => prevPage + 1);
            // Clear displayedData when moving to the next page
            setDisplayedData([]);
        }
    };

    return (
        <div className={`t-div`}>
            {selectPost !== 0 ? (
                <Reported_post_view selectedPost={selectPost} onBackToReports={handleBackToReports} />
            ) : (
                <div>
                    <div className={`t-div-topic`}>
                        <p>Post Reports - To Do</p>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Report ID</th>
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
                                    <td>{row.report_id}</td>
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
                            onClick={handleNextPageClick}
                            disabled={currentPage === totalPages - 1 || isLoading}
                        >
                            {">"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Post_Report_tnd;

