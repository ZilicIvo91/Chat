import React, { Component } from "react";
import './Login.css';
import { v4 as uuidv4 } from 'uuid';


export default class App extends Component {
    constructor(props) {
    super(props);

    this.state = {
        username: "",
        listAvatar: [],
        choiceAvatar: ""
    };
  };

  usernameChange = (e) => {
    this.setState({ username: e.target.value });
  }

  avatarList = (e) => {
    let random, image;
    let choice = e.target.value;

    let tempList = [];

    for(let i = 0 ; i < 10; i++) {
      random = (Math.random() * (100-1)).toFixed(0);
      image = `https://randomuser.me/api/portraits/thumb/${choice}/${random}.jpg`;

      tempList = [...tempList, image];
    }
    this.setState({ listAvatar: tempList });
  }
  avatarImg = (e) => {
    this.setState({ choiceAvatar: e.target.src });
  }
  loginSubmit = (e) => {
    e.preventDefault();
    
    if((this.state.username === "") || (this.state.choiceAvatar === "")){
      return;
    }
    this.props.Login(this.state);
  }
  
  render() {
    return (
      <div className="login-container">
          <div className="login-header">
            <h2>Login</h2>
          <div className="login-form">
          <form onSubmit={this.loginSubmit}>
            <div className="input-username">
              <p>Username:</p> <br/>
                <input
                  type="text" 
                  placeholder="Enter your username"
                  value={this.state.username} 
                  onChange={this.usernameChange} />
            </div>
            <div className="input-username">
              <p>You are:</p>
            </div>
            <div className="input-checkbox">
            <label>Male
              <input
                type="radio"
                name="radio-button"
                value="men"
                onClick={this.avatarList} />
            </label>
            <label>Woman
              <input
                type="radio"
                name="radio-button"
                value="women"
                onClick={this.avatarList} />
              </label> 
            </div>
            
          <div className="login-avatar-container"> 
          {this.state.listAvatar.map((image, i)=>(
              <div className="login-avatar" onClick={this.avatarImg}>
                <img className="image" key={uuidv4()} src={image} alt={image}/>
              </div> )
          )}
          </div>
             {this.state.choiceAvatar
             ? (<div className="choise-avatar">
              <p>Your avatar is:</p>
              <img className="image" key={uuidv4()} src={this.state.choiceAvatar} alt={this.state.choiceAvatar}/></div>) 
            : null}
              <input
              className="input-button"
              type="submit" 
              value="Login"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}



