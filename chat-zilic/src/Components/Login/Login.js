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
            <label>Male</label>
              <input
                type="radio"
                name="radio-button"
                value="men"
                onClick={this.avatarList}
              />
                <label>Woman</label>
              <input
                type="radio"
                name="radio-button"
                value="women"
                onClick={this.avatarList}
                />
              
            </div>
            
          <div> 
          {this.state.listAvatar.map((image, i)=>(
            <div onClick={this.avatarImg}>
              <img key={uuidv4()} src={image} alt={image}/>
            </div> 
            )
            )}
          </div>
          <div>
            <input
            type="submit" 
            value="Login"/>
          </div>
            </form>

          </div>
        </div>
      </div>
    );
  }
}



