import { Link } from 'react-router-dom';
import './ads.scss';

function Ads() {
    return(
        <div className="ads_main">
            <div className="stat">
                <div className="stat-item">
                    <div className="stat-item-title">Advertisements Submitted</div>
                    <div className="stat-item-value">45</div>
                </div>
                <div className="stat-item">
                    <div className="stat-item-title">Advertisements Published</div>
                    <div className="stat-item-value">35</div>
                </div>
                <div className="stat-item">
                    <div className="stat-item-title">Advertisements Returned</div>
                    <div className="stat-item-value">123</div>
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
                                <th colSpan={3}>Actions</th>
                            </tr>
                            <tr>
                                <td>John Dom</td>
                                <td>Hotel</td>
                                <td>Published</td>
                                <td>2023-08-02</td>
                                <td>Nuwara-eliya</td>
                                <td>
                                    <Link to='/advertisementspage'>
                                        <span class="material-icons">
                                            visibility
                                        </span>
                                    </Link>
                                </td>
                                <td>
                                    <Link to='/advertisementspage'>
                                        <span class="material-icons">
                                            publish
                                        </span>
                                    </Link>
                                </td>
                                <td>
                                    <Link to='/advertisementspage'>
                                        <span class="material-icons">
                                            replay
                                        </span>
                                    </Link>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ads;