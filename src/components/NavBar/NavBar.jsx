import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget.jsx";
import { Link } from "react-router-dom";

function NavBar() {
    const logoImage = "https://cdn-icons-png.flaticon.com/512/1451/1451303.png"
  return (
    <header>
      <nav>

        <Link to={"/"}>
          <div className="logoTipo">
            <img src={logoImage} alt="" />
            <p>GameStore</p>
          </div>
        </Link>
        

        <div className="navContainer">
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/category/adventure"}>Adventure</Link></li>
            <li><Link to={"/category/action"}>Action</Link></li>
            <li><Link to={"/category/fps"}>FPS</Link></li>
            <li><Link to={"/category/rpg"}>RPG</Link></li>
            <li><Link to={"/category/platforms"}>Platforms</Link></li>
          </ul>

          <CartWidget/>
        </div>
      </nav>
    </header>    
  );
}

export default NavBar;