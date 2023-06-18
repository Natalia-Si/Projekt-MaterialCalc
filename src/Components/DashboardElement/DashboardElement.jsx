import React from "react";
import "./DashboardElelemnt.css"
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function DashboardElement () {
    return (
        <div className="dashboardContainer">
            <div className="addContainer">
                <div className="addOrderBtn">
                    <div className="shopBtn">
                        <LocalMallIcon fontSize="medium"/>
                    </div>
                    <span>Dodaj <br/>zamówienie</span>
                </div>
                <AddCircleOutlineIcon  fontSize="large"/>
            </div>

            <div className="ListContainer">
                <div className="ListOrderBtn">
                    <div className="ListBtn">
                        <PersonIcon/>
                    </div>
                    <span>Zobacz <br/>zamówienia</span>
                </div>
                <VisibilityIcon fontSize="large"/>
            </div>
        </div>
    )
}