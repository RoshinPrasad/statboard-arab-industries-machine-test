import React, { useEffect, useState } from 'react';
import instance from '../Connect/Instance';

const TableComponent = () => {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get('/table');
        console.log('Received table data:', response.data);
        setTableData(response.data);
        setLoading(false); // Set loading to false after data is received
      } catch (error) {
        console.error('Error fetching table data:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <p>Loading...</p>; // Display loading state while data is being fetched
  }

  return (
    <>
      <div className=" w-full overflow-x-auto  rounded"><br></br>
        <table className="bg-blue-500 border border-blue-800" style={{ width: '70%', height: '70px' }}>
          <thead>
            <tr>
              <th className="text-white py-2 px-4 border-b border-blue-700">ID</th>
              <th className="text-white py-2 px-4 border-b border-blue-700">Name</th>
              <th className="text-white py-2 px-4 border-b border-blue-700">Quantity</th>
              <th className="text-white py-2 px-4 border-b border-blue-700">Price</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id} className="bg-white border-b border-blue-200">
                <td className="py-2 px-4">{item.id}</td>
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">{item.quantity}</td>
                <td className="py-2 px-4">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-start my-1">
        {Array.from({ length: Math.ceil(tableData.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            className={`mx-2 px-3 py-1 bg-blue-500 text-white rounded focus:outline-none focus:shadow-outline`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default TableComponent;
