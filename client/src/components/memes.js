import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
//import queryString from 'query-string';
import axios from 'axios';
import Card from './card';

const apiKey='286130d2-5116-47d4-a680-10948653b1b7';
const na="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj4q9byzMLfAhVQFHIKHbRDADEQjRx6BAgBEAU&url=https%3A%2F%2Fwww.123rf.com%2Fclipart-vector%2Fnot_available.html&psig=AOvVaw0iTT3R-AlDPPCH57mg_IK8&ust=1546088898690075";
const query=window.location.search;
const imgStyle={
  width:'400px',
  height:'400px'
}

class Memes extends Component{
  constructor(props){
    super(props);
    this.state={
      list:[],
      imageUrl:"",
      showCards:false,
      urlName:""
    }
  }
  show=(i)=>{
    if(this.state.showCards){
      return(
        <Card img={this.state.list[i].instanceImageUrl} urlName={this.state.list[i].urlName} displayName={this.state.list[i].displayName} totalVotesScore={this.state.list[i].totalVotesScore} generatorID={this.state.list[i].entityID} purpose='memes-votes'/>
      )
    }
    else{
      return(
        <Card img={na} totalVotesScore="NA" displayName="NA" generatorID="NA" urlName={this.state.list[i].urlName} purpose='memes-votes'/>
      )
    }
  }
  handleSubmit1=()=>{
    axios.get('http://version1.api.memegenerator.net//Instances_Select_ByPopular'+query+'&apiKey='+apiKey)
    .then(res=>{
      this.setState({
      list:res.data.result,
      imageUrl:res.data.result[0].imageUrl,
      showCards:true
    })
  })
  }
  handleSubmit2=()=>{
    axios.get('http://version1.api.memegenerator.net//Instances_Select_ByNew'+query+'&apiKey='+apiKey)
    .then(res=>{
      this.setState({
      list:res.data.result,
      imageUrl:res.data.result[0].imageUrl,
      showCards:true
    })
  })
  }
  componentDidMount(){

    axios.get('http://version1.api.memegenerator.net//Instances_Select_ByNew'+query+'&apiKey='+apiKey)
    .then(res=>{
      this.setState({
      imageUrl:res.data.result[0].imageUrl,
      urlName:res.data.result[0].urlName
    })
  })
  }
  render(){
    return(
      <div className="container">
      <Navbar />
      <br></br>
      <br></br>
      <p className="font-weight-bold">PLEASE REFRESH OR RELOAD THE PAGE</p>
      <br></br>
      <img src={this.state.imageUrl} alt="meme-image" className="img-thumbnail" style={imgStyle}></img>
      <br></br>
      <h3 className="card-title font-weight-bold">{this.state.urlName}</h3>
      <br></br>
      <button type="button" className="btn btn-success font-weight-bold btn-block" onClick={this.handleSubmit1}>SEARCH POPULAR MEMES FOR THIS TEMPLATES</button>
      <button type="button" className="btn btn-success font-weight-bold btn-block" onClick={this.handleSubmit2}>SEARCH NEW MEMES FOR this TEMPLATES</button>
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
export default Memes;
