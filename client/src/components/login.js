import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
//import queryString from 'query-string';
import axios from 'axios';

const apiKey='286130d2-5116-47d4-a680-10948653b1b7';

class Login extends Component{

  render(){
    return(
      <div>
      <br></br>
      <br></br>
      <br></br>
      <div class="alert alert-warning alert-dismissible fade show">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>sorry!</strong> The login and sign-up feature is not yet available.
  </div>
      <div className="card-deck">
      <div className="card">
       <div className="card-body">
        <div className="card-title font-weight-bold">LOGIN</div>
        <div className="card-text">
          <form>
            <div className="form-group">
              <label className="font-weight-bold">EMAIL</label>
              <input type="email" className="form-control"></input>
            </div>
            <div className="form-group">
              <label className="font-weight-bold">PASSWORD</label>
              <input type="password" className="form-control"></input>
            </div>
            <button type="submit" className="btn btn-primary btn-block">LOGIN</button>
          </form>
        </div>
       </div>
      </div>
      <div className="card">
       <div className="card-body">
        <div className="card-title font-weight-bold">DON'T HAVE AN ACCOUNT! SIGN-UP HERE</div>
        <div className="card-text">
          <form>
            <div className="form-group">
              <label className="font-weight-bold">EMAIL</label>
              <input type="email" className="form-control"></input>
            </div>
            <div className="form-group">
              <label className="font-weight-bold">PASSWORD (DON'T USE YOUR NORMAL AND PERSONAL(FB,GOOGLE,ETC) PASSWORDS)</label>
              <input type="password" className="form-control"></input>
            </div>
            <button type="submit" className="btn btn-primary btn-block">SIGN-UP</button>
          </form>
        </div>
       </div>
      </div>
      </div>
      </div>
    )
  }
}
export default Login;
