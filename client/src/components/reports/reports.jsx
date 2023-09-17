import React, { useState } from 'react';
import './reports.scss';
import Post_Report_tnd from './post_reports_nd';
import User_Report_tnd from './user_reports_nd';
import Post_Report_td from './post_reports_d';
import User_Report_td from './user_reports_d';
import Report_Overview from './overview';

function Reports() {
    const [selectedMenuItem, setSelectedMenuItem] = useState('Report Overview');

    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
    };

    return (
        <div className="report_main">
            <div className="report_menu">
                {/* A radio button group */}
                <div
                    className={`report_menu_item ${selectedMenuItem === 'Report Overview' ? 'active' : ''}`}
                    onClick={() => handleMenuItemClick('Report Overview')}
                >
                    <p>Report Overview</p>
                </div>
                <div
                    className={`report_menu_item ${selectedMenuItem === 'Post Reports' ? 'active' : ''}`}
                    onClick={() => handleMenuItemClick('Post Reports')}
                >
                    <p>Post Reports</p>
                </div>
                <div
                    className={`report_menu_item ${selectedMenuItem === 'User Reports' ? 'active' : ''}`}
                    onClick={() => handleMenuItemClick('User Reports')}
                >
                    <p>User Reports</p>
                </div>
            </div>
            {selectedMenuItem === 'Report Overview' && <Report_Overview />}
            <div className="tables">
                {selectedMenuItem === 'Post Reports' && <Post_Report_tnd />}
                {selectedMenuItem === 'User Reports' && <User_Report_tnd />}
                {selectedMenuItem === 'Post Reports' && <Post_Report_td />}
                {selectedMenuItem === 'User Reports' && <User_Report_td />}
            </div>
        </div>
    );
}

export default Reports;
