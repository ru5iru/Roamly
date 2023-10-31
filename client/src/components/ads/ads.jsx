import { Link } from 'react-router-dom';
import './ads.scss';
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

function Ads() {

    const { data: adsAS } = useQuery(
        ["adSData"],
        async () => {
            const response = await makeRequest.get(`/admin/adsS`);
            return response.data;
        }
    );

    const { data: adsAP } = useQuery(
        ["adPData"],
        async () => {
            const response = await makeRequest.get(`/admin/adsP`);
            return response.data;
        }
    );

    const { data: adsAR } = useQuery(
        ["adRData"],
        async () => {
            const response = await makeRequest.get(`/admin/adsR`);
            return response.data;
        }
    );

    const { data: adsDisplay } = useQuery(
        ["adData"],
        async () => {
            const response = await makeRequest.get(`/admin/adDisplay`);
            return response.data;
        }
    );

    return(
        <div className="ads_main">
            <div className="stat">
                <div className="stat-item">
                    <div className="stat-item-title">Advertisements Submitted</div>
                    <div className="stat-item-value">
                        {adsAS && (
                            <span>{adsAS[0]?.count}</span>
                        )}
                    </div>
                </div>
                <div className="stat-item">
                    <div className="stat-item-title">Advertisements Published</div>
                    <div className="stat-item-value">
                        {adsAP && (
                            <span>{adsAP[0]?.count}</span>
                        )}
                    </div>
                </div>
                <div className="stat-item">
                    <div className="stat-item-title">Advertisements Returned</div>
                    <div className="stat-item-value">
                        {adsAR && (
                            <span>{adsAR[0]?.count}</span>
                        )}
                    </div>
                </div>
            </div>
            <div className="ads">
                <h2>All Advertisements</h2>
                <div className="ads-list">
                    <div className="ads-item">
                        <table>
                            <tr>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            {adsDisplay && adsDisplay.map((row) => (
                                <tr key={row.user_id}>
                                    <td>{row.title}</td>
                                    <td>{row.service_type}</td>
                                    <td>{row.created_at}</td>
                                    <td>{row.status}</td>
                                    <td>
                                        <Link to='/adviewpage' className='link'>
                                            <span class="material-icons">
                                                visibility
                                            </span>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ads;