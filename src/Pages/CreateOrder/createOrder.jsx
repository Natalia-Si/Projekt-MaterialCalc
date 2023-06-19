import React from "react";
import "./createOrder.css"
import OrderDataTable from "../../Components/OrderDataTable/OrderDataTable";
import CurrencyCalculator from "../../Components/CurrencyCalc/CurrencyCalculator";

export default function CreateOrder() {
    return(
        <div className="createOrder">
            <div className="orderContainer">
                <div className="orderTitleContainer">
                    <h2>Nr zamówienia i kod</h2>
                    <button className="saveclosebtn">Zapisz i zamknij</button>
                </div>

                <div className="orderInfoContainer">
                    <div className="orderCode">
                        <p>Kod zamówienia</p>
                        <input placeholder="Woprowadz kod zamówienia"/>
                    </div>
                    <div className="orderExtraInfo">
                        <p>Informacje dodatkowe</p>
                        <input placeholder="Informacje dodatkowe"/>
                    </div>
                </div>

                {/*    tabela z zamówieniem osobny komponent*/}
                <div className="orderDataTable">
                    <OrderDataTable/>
                </div>

                {/*Kalkulator walut osobny komponent */}
                <div className="currencyCalculator">
                    <CurrencyCalculator/>
                </div>
            </div>


        </div>


    )
}