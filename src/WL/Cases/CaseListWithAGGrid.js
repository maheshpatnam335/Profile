import { AgGridReact } from "ag-grid-react"
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';
import { useMemo } from "react";

const CaseListWithAgGrid = () => {
    const cols =
        [
            { headerName: "Make", field: "make" },
            { headerName: "Model", field: "model" },
            { headerName: "Price", field: "price" }
        ]
        const dat=[
            {make: "Toyota", model: "Celica", price: 35000},
            {make: "Ford", model: "Mondeo", price: 32000},
            {make: "Porsche", model: "Boxster", price: 72000}
        ]
        const defaultColDef = useMemo(() => {
            return {
              width: 170,
              sortable: true,
            };
          }, []);
    return <div
        className="ag-theme-alpine"
        style={{
            height: '200px',
            width: '600px'
        }}
    >
        <AgGridReact
                  defaultColDef={defaultColDef}

            columnDefs={cols}
            rowData={dat}>
        </AgGridReact>
    </div>
}
export default CaseListWithAgGrid;