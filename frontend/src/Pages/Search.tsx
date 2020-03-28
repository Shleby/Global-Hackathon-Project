import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Navbar } from '../Components/Navbar';

const Search: React.FC = () => {
  const [columnDefs, setColumnDefs] = useState();
  const [rowData, setRowData] = useState();

  useEffect(() => {
    fetch('./jsonFolder/searchFakeBackend.json')
      .then((req) => req.json())
      .then((res) => {
        setColumnDefs(res.columnDefs);
        setRowData(res.rowData);
      });
  });
  return (
    <div>
      <Navbar mainPage={ false } />
      <AgGridReact columnDefs={ columnDefs } rowData={ rowData } />
    </div>
  );
};

export default Search;
