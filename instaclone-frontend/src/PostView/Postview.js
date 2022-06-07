import React from 'react';
import './Postview.css';
import InstaClone from './InstaClone.png';
import camera from './camera.png';
import { Link } from "react-router-dom";

const data = [];

async function fetchData() {
  let res = await fetch('https://localhost:9000/api/v1/posts', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  });
  let currentpost = await res.json();
  data.push(currentpost);
}
fetchData();

export default function Postview() {
  return (
    <div className="site-container">
      <div className="header">
        <img src={InstaClone} alt="logo"></img>
        <div className="headerTools">
          <Link to="/Form" className="formpage_btn"><img src={camera} alt="camara-icon"></img></Link> 
        </div>
      </div>
      <div>
      {data.map((item) => (
        <div className="post">
          <div className="postHeader">
            <div>
              <p><b>{item.author}</b></p>
              <p className="descriptionText">{item.location}</p>
            </div>
            <svg
              aria-label="More Options"
              class="_8-yf5 "
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <circle cx="12" cy="12" r="1.5"></circle>
              <circle cx="6" cy="12" r="1.5"></circle>
              <circle cx="18" cy="12" r="1.5"></circle>
            </svg>
          </div>
          <img src={item.image} alt="post"></img>
          <div className="postFooter">
            <div className="footTools">
              <div>
                <span>
                  <svg
                    aria-label="Like"
                    class="_8-yf5 "
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                  </svg>
                </span>
                <span>
                  <svg
                    aria-label="Share Post"
                    class="_8-yf5 "
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <line
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="22"
                      x2="9.218"
                      y1="3"
                      y2="10.083"
                    ></line>
                    <polygon
                      fill="none"
                      points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polygon>
                  </svg>
                </span>
              </div>
              <div>
                <p>{item.timestamp}</p>
              </div>
            </div>
            <p className="descriptionText">0 Likes</p>
            <p><b>{item.description}</b></p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}