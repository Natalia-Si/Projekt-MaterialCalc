import {OrderContext, OrderProvider} from "../../Components/OrderDataTable/OrderContext.jsx";
import React, {useContext, useState} from "react";
import "./createOrder.css"
import OrderDataTable from "../../Components/OrderDataTable/OrderDataTable";
import CurrencyCalculator from "../../Components/CurrencyCalc/CurrencyCalculator";
import {db} from "../../firebase.js";
import { addDoc, collection } from "firebase/firestore";
import {Link, useNavigate} from "react-router-dom";



export default function CreateOrder() {

    const {  addOrder, orderCount, setOrderCount } = useContext(OrderContext)
    const [newOrder, setNewOrder] = useState(null);
    const navigate = useNavigate();

    const handleAdd = async (e) => {
        e.preventDefault();

        const orderCode = e.currentTarget.elements.orderCode.value;
        console.log('Wartość pola zamówienia:', orderCode);

        const order = {
            orderid: orderCount,
            orderCode: orderCode,
        };
        console.log('Wartość początkowa orderCount:', orderCount);


        setNewOrder(order);
        setOrderCount((prevCount) => prevCount + 1);

        console.log('Zwiększenie orderCount:', orderCount);

        try {
            addOrder(order);
            navigate("/orderList");
        } catch (error) {
            console.error("Błąd podczas dodawania zamówienia:", error);
        }
    };

    return(
        <OrderProvider>
            <div className="createOrder">
                <div className="orderContainer">
                    <div className="orderTitleContainer">
                        <form onSubmit={handleAdd}>
                            <h2>Nowe zamówienie</h2>
                                <button type="submit" className="saveclosebtn">Zapisz i zamknij</button>
                            <div className="orderInfoContainer">
                                <div className="orderCode">
                                    <p>Kod zamówienia</p>
                                    <input name="orderCode" placeholder="Woprowadz kod zamówienia"/>
                                </div>
                                <div className="orderExtraInfo">
                                    <p>Informacje dodatkowe</p>
                                    <input placeholder="Informacje dodatkowe"/>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/*    tabela z zamówieniem osobny komponent*/}
                    <div className="orderDataTable">
                        <OrderDataTable/>
                    </div>

                    {/*Kalkulator walut osobny komponent */}
                    <div className="currencyCalculator">

                    </div>
                </div>
            </div>
        </OrderProvider>
    )
}