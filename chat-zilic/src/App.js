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
        <header className="header">
          <h1>Dobro došli na chat</h1>
        </header>
        <main>
        {this.state.login 
        ? <Chat member={this.state.member}/>
        : <Login Login={this.Login} />}
        </main>
      </div>
    );
  }
}



