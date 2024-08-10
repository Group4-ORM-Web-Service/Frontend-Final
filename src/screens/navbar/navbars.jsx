/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import './navbars.css'
import logo from '../../images/ipad.jpg';
import pic1 from '../../images/profile-gray2.png';
import pic2 from '../../images/buy-bag.png';

const NavBars = () => {

    const [menu, setMenu] = useState("home")

    return (
        <div className='navbar'>
            <img src={logo} alt="" className="logo"/>
            <ul className='navbar-menu'>
                <li onClick={()=> setMenu("home")} className={menu==="home"?"active":""}>home</li>
                <li onClick={()=> setMenu("about")} className={menu==="about"?"active":""}>about</li>
                <li onClick={()=> setMenu("products")} className={menu==="products"?"active":""}>products</li>
                <li onClick={()=> setMenu("contact")} className={menu==="contact"?"active":""}>contact</li>
                <li onClick={()=> setMenu("services")} className={menu==="services"?"active":""}>services</li>
            </ul>
            <div className="navbar-right">
                 <div className="navbar-search-icon">
                 <div className="search-container">
        <input type="text" placeholder=" Search..." />
        <button type="submit" className="button-sumbit">
          Search
        </button>
      </div>
    </div>
    <img src={pic1} alt="" />
    <img src={pic2} alt="" className="icon-bag" />
    <button className="button-signin">Sign In</button>
            </div>
        </div>
    );
}

export default NavBars;