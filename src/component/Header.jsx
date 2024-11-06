import { useState } from "react";
import { logoLink } from "../utils/links";
import { Link } from "react-router-dom";


const Header=() => {
   const[btn,setbtn]=useState("Login");
    return (
       <div className="Header">
         <div className="logo">
          <img className="image" src={logoLink}/>
         </div>
         <div className="ul-list">
          <ul className="ul1"><Link to="/">HOME</Link></ul>
          <ul className="ul2"><Link to="/about">ABOUT</Link></ul>
          <ul className="ul3">CART</ul>
          <ul className="ul4"><Link to="/contact">CONTACT</Link></ul>
        </div>
        <div> <button className="login" onClick={()=>{
             btn==="Login" ?setbtn("Logout") :
           setbtn("Login");
           console.log(setbtn);
          }} >{btn}</button></div>
       </div>
    ) 
 }
 export default Header;