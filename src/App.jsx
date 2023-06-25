import React from "react";
import TopBar from "./Components/Topbar/TopBar.jsx";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css"
import LoginPage from "./Pages/LoginPage/LoginPage.jsx";
import Pulpit from "./Pages/Pulpit/Pulpit";
import OrderList from "./Pages/OrderList/OrderList";
import {
    BrowserRouter as Router,
    Routes,
    Route, Navigate,
} from "react-router-dom";
import CreateOrder from "./Pages/CreateOrder/createOrder";
import { OrderProvider } from "./Components/OrderDataTable/OrderContext.jsx";
import { db } from "./firebase.js";



function App() {
    // const currentUser = false;
    //
    // const RequireAuth = ({ children }) => {
    //     console.log("currentUser:", currentUser);
    //     return currentUser ? (children) : <Navigate to="/LoginPage" />;
    // };


  return (
      <OrderProvider>
          <Router>
              <TopBar/>
              <div className="container">
                  <Sidebar/>
                  <Routes>
                      <Route path="/loginPage" element={ <LoginPage/> } />
                      <Route path="/" element={ <Pulpit /> } />
                      <Route path="/OrderList" element={ <OrderList/> }/>
                      <Route path="/createOrder" element={ <CreateOrder/> }/>
                  </Routes>
              </div>
          </Router>
      </OrderProvider>

  )
}

export default App
