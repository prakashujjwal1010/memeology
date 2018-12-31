import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import createLogo from '../plus.png';
import pollLogo from '../poll-logo.png';
import userLogo from '../about-us-icon-15.jpg';
import brand from '../meme-logo.png';
import {Link} from 'react-router-dom';
import Navbar from './navbar';

const cardDstyle={
  width:'300px',
  height:'400px'
}

const brandStyle={
  width:'40px',
  height:'40px'
}

const home=(props)=>{
  return(
    <div className="container">
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <div className="container">

        <h1 className="display-1 font-weight-bold">THIS IS MEME'OLOGY</h1>
        <img className="rounded mx-auto d-block" src={brand} alt="brand" ></img>

      <div className="card-deck">
        <div className="card" style={cardDstyle}>
        <Link className="btn btn-danger" to="/create"><img className="card-img-top" src={createLogo} alt="create">
          </img>
          </Link>
          <div className="card-body">
            <div className="card-title font-weight-bold">CREATE MEME</div>
          </div>
        </div>
        <div className="card" style={cardDstyle}>
          <Link className="btn btn-danger" to="/vote"><img className="card-img-top" src={pollLogo} alt="vote">
            </img>
          </Link>
          <div className="card-body">
            <div className="card-title font-weight-bold">VOTE</div>
          </div>
        </div>

        <div className="card" style={cardDstyle}>
          <Link className="btn btn-danger" to="/about"><img className="card-img-top" src={userLogo} alt="user">
            </img>
          </Link>
          <div className="card-body">
            <div className="card-title font-weight-bold">ABOUT US</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default home;
