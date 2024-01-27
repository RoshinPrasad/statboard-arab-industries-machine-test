import React, { useEffect, useState } from 'react';
import { CChartPie } from '@coreui/react-chartjs';
import instance from '../Connect/Instance';

const PieChart = () => {
  const [pieChartData, setPieChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get('/pie-chart');
        console.log('Received pie chart data:', response.data);
        setPieChartData(response.data);
        setLoading(false); // Set loading to false after data is received
      } catch (error) {
        console.error('Error fetching pie chart data:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Display loading state while data is being fetched
  }

  const chartData = {
    labels: pieChartData.map((dataPoint) => dataPoint.label),
    datasets: [
      {
        backgroundColor: [
            'rgb(152,251,152)',
          'rgb(0,250,154)',
          'rgb(0,255,127)',
          'rgb(60,179,113)',
          'rgb(46,139,87)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        data: pieChartData.map((dataPoint) => dataPoint.value),
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: 'black',
        },
      },
    },
  };

  const pieChartStyle = {
    width: '300px',
    height: '350px',
    float: 'right', // Align to the right side of the container
    backgroundColor: 'white', // Set background color to white
  };

  return (
    <div style={pieChartStyle}>
      <CChartPie data={chartData} options={chartOptions} />
    </div>
  );
};

export default PieChart;
