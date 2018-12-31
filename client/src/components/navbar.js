import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import brand from '../meme-logo.png';
import {Link} from 'react-router-dom';


const brandStyle={
  width:'40px',
  height:'40px'
}

const Navbar=(props)=>{
  return(
    <div className="container">
      <nav className="navbar navbar-expand-md bg-danger navbar-dark fixed-top">
        <img className="navbar-brand" src={brand} alt="brand" style={brandStyle}></img>
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link className="nav-link font-weight-bold" to='/home'>HOME</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link font-weight-bold" to='/create'>CREATE</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link font-weight-bold" to='/about'>ABOUT</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link font-weight-bold" to='/login'>LOGIN</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link font-weight-bold" to='/login'>SIGN-UP</Link>
          </li>

        </ul>
      </nav>
      </div>
  )
}
export default Navbar;
