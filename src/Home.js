import React from 'react';
import './index.css';
import { useLocation } from 'react-router-dom';  

function Home() {
  const location = useLocation();  
  const username = location.state && location.state.username;

  return (
    <div className="home_wrap">
      <div className="home_content">
        <h1 className="welcome_text">{username} Welcome to HeadCount</h1>
        <div className="welcome_info_text">
          
          <p>Your Ultimate Workforce Management Solution</p>
          <p>Efficiently manage your employee data, departments, and more with ease.</p>
        </div>
      </div>
      <div>
        <img
          src="https://ctfassets.imgix.net/vh7r69kgcki3/3JmE8nqDzhWqtltmCZxk9s/6f1486080c47f60696fc2ff5bc3b12bf/Web_150DPI-20221216_WeWork_Product_Shoot_Q4_15.jpg?auto=format%20compress&fit=crop&q=50&w=1000&h=1333"
          alt="WeWork Product"
          className="image_container"
        />
      </div>
    </div>
  );
}

export default Home;