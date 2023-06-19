import React from "react";
import TopBar from "./Components/Topbar/TopBar.jsx";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css"
import WelcomePage from "./Pages/Welcome/WelcomePage.jsx";
import Pulpit from "./Pages/Pulpit/Pulpit";
import OrderList from "./Pages/OrderList/OrderList";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    } from "react-router-dom";
import CreateOrder from "./Pages/CreateOrder/createOrder";




function App() {
  return (
    <Router>
      <TopBar/>
        <div className="container">
            <Sidebar/>
            <Routes>
                <Route path="/" element={ <WelcomePage/> } />
                <Route path="/pulpit" element={ <Pulpit/> }/>
                <Route path="/orderlist" element={ <OrderList/> }/>
                <Route path="/orderlist/cerateOrder" element={ <CreateOrder/> }/>
            </Routes>
        </div>
    </Router>
  )
}

export default App
