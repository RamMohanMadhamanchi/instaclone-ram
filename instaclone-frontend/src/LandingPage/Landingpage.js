import React from 'react';
import './Landingpage.css'
import { Link } from "react-router-dom";
import landingPic from "./LandingPic.PNG";

export default function Landingpage() {
    return (
    <div className="landingPage">
      <img src={landingPic} alt="landingPicture"></img>
      <div className="landingPageDescription">
        <h1>10x Team 04</h1>
        <Link to="Postview" className="btn">Enter</Link>
      </div>
    </div>
    );
}