import './adView.scss';
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

function AdView() {

    const { data: fullAdd } = useQuery(
        ["adFData"],
        async () => {
            const response = await makeRequest.get(`/admin/fullAddDisplay`);
            return response.data;
        }
    );

    return(
        <div className="ad_view_main">
            {fullAdd && fullAdd.map((row) => (
            <div className="adview_profile" key={row.user_id}>
                <div className="adview_profile_summary">
                    <div className="about">
                        <div className="profile_picture">
                            {row.ad_img}
                        </div>
                        <div className='name'>
                            {row.title}
                        </div>
                        <div className='actor'>
                            {row.service_type}
                        </div>
                    </div>
                    <div className="profile_details">
                        <table>
                            <tr>
                                <th>Hotel Name</th>
                                <td>{row.firstname && row.lastname}</td>
                            </tr>
                            <tr>
                                <th>Location</th>
                                <td>{row.location}</td>
                            </tr>
                            <tr>
                                <th>Contact Number</th>
                                <td>{row.contact_no}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{row.email}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="adview_profile_details">
                    <div className="profile_reports">
                        <h1>Topic : {row.title}</h1>
                        <div className="ad_description">
                            {row.description}
                        </div>
                    </div>
                    <div className="review_buttons">
                    <button className="btn btn-primary">Accept and Publish</button>
                    <button className="btn btn-danger">Review and Return</button>
                </div>
                </div>
            </div>
            ))}
        </div>
    );
}

export default AdView;