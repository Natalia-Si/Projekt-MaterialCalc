import React from "react";
import "./CurrencyCalculator.css"
import EuroIcon from '@mui/icons-material/Euro';

export default function CurrencyCalculator() {
    return (
        <div className="currencyCalc">
            <div className="exchangeData">
                <div className="logoCalc">
                    <EuroIcon/>
                </div>

                <div className="currencyContainer">
                    <div className="currencyInfo">
                        <span>Przelicz na:</span>
                        <select className="currencySelect"></select>
                    </div>
                    <div className="dateInfo">
                        <span>Kurs z dnia:</span>
                        <select className="dateSelect"></select>
                        <p>4,46</p>
                    </div>
                </div>
                <div className="currencyConverted">120,00 EUR</div>

            </div>
        </div>
    )
}