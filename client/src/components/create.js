import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import Card from './card';
import axios from 'axios';

const apiKey='286130d2-5116-47d4-a680-10948653b1b7';
const na="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj4q9byzMLfAhVQFHIKHbRDADEQjRx6BAgBEAU&url=https%3A%2F%2Fwww.123rf.com%2Fclipart-vector%2Fnot_available.html&psig=AOvVaw0iTT3R-AlDPPCH57mg_IK8&ust=1546088898690075";
let eventx;

class Create extends Component{
  constructor(props){
    super(props);
    this.state={
      list:[],
      search:"",
      showCards:false,
      pageIndex1:0,
      pageIndex2:0,
      pageIndex3:0,
      type:""

    }
  }

  show=(i)=>{
    if(this.state.showCards){
      return(
        <Card img={this.state.list[i].imageUrl} displayName={this.state.list[i].displayName} urlName={this.state.list[i].urlName} generatorID={this.state.list[i].generatorID} purpose='selected'/>
      )
    }
    else{
      return(
        <Card img={na} displayName="NA" generatorID="NA" urlName="NA" purpose='selected'/>
      )
    }
  }
  handleChange=(event)=>{
    this.setState({
      search:event.target.value
    })
  }
  handleSubmit=(event)=>{
    eventx=event;
    event.preventDefault();
    axios.get('http://version1.api.memegenerator.net//Generators_Search?q='+this.state.search+'&pageIndex='+this.state.pageIndex1+'&pageSize=25&apiKey='+apiKey)
    .then(res=>{
      this.setState({
      list:res.data.result,
      showCards:true,
      type:"search",
    })
  })
  }
  handleSubmit1=()=>{
    axios.get('http://version1.api.memegenerator.net//Generators_Select_ByTrending')
    .then(res=>{
      this.setState({
      list:res.data.result,
      showCards:true
    })
  })
  }
  handleSubmit2=()=>{
    axios.get('http://version1.api.memegenerator.net//Generators_Select_ByPopular?&pageIndex='+this.state.pageIndex2+'&pageSize=25&days=&apiKey='+apiKey)
    .then(res=>{
      this.setState({
      list:res.data.result,
      showCards:true,
      type:"popular"
    })
  })
  }
  handleSubmit3=()=>{
    axios.get('http://version1.api.memegenerator.net//Generators_Select_ByNew?pageIndex='+this.state.pageIndex3+'&pageSize=25&days=&apiKey='+apiKey)
    .then(res=>{
      this.setState({
      list:res.data.result,
      showCards:true,
      type:"new"
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
        <form onSubmit={this.handleSubmit} >
          <div className="form-group">
            <label className="font-weight-bold">SEARCH YOUR TMPLATE</label>
            <input type="text" className="form-control" onChange={this.handleChange}></input>
            <br></br>

          </div>
          <button type="submit" className="btn btn-primary btn-block">SEARCH</button>
        </form>

        <br></br>
        <div>
        <button type="button" className="btn btn-success font-weight-bold btn-block" onClick={this.handleSubmit1}>SEARCH TRENDING TEMPLATES</button>
        <button type="button" className="btn btn-success font-weight-bold btn-block" onClick={this.handleSubmit2}>SEARCH POPULAR TEMPLATES</button>
        <button type="button" className="btn btn-success font-weight-bold btn-block" onClick={this.handleSubmit3}>SEARCH NEW TEMPLATES</button>
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
export default Create;
