import { Link } from 'react-router-dom';
import './ads.scss';
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

function Ads() {

    const { data: adsAS, isLoadingAS, isErrorAS } = useQuery(
        ["adSData"],
        async () => {
            const response = await makeRequest.get(`/admin/adsS`);
            return response.data;
        }
    );

    const { data: adsAP, isLoadingAP, isErrorAP } = useQuery(
        ["adPData"],
        async () => {
            const response = await makeRequest.get(`/admin/adsP`);
            return response.data;
        }
    );

    const { data: adsAR, isLoadingAR, isErrorAR } = useQuery(
        ["adRData"],
        async () => {
            const response = await makeRequest.get(`/admin/adsR`);
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
                                <th>Creator</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Location</th>
                                <th>Action</th>
                            </tr>
                            {/*{adsData && adsData.map((row) => (
                                <tr key={row.id}>
                                    <td>{row.creator}</td>
                                    <td>{row.type}</td>
                                    <td>{row.status}</td>
                                    <td>{row.date}</td>
                                    <td>{row.location}</td>
                                    <td>
                                        <Link to='/adviewpage' className='link'>
                                            <span class="material-icons">
                                                visibility
                                            </span>
                                        </Link>
                                    </td>
                                </tr>
                            ))}*/}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ads;