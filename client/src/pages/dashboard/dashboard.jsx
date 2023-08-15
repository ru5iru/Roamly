import './dashboard.scss';
import ContentCreators from '../../components/contentCreators/contentCreators';
import EditTrip from '../../components/editTrip/editTrip';
import Chart1 from '../../assets/images/chart.jpg';

function Dashboard() {
    return(
        <div className='dashboard_main'>
            <div className="stat">
                <div className="stat-item">
                    <div className="stat-item-title">Ads Submitted</div>
                    <div className="stat-item-value">45</div>
                </div>
                <div className="stat-item">
                    <div className="stat-item-title">Reports Unread</div>
                    <div className="stat-item-value">35</div>
                </div>
                <div className="stat-item">
                    <div className="stat-item-title">Posts Today</div>
                    <div className="stat-item-value">123</div>
                </div>
                <div className="stat-item">
                    <div className="stat-item-title">Reports Ongoing</div>
                    <div className="stat-item-value">45</div>
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
                                2.596
                            </span>
                            <span className='visit-text'>
                                Visitors
                            </span>
                        </div>
                    </div>
                    <div className='Chart'>
                        <img src= {Chart1} alt="Chart" />
                    </div>
                </div>
                <div className="top-content-creators">
                    <h3>Top Content Creators</h3>
                    <div className="creators">
                        <ContentCreators />
                        <ContentCreators />
                        <ContentCreators />
                    </div>
                </div>
            </div>
            <div className="select">
                <div className="select-item">
                    <h3>Available Trip Types</h3>
                    <EditTrip />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;