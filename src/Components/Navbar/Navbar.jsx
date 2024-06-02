import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


import { ShopContext } from "../../Context/ShopContex";

import { IoIosArrowDropdown } from "react-icons/io";

import cart_icon from '../Assets/cart_icon.png'
import logo from "../Assets/logo.png";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop")
  const {getTotalCartItems} = useContext(ShopContext)
  const menuRef = useRef()

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open')
  }
  
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo_img" />
        <p>SHOPPING</p>
      </div>
      <IoIosArrowDropdown className="nav-dropdown" onClick={dropdown_toggle}/>
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu('shop')}><Link className="textDec-none" to="/">Shop</Link>{menu === 'shop' ? <hr /> : <></>}</li>
        <li onClick={() => setMenu('men')}><Link className="textDec-none" to="/men">Men</Link>{menu === 'men' ? <hr /> : <></>}</li>
        <li onClick={() => setMenu('women')}><Link className="textDec-none" to="/women">Women</Link>{menu === 'women' ? <hr /> : <></>}</li>
        <li onClick={() => setMenu('kids')}><Link className="textDec-none" to="/kids">Kids</Link>{menu === 'kids' ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="" />  </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
