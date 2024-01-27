import React from 'react';
import Sidebar from './Components/Sidebar';
import Table from './Components/Table';
import PieChart from './Components/PieChart';
import Graph from './Components/Graph';
import Card from './Components/Card';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-8 bg-blue-100">
        <h1>Good Morning ! </h1>
      
         <Graph />
         <PieChart />
         <Table />
         <Card />
      </div>
    </div>
  );
};

export default App;
