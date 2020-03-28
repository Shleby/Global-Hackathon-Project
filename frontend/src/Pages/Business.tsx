import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { Navbar } from "../Components/Navbar";
import { GridItem, Grid, Card } from "@patternfly/react-core";
import { GridApi, ColumnApi } from "ag-grid-community";
export interface AgEvent {
  type: string;
}
export interface AgGridEvent extends AgEvent {
  api: GridApi;
  columnApi: ColumnApi;
}

export const Business: React.FC = AgGridEvent => {
  let gridOptions = {
    pagination: true,
    api: GridApi
  };
  const columnDefs = [
    { headerName: "Name", field: "name", sortable: true, filter: true },
    { headerName: "Brand", field: "brand", sortable: true, filter: true },
    { headerName: "Quantity", field: "quantity", sortable: true, filter: true },
    { headerName: "Price", field: "price", sortable: true, filter: true }
  ];

  const mockRowData = [
    {
      name: "Toilet Paper",
      brand: "Charmin",
      quantity: 10000000000,
      price: 41000000000
    }
  ];

  const onBtnExport = () => {
    var params = getParams();
    if (params.suppressQuotes || params.columnSeparator) {
      alert(
        "NOTE: you are downloading a file with non-standard quotes or separators - it may not render correctly in Excel."
      );
    }
    // gridOptions.api.exportDataAsCsv(params);
  };
  return (
    <div>
      <Navbar mainPage={false} />

      <Grid>
        <GridItem sm={6} md={6} lg={6} xl={6}>
          hey
        </GridItem>
        <GridItem sm={6} md={6} lg={6} xl={6}>
          hey
        </GridItem>
        <GridItem sm={6} md={6} lg={6} xl={6}>
          hey
        </GridItem>
        <GridItem sm={6} md={6} lg={6} xl={6}>
          <Card>
            <div>
              <button onClick={() => onBtnExport()}>
                Download Inventory as CSV
              </button>
            </div>
            <div
              className="ag-theme-balham"
              style={{
                height: "400px",
                width: "80%"
              }}
            >
              <AgGridReact columnDefs={columnDefs} rowData={mockRowData} />
            </div>
          </Card>
        </GridItem>
      </Grid>
    </div>
  );
};
function getParams() {
  return {
    suppressQuotes: getValue("#suppressQuotes"),
    columnSeparator: getValue("#columnSeparator"),
    customHeader: getValue("#customHeader"),
    customFooter: getValue("#customFooter")
  };
}
function getValue(inputSelector: any) {
  var text = document.querySelector(inputSelector).value;
  switch (text) {
    case "string":
      return (
        'Here is a comma, and a some "quotes". You can see them using the\n' +
        "api.getDataAsCsv() button but they will not be visible when the downloaded\n" +
        "CSV file is opened in Excel because string content passed to\n" +
        "customHeader and customFooter is not escaped."
      );
    case "array":
      return [
        [],
        [
          {
            data: {
              value: 'Here is a comma, and a some "quotes".',
              type: "String"
            }
          }
        ],
        [
          {
            data: {
              value:
                "They are visible when the downloaded CSV file is opened in Excel because custom content is properly escaped (provided that suppressQuotes is not set to true)",
              type: "String"
            }
          }
        ],
        [
          {
            data: {
              value: "this cell:",
              type: "String"
            },
            mergeAcross: 1
          },
          {
            data: {
              value: "is empty because the first cell has mergeAcross=1",
              type: "String"
            }
          }
        ],
        []
      ];
    case "none":
      return;
    case "tab":
      return "\t";
    case "true":
      return true;
    case "none":
      return;
    default:
      return text;
  }
}
