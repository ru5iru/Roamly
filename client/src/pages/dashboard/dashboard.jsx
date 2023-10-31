import './dashboard.scss';
import ContentCreators from '../../components/contentCreators/contentCreators';
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useState, useEffect } from "react";
import { BarChart } from './user_charts';

function Dashboard() {

    const { data: adsAS, isLoadingAS, isErrorAS } = useQuery(
        ["adTData"],
        async () => {
            const response = await makeRequest.get(`/admin/submitAds`);
            return response.data;
        }
    );

    const { data: reportsTR, isLoadingUR, isErrorUR } = useQuery(
        ["reportsTData"],
        async () => {
            const response = await makeRequest.get(`/admin/reportsToday`);
            return response.data;
        }
    );

    const { data: postsTP, isLoadingTP, isErrorTP } = useQuery(
        ["postsTData"],
        async () => {
            const response = await makeRequest.get(`/admin/postsToday`);
            return response.data;
        }
    );

    return(
        <div className='dashboard_main'>
            <div className="stat">
                <div className="stat-item">
                    <div className="stat-item-title">Advertisement Requests Today</div>
                    <div className="stat-item-value">
                        {adsAS && (
                            <span>{adsAS[0]?.count}</span>
                        )}
                    </div>
                </div>
                <div className="stat-item">
                    <div className="stat-item-title">Reports Added Today</div>
                    <div className="stat-item-value">
                        {reportsTR && (
                            <span>{reportsTR[0]?.count}</span>
                        )}
                    </div>
                </div>
                <div className="stat-item">
                    <div className="stat-item-title">Posts Added Today</div>
                    <div className="stat-item-value">
                        {postsTP && (
                            <span>{postsTP[0]?.count}</span>
                        )}
                    </div>
                </div>
            </div>
            <div className="chart">
                <div className="daily-chart">
                    <h3>Daily Interactions</h3>
                    <div className="traffic">
                        <div className="daily">
                            <h4>Daily Traffic</h4>
                            <div className="count">
                                <span class="material-icons">
                                    arrow_drop_up
                                </span>
                                <span className="count-value">
                                    +2.45%
                                </span>
                            </div>
                        </div>
                        <div className="visitors">
                            <span className='visit-count'>
                                1,230
                            </span>
                            <span className='visit-text'>
                                Visitors
                            </span>
                        </div>
                    </div>
                    <div className='Chart'>
                        <BarChart />
                    </div>
                </div>
                <div className="top-content-creators">
                    <h3>Top Content Creators</h3>
                    <div className="creators">
                        <ContentCreators />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;