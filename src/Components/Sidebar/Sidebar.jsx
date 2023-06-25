import React from "react";
import "./sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Link} from "react-router-dom";

export default function Sidebar() {

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <ul className="sidebarList">
                        <Link to="/" style={ {textDecoration: "none", color: "white"} }>
                            <li className="sidebarListItem">
                                <DashboardIcon className="sidebarIcon" fontSize="large"/>
                                Pulpit
                            </li>
                        </Link>

                        <Link to="/OrderList" style={ {textDecoration: "none", color: "white"} }>
                            <li className="sidebarListItem" >
                                <LibraryBooksIcon className="sidebarIcon" fontSize="large"/>
                                Zamówienia
                            </li>
                        </Link>

                    </ul>

                    <ul className="sidebarListBottom">
                        <Link to="/LoginPage" style={ {textDecoration: "none", color: "white"} }>
                            <li className="sidebarListItem" style={{color:"#8c8c8d" }}>
                                <ExitToAppIcon className="sidebarIcon" fontSize="large" />
                                Logout
                            </li>
                        </Link>
                    </ul>

                </div>
            </div>
        </div>
    )
}