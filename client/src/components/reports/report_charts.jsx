import React, { useRef, useEffect } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement
)

function BarChart() {
    const gradientColors = [
        'rgba(75,192,192,0.6)',
        'rgba(75,192,192,0.8)',
        'rgba(75,192,192,1)',
        'rgba(75,192,192,0.6)',
        'rgba(75,192,192,1)',
    ];

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Report Analytics - By Type',
                backgroundColor: gradientColors,
                hoverBackgroundColor: gradientColors,
                data: [65, 59, 80, 81, 56],
                barThickness: 50,
            },
        ],
    };

    // Bar graph options
    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };


    // const chartContainerStyle = {
    //     height: '200px', // Adjust the height as needed
    // };

    return (
        // <div style={chartContainerStyle}>
        <Bar data={data} options={options} />
        // </div>
    );
}

function DoughnutChart() {
    const data = {
        labels: ['High', 'Moderate', 'Low'],
        datasets: [
            {
                label: 'Monthly Sales',
                backgroundColor: [
                    '#065573',
                    '#2B3674',
                    '#157cc0'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                data: [65, 59, 80],
            },
        ],
    };

    const chartContainerStyle = {
        width: '250px', // Adjust the width as needed
        height: '250px', // Adjust the height as needed
    };

    return (
        <div style={chartContainerStyle}>
            <Doughnut data={data} />
        </div>
    );
}





export { BarChart, DoughnutChart };