import React from "react";
import "./OrderList.css"
import OrdersDataTable from "../../Components/OrdersTable/OrdersDataTable";


export default function OrderList() {
    return (
        <div className="orderList">
            <OrdersDataTable/>
        </div>

    )

}