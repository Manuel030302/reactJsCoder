import React from "react";
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget.jsx";

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
            <li><a href="">Home</a></li>
            <li><a href="">Collection</a></li>
            <li><a href="">Community</a></li>
            <li><a href="">Profile</a></li>
            <li><a href="">Explore</a></li>
            <li><a href=""></a></li>
          </ul>

          <CartWidget/>
          
        </div>

      </nav>
      
    </header>
    
  );
}

export default NavBar;