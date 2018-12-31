import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

const apiKey='286130d2-5116-47d4-a680-10948653b1b7';
const cardDstyle={
  width:'300px',
  height:'450px'
}
const imgStyle={
  width:'300px',
  height:'300px'
}

class Card extends Component{
  constructor(props){
    super(props);
    this.state={
      your:0,
      totalVotesScore:props.totalVotesScore
    }
  }
  handleSubmit1=()=>{

    axios.get('http://version1.api.memegenerator.net//Vote?entityName=Instance&entityID='+this.props.generatorID+'&voteScore=1&apiKey='+apiKey)
    .then(res=>{
      this.setState({
        your:1,
        totalVotesScore:res.data.result.totalVotesSum
      })
    })
  }
  handleSubmit2=()=>{

    axios.get('http://version1.api.memegenerator.net//Vote?entityName=Instance&entityID='+this.props.generatorID+'&voteScore=-1&apiKey='+apiKey)
    .then(res=>{
      this.setState({
        your:res.data.result.userVoteScore,
        totalVotesScore:res.data.result.totalVotesSum
      })
    })
  }

  linker=()=>{
    if(this.props.purpose=='selected'){
      return(<Link className="btn btn-primary font-weight-bold" to={'/create/selected?generatorID='+this.props.generatorID}>SELECT</Link>)
    }
    if(this.props.purpose=='memes'){
      return(<Link className="btn btn-primary font-weight-bold" to={'/create/memes?urlName='+this.props.urlName}>SELECT</Link>)
    }
    if(this.props.purpose=='memes-votes'){
      return(
        <div>
        <button  type="button" className="btn btn-primary font-weight-bold" onClick={this.handleSubmit1}>UPVOTE</button>
        <button type="button" className="btn btn-primary font-weight-bold" onClick={this.handleSubmit2}>DOWNVOTE</button>
        </div>
      )
    }
  }
  title=()=>{
    if(this.props.purpose=='memes-votes'){
      return(
        <div>
        <h5 className="card-title font-weight-bold">TOTAL VOTES SCORE:{this.state.totalVotesScore}</h5>
        </div>
      )
    }
    else{
      return(
        <h4 className="card-title font-weight-bold">{this.props.displayName}</h4>
      )
    }
  }
  render(){
    return(
      <div className="card" style={cardDstyle}>
        <img src={this.props.img} alt="image" className="card-img-top" style={imgStyle}></img>
        <div className="card-body">
          {this.title()}
          {this.linker()}
        </div>
      </div>
    )
  }
}
export default Card;
