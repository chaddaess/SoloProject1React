import React  from "react";
import PersonalInfo from "./PersonalInfo/PersonalInfo.jsx";
import About from "./About/About.jsx";
import Footer from "./Footer/Footer.jsx";
import './assets/CSS/App.css'



export default function App(){
    return(
    <div className="App">
    < About/>
    <PersonalInfo/>
    <Footer/>
    </div>
    )
}


