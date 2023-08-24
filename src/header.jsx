import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';
import { ImHome3 } from "react-icons/im";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // You can perform logout logic here, if needed.
    // For now, simply navigate to the login page.
    navigate('/');
  };

  return (
    <header>
      <ul className="nav-list">
        <li className="header_logo">
          <a>HeadCount</a>
        </li>

        <li className="nav-item">
  <Link to="/Home">
    <ImHome3 /> 
  </Link>
</li>

        <li className="nav-item">
          <Link to="/table">BluePage SyncUp</Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboards">Dashboards</Link>
        </li>
        <li className="nav-item">
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
