import React from 'react';
import { Pie, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Dashboard = () => {
  let user = null;
  try {
    user = JSON.parse(localStorage.getItem('loggedInUser'));
  } catch (e) {
    localStorage.removeItem('loggedInUser');
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];

  const chartData = {
    labels: ['India', 'USA', 'Other'],
    datasets: [
      {
        label: 'Users by Country',
        data: [
          users.filter((u) => u.country === 'India').length,
          users.filter((u) => u.country === 'USA').length,
          users.filter((u) => !['India', 'USA'].includes(u.country)).length,
        ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="dashboard">
      <h2>Welcome, {user?.firstName || 'User'}!</h2>
      <div className="charts">
        <div className="chart-box">
          <h4>Pie Chart</h4>
          <div className="chart-wrapper">
            <Pie data={chartData} options={chartOptions} />
          </div>
        </div>
        <div className="chart-box">
          <h4>Bar Chart</h4>
          <div className="chart-wrapper">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
        <div className="chart-box">
          <h4>Donut Chart</h4>
          <div className="chart-wrapper">
            <Doughnut data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
