import React from "react";
import "./OrderList.css"
import OrderListForm from "../../Components/OrderListForm/OrderListForm.jsx";
import { OrderProvider } from "../../Components/OrderDataTable/OrderContext.jsx";


export default function OrderList() {
    return (
        <div className="orderList">
            <OrderProvider>
                <OrderListForm/>
            </OrderProvider>
        </div>

    )

}