import React from "react";
import Dashboard from './components/Dashboard.jsx'
import logo from "./tomato_visible.png";
import Footer from "./components/Footer"
import "./App.css";

function App() {
  return (
    <div className='container'>
      <div className='logo-group'>
        <img className='logo' src={logo} alt={"logo"}></img>
        <h3 className="logo__title">Pomodoro</h3>
      </div>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
