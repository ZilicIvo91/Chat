import React, { Component } from "react";
import "./App.css";
import Chat from "./Components/Chat/Chat"
import Login from "./Components/Login/Login";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      member: {
        username: "",
        choiceAvatar: ""
      },
      login: false
    };
  };
  Login = (data) => {
    this.setState({
      member: {
        username: data.username,
        choiceAvatar: data.choiceAvatar
      },
        login: true
    })
  }

  render() {
    return (
      <div className="container">
        <div className="container-components">
        {this.state.login 
        ? <Chat member={this.state.member}/>
        : <Login Login={this.Login} />}
        </div>
      </div>
    );
  }
}



