import React from "react";
/* import "./NavBar.css"; */
import CartWidget from "../CartWidget/CartWidget.jsx";
import { Link } from "react-router-dom";

function NavBar() {
    const logoImage = "https://cdn-icons-png.flaticon.com/512/1451/1451303.png"
  return (
    <header>
      <nav>

        <div className="logoTipo">
          <img src={logoImage} alt="" />
          <p>GameStore</p>
        </div>

        <div className="navContainer">
          
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/collection"}>Collection</Link></li>
            <li><Link to={"/community"}>Community</Link></li>
            <li><Link to={"/profile"}>Profile</Link></li>
            <li><Link to={"/explore"}>Explore</Link></li>
          </ul>

          <CartWidget/>
          
        </div>

      </nav>
      
    </header>
    
  );
}

export default NavBar;