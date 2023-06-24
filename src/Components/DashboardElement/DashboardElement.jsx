import React from "react";
import "./DashboardElelemnt.css"
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Link} from "react-router-dom";

export default function DashboardElement () {
    return (
        <div className="dashboardContainer">
            <div className="addContainer">
                <div className="addOrderBtn">
                    <div className="shopBtn">
                        <LocalMallIcon fontSize="medium"/>
                    </div>
                    <span className="button-text">Dodaj <br/>zamówienie</span>
                </div>
                <Link to="/CreateOrder" style={{textDecoration:"none", color: "white"}}>
                    <AddCircleOutlineIcon  fontSize="large"/>
                </Link>

            </div>

            <div className="ListContainer">
                <div className="ListOrderBtn">
                    <div className="ListBtn">
                        <PersonIcon/>
                    </div>
                    <span className="button-text">Zobacz <br/>zamówienia</span>
                </div>
                <Link to="/OrderList" style={{textDecoration:"none", color: "black"}}>
                    <VisibilityIcon fontSize="large"/>
                </Link>
            </div>
        </div>
    )
}