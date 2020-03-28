import React, { useState, useEffect } from "react";
import { Navbar } from "../Components/Navbar";
import { AgGridReact } from "ag-grid-react";

export const Search: React.FC = () => {
  const [columnDefs, setColumnDefs] = useState();
  const [rowData, setRowData] = useState();

  useEffect(() => {
    fetch("./jsonFolder/searchFakeBackend.json")
      .then(req => req.json())
      .then(res => {
        setColumnDefs(res.columnDefs);
        setRowData(res.rowData);
      });
  });
  return (
    <div>
      <Navbar mainPage={false} />
      <AgGridReact columnDefs={columnDefs} rowData={rowData}></AgGridReact>
    </div>
  );
};
