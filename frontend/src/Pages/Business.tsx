
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import Navbar from '../Components/Navbar';

export default function Business() {
  const columnDefs = [
    {
      headerName: 'Name', field: 'name', sortable: true, filter: true,
    },
    {
      headerName: 'Brand', field: 'brand', sortable: true, filter: true,
    },
    {
      headerName: 'Quantity', field: 'quantity', sortable: true, filter: true,
    },
    {
      headerName: 'Price', field: 'price', sortable: true, filter: true,
    },
  ];

  const mockRowData = [{
    name: 'Toilet Paper',
    brand: 'Charmin',
    quantity: 10000000000,
    price: 41000000000,
  }];


  return (
    <div>
      <Navbar/>
      <div
        className='ag-theme-balham'
        style={{
          height: '400px',
          width: '80%',
        }}
      >
        <AgGridReact
          columnDefs={ columnDefs }
          rowData={ mockRowData }
        />
      </div>
    </div>
  );
}
