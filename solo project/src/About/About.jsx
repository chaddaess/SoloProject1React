import React  from "react";
import me from "../assets/img/realMe.jpg"



export default  function About(){
    return(
        <div className="AboutMe">
        <img src={me} className="mePicture" alt="me" />
        <div className="text">
        <h2 className="Name">Chadha Essid</h2>
        <h3 className="position">Amateur Web Developer</h3>
        <p className="email">chadhachadha2000@gmail.com</p>
        <button className="btn btn-light">E-Mail</button>
        <button className="btn btn-light">LinkedIn</button>
        </div>
        </div>
    );
}