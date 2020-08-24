import React from 'react';
import {NavLink} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Slider from './Slider';
import Header from './Header';

const Navbar = () => {
        return(
          
         
             

        <div className="container-fluid nav-bg"> 
            <Header/>
            <div className="row">

           
             
                <div className="col-12 mx-auto"> 
                
        <nav className="navbar navbar-expand-lg navbar-light">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav  mb-2 mb-lg-0" >
      <li className="nav-item active ">
        <NavLink  activeClassName='menu_active'
    
        className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      
    
      <li className="nav-item">
        <NavLink  activeClassName='menu_active'className="nav-link" to="/about">SUBJECTS </NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='menu_active' className="nav-link" to="/Our Portfolio">ARTICLES</NavLink>
      </li>

      <li className="nav-item">
        <NavLink activeClassName='menu_active' className="nav-link" to="/Services">INFO</NavLink>
      </li>

      <li className="nav-item">
        <NavLink activeClassName='menu_active' className="nav-link" to="/Blog and News">REWARDS</NavLink>
      </li>

      <li className="nav-item">
        <NavLink activeClassName='menu_active' className="nav-link" to="/contact">TERMS&CONDITIONS</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='menu_active' className="nav-link" to="/contact">ABOUT US</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='menu_active' className="nav-link" to="/contact">AWARDEES</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='menu_active' className="nav-link" to="/contact">LOG IN|SIGN UP</NavLink>
      </li>
     
    </ul>
   
  </div>
</nav>
</div>


            </div>
            <Slider/>
            </div>


        );


};
export default Navbar;