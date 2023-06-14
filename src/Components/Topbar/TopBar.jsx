import React from "react";
import "./topbar.css"
import { AccountBox  } from '@mui/icons-material';

export default function  TopBar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
            <div className="logo">@ MaterialCalculator</div>
            <div className="topcenter">
                <p>Witaj</p>
            </div>
            <div className="topright">
                <div className="userContainer">
                    <AccountBox className="userContainerIcon" fontSize="large"/>
                    Użytkownik
                </div>
            </div>
            </div>
        </div>
    )
}