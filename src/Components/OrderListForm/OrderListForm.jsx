import React, {useState} from "react";
import "./OrderListForm.css"
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import {Link} from "react-router-dom";


//do czego mi to potrzebne >?>>>>>>???? POWINNA BYC INNA NAZWA PLIKU tutaj chodzi o liste zamówień a nie formularz


export default function OrderListForm() {

    const [orders, setOrders] = useState([
        { id: 1, orderid: '1', ordercode: 'ABC123' },
        { id: 2, orderid: '2', ordercode: 'DEF456' },
        { id: 3, orderid: '3', ordercode: 'GHI789' },
    ])




    const handleDeleteOrder = () => {
        const updateOrders = orders.filter((order) => order.id !== id);
        setOrders(updateOrders);
    }

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
                        <DeleteIcon className="orderItemEdit"
                        onClick={() => handleDeleteOrder(orderId)}
                        style={{cursor: "pointer"}}/>
                        <EditIcon  className="orderItemDelete"/>
                    </>

                )
            }
        },
    ];

    return (
        <div className="datatable">
            <Link to="/createOrder">
                <button className="addBtn">
                    <AddIcon/>
                    <span>Dodaj zamówienie</span>
                </button>
            </Link>

            <DataGrid
                rows={orders} disableRowSelectionOnClick
                columns={columns}
            />
        </div>
    )
}