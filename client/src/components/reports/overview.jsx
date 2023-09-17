import './reports.scss';
import { BarChart, DoughnutChart } from './report_charts';
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useState, useEffect } from "react";

function Report_Overview() {


    const { data: reportsDataTP, isLoadingTP, isErrorTP } = useQuery(
        ["reportsData"],
        async () => {
            const response = await makeRequest.get(`/reports/todayP`);
            return response.data;
        }
    );

    const { data: reportsDataTU, isLoadingTU, isErrorTU } = useQuery(
        ["reportsData"],
        async () => {
            const response = await makeRequest.get(`/reports/todayU`);
            return response.data;
        }
    );

    const { data: reportsDataOP, isLoadingOP, isErrorOP } = useQuery(
        ["reportsData"],
        async () => {
            const response = await makeRequest.get(`/reports/ongoingP`);
            return response.data;
        }
    );

    const { data: reportsDataOU, isLoadingOU, isErrorOU } = useQuery(
        ["reportsData"],
        async () => {
            const response = await makeRequest.get(`/reports/ongoingU`);
            return response.data;
        }
    );


    return (
        <div className="reports_overview">
            <div className="reports_summary">
                <div className="summary_card">
                    <p>Post Reports Today
                        <br />
                        {reportsDataTP && (
                            <span>{reportsDataTP[0]?.count}</span>
                        )}
                    </p>
                </div>
                <div className="summary_card">
                    <p>User Reports Today
                        <br />
                        {/* <span>35</span> */}
                        {reportsDataTU && (
                            <span>{reportsDataTU[0]?.count}</span>
                        )}
                    </p>
                </div>
                <div className="summary_card">
                    <p>Ongoing Post Reports
                        <br />
                        {reportsDataOP && (
                            <span>{reportsDataOP[0]?.count}</span>
                        )}
                    </p>
                </div>
                <div className="summary_card">
                    <p>Ongoing User Reports
                        <br />
                        {reportsDataOU && (
                            <span>{reportsDataOU[0]?.count}</span>
                        )}
                    </p>
                </div>
            </div>
            <div className="chart_container">
                <div className="chart">
                    <h2>Report Analytics - By Type</h2>
                    <BarChart />
                </div>
                <div className="chart">
                    <h2>Report Analytics - By Severity</h2>
                    <DoughnutChart />
                </div>
            </div>
        </div>
    );
}

export default Report_Overview;