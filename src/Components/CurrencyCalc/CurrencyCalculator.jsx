import React, {useContext, useEffect, useState} from "react";
import "./CurrencyCalculator.css"
import EuroIcon from '@mui/icons-material/Euro';
import {OrderContext} from "../OrderDataTable/OrderContext.jsx";

export default function CurrencyCalculator() {
    // const API = 'https://api.exchangeratesapi.io';
    // const APIKey = 'd4d25b75a195ff606de519cded936f92';
    //
    // const [currency, setCurrency] = useState('');
    // const [exchangeRate, setExchangeRate] = useState(null);
    // const [convertedValue, setConvertedValue] = useState(null)
    //
    // const { totalSummary } = useContext(OrderContext);
    //
    //
    // const handleCurrencyChange = (e) => {
    //     setCurrency(e.target.value);
    //     convertCurrency(e.target.value);
    // };
    //
    // useEffect(() => {
    //
    //     getExchangeData()
    // },[])
    //
    //   const getExchangeData = () => {
    //
    //    fetch(
    //        `${API}/latest?base=USD&access_key=${APIKey}`
    //    )
    //        .then((response) => {
    //            if (!response.ok) {
    //                throw new Error('Błąd podczas pobierania kursu waluty');
    //            }
    //            return response.json();
    //        })
    //        .then((responseData) => {
    //            setExchangeRate(responseData.rates)
    //            // console.log(exchangeRate)
    //        })
    //        .catch((error) => {
    //            console.error("Błąd przy pobraniu kursu waluty", error)
    //        })
    // };
    //
    // const convertCurrency = (targetCurrency) => {
    //     if(!exchangeRate || !targetCurrency) return;
    //     const rate = exchangeRate[targetCurrency];
    //     if(!rate)return;
    //     const converted = calculateTotalSummary() / rate;
    //     setConvertedValue(converted.toFixed(2) + " " + targetCurrency)
    // }



    return (<></>
    //     <div className="currencyCalc">
    //         <div className="exchangeData">
    //             <div className="logoCalc">
    //                 <EuroIcon/>
    //             </div>
    //
    //             <div className="currencyContainer">
    //                 <div className="currencyInfo">
    //                     <span>Przelicz na:</span>
    //                     <select className="currencySelect" value={currency} onChange={handleCurrencyChange}>
    //                         <option value="">Wybierz walutę</option>
    //                         <option value="EUR">EUR</option>
    //                         <option value="USD">USD</option>
    //                         <option value="GBP">GBP</option>
    //                     </select>
    //                 </div>
    //                 <div className="dateInfo">
    //                     <span>Kurs z dnia:</span>
    //                     <select className="dateSelect"></select>
    //                     <p>{exchangeRate ? exchangeRate[currency].toFixed(2) : "-"}</p>
    //                 </div>
    //             </div>
    //             <div className="currencyConverted">{convertedValue}</div>
    //         </div>
    //     </div>
    )
}