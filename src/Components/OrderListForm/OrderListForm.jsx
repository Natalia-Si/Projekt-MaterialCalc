import React, {useContext} from "react";
import "./OrderListForm.css"
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import {Link} from "react-router-dom";
import {OrderContext, OrderProvider} from "../OrderDataTable/OrderContext.jsx";





export default function OrderListForm() {

    const { orders, addOrder, deleteOrder} = useContext(OrderContext);



    const handleDeleteOrder = (orderId) => {
        deleteOrder(orderId);
    }


    const columns = [
        { field: 'orderid', headerName: 'Nr zamówienia', width: 300 },
        { field: 'orderCode', headerName: 'Kod zamówienia', width: 700 },
        {
            field: 'actions',
            headerName: 'Akcja',
            width: 100,
            renderCell: (params) => {
                return (
                    <>
                        <DeleteIcon className="orderItemEdit"
                        onClick={() => handleDeleteOrder(params.row.id)}
                        style={{cursor: "pointer"}}/>
                        <EditIcon  className="orderItemDelete"/>
                    </>

                )
            }
        },
    ];

    return (
        <OrderProvider>
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
        </OrderProvider>
    )
}