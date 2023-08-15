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
                    <div className="stat-item-value">10</div>
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
                            <tr>
                                <td>Hilton</td>
                                <td>Hotel</td>
                                <td>Submitted</td>
                                <td>2023-08-02</td>
                                <td>Nuwara-eliya</td>
                                <td>
                                    <Link to='/adviewpage' className='link'>
                                        <span class="material-icons">
                                            visibility
                                        </span>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>Ocean Wave</td>
                                <td>Shop</td>
                                <td>Published</td>
                                <td>2023-06-15</td>
                                <td>Kandy</td>
                                <td>
                                    <Link to='/adviewpage' className='link'>
                                        <span class="material-icons">
                                            visibility
                                        </span>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>John Dom</td>
                                <td>Taxi</td>
                                <td>Submitted</td>
                                <td>2023-02-02</td>
                                <td>Colombo</td>
                                <td>
                                    <Link to='/advertisementspage' className='link'>
                                        <span class="material-icons">
                                            visibility
                                        </span>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>Hilton</td>
                                <td>Hotel</td>
                                <td>Submitted</td>
                                <td>2023-08-02</td>
                                <td>Nuwara-eliya</td>
                                <td>
                                    <Link to='/advertisementspage' className='link'>
                                        <span class="material-icons">
                                            visibility
                                        </span>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>Ocean Wave</td>
                                <td>Shop</td>
                                <td>Published</td>
                                <td>2023-06-15</td>
                                <td>Kandy</td>
                                <td>
                                    <Link to='/advertisementspage' className='link'>
                                        <span class="material-icons">
                                            visibility
                                        </span>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>John Dom</td>
                                <td>Taxi</td>
                                <td>Submitted</td>
                                <td>2023-02-02</td>
                                <td>Colombo</td>
                                <td>
                                    <Link to='/advertisementspage' className='link'>
                                        <span class="material-icons">
                                            visibility
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