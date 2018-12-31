import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Navbar from './navbar';

const About=(props)=>{
  return(
    <div>
    <Navbar />
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h2 className="font-weight-bold">THIS IS DEVELOPED BY PRAKASH1010</h2>
      <div>
        <h4 className="font-weight-bold">this project is for fun</h4>
        <h4 className="font-weight-bold">LET YOUR EMOTIONS TRANSFERED THROUGH YOUR MEMES</h4>
        <h4 className="font-weight-bold">so ladies and gentlemen,</h4>
        <h4 className="font-weight-bold">this is for meme'ology</h4>
        <h2 className="font-weight-bold">HAIL MEMES! HAIL MEMES!</h2>
        <h4 className="font-weight-bold">memes are provided by memegenerator api</h4>
        <br></br>
        <h4 className="font-weight-bold">FOLLOW ME ON</h4>
        <a className="btn btn-primary btn-block font-weight-bold"href="https://github.com/prakashujjwal1010">GITHUB</a>
        <a className="btn btn-primary btn-block font-weight-bold"href="https://www.instagram.com/this.is.prakash1010/">INSTAGRAM</a>
      </div>
      </div>
    </div>
    </div>
  )
}
export default About;
