import './dashboard.scss';
import ContentCreators from '../../components/contentCreators/contentCreators';
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { BarChart } from './user_charts';

function Dashboard() {

    const { data: adsAS } = useQuery(
        ["adTData"],
        async () => {
            const response = await makeRequest.get(`/admin/submitAds`);
            return response.data;
        }
    );

    const { data: reportsTR } = useQuery(
        ["reportsTData"],
        async () => {
            const response = await makeRequest.get(`/admin/reportsToday`);
            return response.data;
        }
    );

    const { data: postsTP } = useQuery(
        ["postsTData"],
        async () => {
            const response = await makeRequest.get(`/admin/postsToday`);
            return response.data;
        }
    );

    const { data: userTravellerC } = useQuery(
        ["uTrCData"],
        async () => {
            const response = await makeRequest.get(`/admin/utraM`);
            return response.data;
        }
    );

    const { data: userTaxiC } = useQuery(
        ["uTaxCData"],
        async () => {
            const response = await makeRequest.get(`/admin/utaxM`);
            return response.data;
        }
    );

    const { data: userGuideC } = useQuery(
        ["uGuiCData"],
        async () => {
            const response = await makeRequest.get(`/admin/uguiM`);
            return response.data;
        }
    );

    const { data: userServiceC } = useQuery(
        ["uservCData"],
        async () => {
            const response = await makeRequest.get(`/admin/uservM`);
            return response.data;
        }
    );

    return(
        <div className='dashboard_main'>
            <div className="stat">
                <h1>New Submissions Today</h1>
                <div className="statbox">
                    <div className="stat-item">
                        <div className="stat-item-title">Advertisement Requests Today</div>
                        <div className="stat-item-value">
                            {userTravellerC && (
                                <span>{userTravellerC[0]?.count}</span>
                            )}
                        </div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-item-title">Reports Added Today</div>
                        <div className="stat-item-value">
                            {userTaxiC && (
                                <span>{userTaxiC[0]?.count}</span>
                            )}
                        </div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-item-title">Posts Added Today</div>
                        <div className="stat-item-value">
                            {userGuideC && (
                                <span>{userGuideC[0]?.count}</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="chart">
                <div className="daily-chart">
                    <h3>New User Registrations</h3>
                    <div className="newusers">
                        <div className="us">
                            <h4>Travellers</h4>
                            <div className="us_count">
                                {userServiceC && (
                                    <span>{userServiceC[0]?.count}</span>
                                )}
                            </div>
                        </div>
                        <div className="us">
                            <h4>Taxis</h4>
                            <div className="us_count">
                                {postsTP && (
                                    <span>{postsTP[0]?.count}</span>
                                )}
                            </div>
                        </div>
                        <div className="us">
                            <h4>Guides</h4>
                            <div className="us_count">
                                {postsTP && (
                                    <span>{postsTP[0]?.count}</span>
                                )}
                            </div>
                        </div>
                        <div className="us">
                            <h4>Services</h4>
                            <div className="us_count">
                                {postsTP && (
                                    <span>{postsTP[0]?.count}</span>
                                )}
                            </div>
                        </div>
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