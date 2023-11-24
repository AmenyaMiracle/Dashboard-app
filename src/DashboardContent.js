import React, { useState, useEffect } from 'react';
import './DashboardContent.css';
import Chart from 'chart.js/auto';

const DashboardContent = () => {
  const [metrics, setMetrics] = useState({
    views: 0,
    newUsers: 0,
    visits: 0,
    soldProducts: 0,
    moneyMetric: 10000000, // Initial value of 10,000,000 Naira
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMetrics((prevMetrics) => ({
        views: prevMetrics.views + Math.floor(Math.random() * 10),
        newUsers: prevMetrics.newUsers + Math.floor(Math.random() * 5),
        visits: prevMetrics.visits + Math.floor(Math.random() * 20),
        soldProducts: prevMetrics.soldProducts + Math.floor(Math.random() * 3),
        moneyMetric: prevMetrics.moneyMetric + Math.floor(Math.random() * 10000), // Update money metric
      }));
    }, 180000); // Update metrics every 3 minutes

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Bar Chart
    const ctxBar = document.getElementById('myChart').getContext('2d');
    const myBarChart = new Chart(ctxBar, {
      type: 'bar',
      data: {
        labels: ['August', 'September', 'October', 'November'],
        datasets: [{
          label: 'data value',
          data: [metrics.views, metrics.newUsers, metrics.visits, metrics.soldProducts],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
          ],
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 40,
            ticks: {
              stepSize: 10,
              callback: function (value) {
                return value === 0 ? '0m' : `${value}m`;
              },
            },
          },
        },
      },
    });

    return () => {
      myBarChart.destroy();
    };
  }, [metrics]);

  useEffect(() => {
    // Doughnut Chart
    const ctxDoughnut = document.getElementById('doughnutChart').getContext('2d');
    const doughnutData = {
      labels: ['England', 'USA', 'Other', 'Nigeria'],
      datasets: [{
        label: 'My First Dataset',
        data: [150, 50, 300, 150], // Increase the data value for 'Green' to make it bigger
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)'],
        hoverOffset: 4,
      }],
    };
    const doughnutConfig = {
      type: 'doughnut',
      data: doughnutData,
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'right', // Change the position as needed
            labels: {
              boxWidth: 10, // Adjust the box width to make it smaller
              fontSize: 10, // Adjust the font size to make it smaller
            },
          },
        },
      },
    };
    const myDoughnutChart = new Chart(ctxDoughnut, doughnutConfig);

    return () => {
      myDoughnutChart.destroy();
    };
  }, []);

  return (
    <div className="dashboard-content">
      <div className="metrics-container">
        <MetricCard title="Views" value={metrics.views} />
        <MetricCard title="New Users" value={metrics.newUsers} />
        <MetricCard title="Visits" value={metrics.visits} />
        <MetricCard title="Sold" value={metrics.soldProducts} />
      </div>
      <div className="money-metric-container">
        <p className="money-metric-value">₦{metrics.moneyMetric.toLocaleString()}</p>
      </div>
      <div className="chart-container">
        <canvas id="myChart" width="300" height="200" style={{ width: '100%', height: '100%', border: 'none' }}></canvas>
      </div>
      <div className="doughnut-chart-container">
        <canvas id="doughnutChart" width="300" height="200" style={{ width: '100%', height: '100%', border: 'none' }}></canvas>
      </div>
    </div>
  );
};

const MetricCard = ({ title, value }) => {
  return (
    <div className="metric-card">
      <h3 className="metric-title">{title}</h3>
      <p className="metric-value">{value}</p>
    </div>
  );
};

export default DashboardContent;
