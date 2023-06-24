import React, {useState} from "react";
import "./createOrder.css"
import OrderDataTable from "../../Components/OrderDataTable/OrderDataTable";
import CurrencyCalculator from "../../Components/CurrencyCalc/CurrencyCalculator";
import { doc, setDoc, addDoc, collection, serverTimestamp } from "firebase/firestore";
import {db} from "../../firebase.js";

export default function CreateOrder() {

    const [data, setData] = useState({})

    const handleAdd = async (e) => {
        e.preventDefault()
       const res = await addDoc(collection(db, "cities"), {
            name: "Los Angeles",
            state: "CA",
            country: "USA",
           timeStamp: serverTimestamp()
        });

        console.log(res.id)
    }

    return(
        <div className="createOrder">
            <div className="orderContainer">
                <div className="orderTitleContainer">
                    <h2>Nr zamówienia i kod</h2>
                    <form onSubmit={handleAdd}>
                        <button type="submit" className="saveclosebtn">Zapisz i zamknij</button>
                    </form>

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