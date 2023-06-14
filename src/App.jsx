import React from "react";
import TopBar from "./Components/topbar/TopBar.jsx";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css"

function App() {


  return (
    <div>
      <TopBar/>
        <div className="container">
            <Sidebar/>
            <div className="others">other pages</div>
        </div>
    </div>
  )
}

export default App
