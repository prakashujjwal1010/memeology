import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
//import queryString from 'query-string';
import axios from 'axios';

const apiKey='286130d2-5116-47d4-a680-10948653b1b7';
const na="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj4q9byzMLfAhVQFHIKHbRDADEQjRx6BAgBEAU&url=https%3A%2F%2Fwww.123rf.com%2Fclipart-vector%2Fnot_available.html&psig=AOvVaw0iTT3R-AlDPPCH57mg_IK8&ust=1546088898690075";
const query=window.location.search;
const imgStyle={
  width:'400px',
  height:'400px'
}

class Selected extends Component{
  constructor(props){
    super(props);
    this.state={
      imageUrl:na,
      description:"",
      displayName:"",
      text0:"",
      text1:"",
      meme:na,
      generatorID:"",
    }
  }
  componentDidMount(){

    axios.get('http://version1.api.memegenerator.net//Generator_Select_ByUrlNameOrGeneratorID'+query+'&apiKey='+apiKey)
    .then(res=>{
      this.setState({
      imageUrl:res.data.result.imageUrl,
      description:res.data.result.description,
      displayName:res.data.result.displayName,
      generatorID:res.data.result.generatorID
    })
  })
  }
  handleChange1=(event)=>{
    this.setState({
      text0:event.target.value
    })
  }
  handleChange2=(event)=>{
    this.setState({
      text1:event.target.value
    })
  }
handleSubmit=(event)=>{
  event.preventDefault();
  axios.get('http://version1.api.memegenerator.net//Instance_Create?generatorID='+this.state.generatorID+'&text0='+this.state.text0+'&text1='+this.state.text1+'&apiKey=286130d2-5116-47d4-a680-10948653b1b7')
  .then(res=>{
    this.setState({
      meme:res.data.result.instanceImageUrl
  })
})
}
  render(){
    return(
      <div className="container">
      <Navbar />
      <br></br>
      <br></br>
      <p className="font-weight-bold">please refresh or reload</p>
      <br></br>
      <img src={this.state.imageUrl} alt="selected image" className="img-thumbnail" style={imgStyle}></img>
      <h3 className="font-weight-bold">{this.state.displayName}</h3>
      <h6>{this.state.description}</h6>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="font-weight-bold">TOP TEXT FOR YOUR MEME</label>
          <input type="text"className="form-control" onChange={this.handleChange1}></input>
          <label className="font-weight-bold">BOTTOM TEXT FOR YOUR MEME</label>
          <input type="text"className="form-control" onChange={this.handleChange2}></input>
        </div>
        <button type="submit" className="btn btn-primary btn-block">SEARCH</button>
      </form>
      <br></br>
      <img src={this.state.meme} alt="meme" className="img-thumbnail"></img>
      </div>
    )
  }
}
export default Selected;
