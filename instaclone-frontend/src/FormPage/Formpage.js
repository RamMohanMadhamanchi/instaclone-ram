import React from 'react';
import './Formpage.css'
import { Link } from "react-router-dom";
import InstaClone from './InstaClone.png';
import HomeIcon from './HomeIcon.png';

export default function Formpage() {
  return (
  <div className="FormPage">
    <div className="header">
      <img src={InstaClone} alt="logo"></img>
      <div className="headerTools">
        <Link to="/Postview" className="formpage_btn"><img src={HomeIcon} alt="camara-icon"></img></Link> 
      </div>
    </div>
    <div className="FormPageDescription">
      <input type="file" id="image" name="image" placeholder="No file chosen"/><br/>
      <div className='author-location'>
        <input type="author" id="author" name="author" placeholder="Author"/>
        <input type="location" id="location" name="location" placeholder="location"/>
      </div><br/>
      <input type="description" id="description" name="description" placeholder="Description"/><br/>
      <Link to="/Postview" className="btn">Post</Link>
    </div>
  </div>
  );
}