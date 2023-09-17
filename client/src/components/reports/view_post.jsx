import './reports.scss';
// import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import Line from './../../assets/images/Line1.png';
import LineV from './../../assets/images/LineV.png';

function Reported_post_view({ selectedPost, onBackToReports }) {

    const handleBackClick = () => {
        onBackToReports(); // Call the provided function to go back to the table view
    };


    console.log("Component rendered with selectedPost:", selectedPost);

    const { data: PostreportData, isLoading, isError } = useQuery(
        ["PostreportData"],
        async () => {
            console.log("useQuery callback started with selectedPost:", selectedPost);
            try {
                const response = await makeRequest.get(`/reports/postReportDetails?selectedPost=${selectedPost}`);
                console.log("Response data:", response.data);
                return response.data;
            } catch (error) {
                console.error("Error fetching PostreportData:", error);
                throw error;
            }
        }
    );


    const { data: reportPostData, isLoadingPost, isErrorPost } = useQuery(
        ["reportsDatann"],
        async () => {
            const response = await makeRequest.get(`/reports/postDetails?selectedPostID=${PostreportData[0].reported_post_id}`);
            return response.data;
        }
    );

    const { data: AllreportsData, isLoadingPost1, isErrorPost1 } = useQuery(
        ["AllreportsData"],
        async () => {
            const response = await makeRequest.get(`/reports/allReports?selectedPostID=${PostreportData[0].reported_post_id}`);
            return response.data;
        }
    );


    return (
        <div className='r_post_view'>
            <div class="report_title">
                <h2>Post Report - Report ID : {selectedPost}</h2>
                {/* curved back icon */}
                <button onClick={handleBackClick}>Back to Reports</button>

            </div>
            <img src={Line} alt="line" className='line' />
            <div class="report_body">
                <div className='content'>
                    <h4>
                        Post ID : {PostreportData ? PostreportData[0].reported_post_id : "Loading..."}
                    </h4>
                    <br />
                    <p>
                        Posted By : {PostreportData ? PostreportData[0].firstname : "Loading..."}
                    </p>
                    <br />
                    <p>
                        Posted On : {PostreportData ? PostreportData[0].created_at : "Loading..."}
                    </p>
                    <br />
                    <p className="post-content">
                        Post Text :
                        <textarea disabled>{PostreportData ? PostreportData[0].content : "Loading..."}</textarea>
                    </p>
                    <br />

                    <p>Post Image <span className="material-icons"> visibility</span> </p>
                    <br />
                    <p>Image Here</p>
                    <br />
                    <p>Likes : {reportPostData ? reportPostData[0].like_count : "Loading..."}</p>
                    <br />
                    <p>Comments : {reportPostData ? reportPostData[0].comment_count : "Loading..."}</p>

                </div>
                <img src={LineV} alt="line" className='lineV' />
                <div className='all-reports'>
                    <h4>Other Reports for the Post</h4>
                    <p>Total : 54</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Report ID</th>
                                <th>Report Type</th>
                                <th>Severity</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* MAP  AllreportsData */}
                            {AllreportsData && AllreportsData.map((row) => (
                                <tr key={row.id}>
                                    <td>{row.report_id}</td>
                                    <td>{row.type}</td>
                                    <td>
                                        {row.severity === 1 ? "High" : row.severity === 2 ? "Medium" : "Low"}
                                    </td>
                                    <td>
                                        <span class="material-icons">
                                            visibility
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <img src={Line} alt="line" className='line' />

            <div className='buttons'>
                <button>Remove Post</button>
                <button>Mark As Ongoing</button>
                <button>Mark As Done</button>
            </div>
        </div>
    )
}

export default Reported_post_view;
