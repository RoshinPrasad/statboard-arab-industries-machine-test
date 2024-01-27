import React, { useEffect, useState } from 'react';
import { CChart } from '@coreui/react-chartjs';
import instance from '../Connect/Instance';

const Graph = () => {
  const [graphData, setGraphData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get('/graph');
        console.log('Received graph data:', response.data);
        setGraphData(response.data);
        setLoading(false); // Set loading to false after data is received
      } catch (error) {
        console.error('Error fetching graph data:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Display loading state while data is being fetched
  }

  const chartData = {
    labels: graphData.map((dataPoint) => dataPoint.x),
    datasets: [
      {
        label: '',
        backgroundColor: 'rgba(220, 220, 220, 0.2)',
        borderColor: 'rgb(0, 100, 100)',
        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
        pointBorderColor: '#fff',
        data: graphData.map((dataPoint) => dataPoint.y),
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
    scales: {
      x: {
        type: 'category',
        grid: {
          color: '#D3D3D3',
        },
        ticks: {
          color: '',
        },
      },
      y: {
        grid: {
          color: '#D3D3D3',
        },
        ticks: {
          color: 'your-color-here',
        },
      },
    },
    elements: {
      line: {
        tension: 0.4, // Adjust the tension for a smoother curve
      },
    },
  };

  const graphStyle = {
    width: '700px',
    height: '350px',
    float: 'left',
    backgroundColor: 'white', 
  };

  return (
    <div style={graphStyle}>
      <CChart type="line" data={chartData} options={chartOptions} />
    </div>
  );
};

export default Graph;
