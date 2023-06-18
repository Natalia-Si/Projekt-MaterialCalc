import React from "react";
import TopBar from "./Components/Topbar/TopBar.jsx";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css"
import WelcomePage from "./Pages/Welcome/WelcomePage.jsx";
import Pulpit from "./Pages/Pulpit/Pulpit";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      <TopBar/>
        <div className="container">
            <Sidebar/>
            <Routes>
                <Route path="/" element={ <WelcomePage/> } />
                <Route path="/pulpit" element={ <Pulpit/> }/>
            </Routes>
        </div>
    </Router>
  )
}

export default App
