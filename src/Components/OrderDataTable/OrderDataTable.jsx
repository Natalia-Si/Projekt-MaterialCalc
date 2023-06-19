import React from "react";
import "./OrderDataTable.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from "@mui/icons-material/Delete.js";


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'product', headerName: 'Produkt', width: 130 },
    { field: 'size', headerName: 'Rozmiar DN', width: 130 },
    { field: 'color', headerName: 'Kolor', width: 130 },
    { field: 'pieces', headerName: 'Ilość', width: 130 },
    { field: 'pricepcs', headerName: 'Cena PLN/szt', width: 130 },
    { field: 'priceTotal', headerName: 'Cena Razem', width: 130 },
    {
        field: 'actions',
        headerName: 'Akcja',
        width: 100,
        renderCell: (params) => {
            return (
                <>
                    <DeleteIcon className="orderItemEdit"></DeleteIcon>
                </>

            )
        }
    }

];

//Do zmiany wartości wierszy

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function OrderDataTable() {
    return (
        <div>
            <DataGrid
                rows={rows}
                columns={columns}
                summary={rows}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}

            />
        </div>

    )
}