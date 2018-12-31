import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import Card from './card';
import axios from 'axios';

const apiKey='286130d2-5116-47d4-a680-10948653b1b7';
const na="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj4q9byzMLfAhVQFHIKHbRDADEQjRx6BAgBEAU&url=https%3A%2F%2Fwww.123rf.com%2Fclipart-vector%2Fnot_available.html&psig=AOvVaw0iTT3R-AlDPPCH57mg_IK8&ust=1546088898690075";

class Vote extends Component{

  constructor(props){
    super(props);
    this.state={
      list:[],
      search:"",
      showCards:false
    }
  }
  show=(i)=>{
    if(this.state.showCards){
      return(
        <Card img={this.state.list[i].imageUrl} displayName={this.state.list[i].displayName} urlName={this.state.list[i].urlName} generatorID={this.state.list[i].generatorID} purpose='memes'/>
      )
    }
    else{
      return(
        <Card img={na} displayName='NA' generatorID='NA' urlName="NA" purpose='memes' />
      )
    }
  }
  handleChange=(event)=>{
    this.setState({
      search:event.target.value
    })
  }
  handleSubmit=(event)=>{
    event.preventDefault();
    axios.get('http://version1.api.memegenerator.net//Instances_Search?q='+this.state.search+'&pageSize=25&apiKey='+apiKey)
    .then(res=>{
      this.setState({
      list:res.data.result,
      showCards:true
    })
  })
  }
  handleSubmit1=()=>{
    axios.get('http://version1.api.memegenerator.net//Generators_Select_ByPopular?pageSize=25&apiKey='+apiKey)
    .then(res=>{
      this.setState({
      list:res.data.result,
      showCards:true
    })
  })
  }
  handleSubmit2=()=>{
    axios.get('http://version1.api.memegenerator.net//Generators_Select_ByNew?pageSize=25&apiKey='+apiKey)
    .then(res=>{
      this.setState({
      list:res.data.result,
      showCards:true
    })
  })
  }
  render(){
    return(
      <div>
        <Navbar />
        <br></br>
        <br></br>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="font-weight-bold">SEARCH YOUR MEME</label>
            <input type="text" className="form-control" onChange={this.handleChange}></input>
          </div>
          <button type="submit" className="btn btn-primary btn-block">SEARCH</button>
        </form>
        <br></br>
        <div>
        <h3 className="font-weight-bold">OR</h3>
        <button type="button" className="btn btn-success font-weight-bold btn-block" onClick={this.handleSubmit1}>SEARCH MEME FOR POPULAR TEMPLATES</button>
        <button type="button" className="btn btn-success font-weight-bold btn-block" onClick={this.handleSubmit2}>SEARCH MEME FOR NEW TEMPLATES</button>
        </div>
        <br></br>
        <div className="card-columns">
        {this.state.list.map((obj,index)=>{
          return(
            this.show(index)
          )
        })}
        </div>
      </div>
    )
  }
}
export default Vote;
