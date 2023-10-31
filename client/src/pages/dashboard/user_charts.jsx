import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';

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
        labels: ['January', 'February', 'March', 'April', 'May', "June", "July", "August", "September", "October"],
        datasets: [
            {
                label: 'Report Analytics - By Type',
                backgroundColor: gradientColors,
                hoverBackgroundColor: gradientColors,
                data: [50, 80, 180, 381, 456, 555, 640, 730, 820, 1010],
                barThickness: 20,
            },
        ],
    };

    // Bar graph options
    const options = {
        scales: {
            y: {
                beginAtZero: true,
                suggestedMax: 1200,
            },
        },
    };


    const chartContainerStyle = {
        height: '200px', // Adjust the height as needed
    };

    return (
        <div style={chartContainerStyle}>
            <Bar data={data} options={options} />
        </div>
    );
}

export { BarChart };