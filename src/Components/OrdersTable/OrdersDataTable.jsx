import React, {useState} from "react";
import "./OrdersDataTable.css"
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import {Link} from "react-router-dom";



export default function OrdersDataTable() {

    // const [data, setData] = useState(rows)
    // const handleDelete = (id)=>{
    //     setData(data.filter((item)=> item.id !== id));
    // };


    const columns = [
        { field: 'orderid', headerName: 'Nr zamówienia', width: 300 },
        { field: 'ordercode', headerName: 'Kod zamówienia', width: 700 },
        {
            field: 'actions',
            headerName: 'Akcja',
            width: 100,
            renderCell: (params) => {
                return (
                    <>
                        <DeleteIcon className="orderItemEdit"></DeleteIcon>
                        <EditIcon  className="orderItemDelete"/>
                    </>

                )
            }
        },
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

    return (
        <div className="datatable">
            <Link to="/orderlist/cerateOrder">
                <button className="addOrderBtn">
                    <AddIcon/>
                    <span>Dodaj zamówienie</span>
                </button>
            </Link>

            <DataGrid
                rows={rows} disableRowSelectionOnClick
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    )
}