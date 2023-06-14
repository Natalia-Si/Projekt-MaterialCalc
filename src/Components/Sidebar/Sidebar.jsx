import React from "react";
import "./sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

export default function Sidebar() {

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <ul className="sidebarList">
                        <li className="sidebarListItem" active>
                            <DashboardIcon className="sidebarIcon" fontSize="large"/>
                            Pulpit
                        </li>
                        <li className="sidebarListItem" >
                            <LibraryBooksIcon className="sidebarIcon" fontSize="large"/>
                            Zamówienia
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}