import React, { Component } from 'react';
import Messages from "../Messages/Messages";
import Input from "../Input/Input";
import Members from "../Members/Members";
import './Chat.css';


export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
          messages: [],
          member: {
            username: this.props.member.username,
            choiceAvatar: this.props.member.choiceAvatar
          },
          members: []
        };
    
        this.drone = new window.Scaledrone("Lbw7I83eHxqGhEgh", {
          data: this.state.member,
        });
        let members = [];
        this.drone.on("open", (error) => {
          if (error) {
            return console.error(error);
          }
          const member = { ...this.state.member };
          member.id = this.drone.clientId;
          this.setState({ member });
        });
    
        const room = this.drone.subscribe("observable-room");
        room.on("data", (data, member) => {
          const messages = this.state.messages;
          messages.push({ member, text: data });
          this.setState({ messages });
        });
        room.on('members', members => {
          this.setState({ members })
        });
        room.on('member_join', member => {
          members.push(member);
          this.setState({members})
        });
        room.on('member_leave', ({id}) => {
          const index = members.findIndex(member => member.id === id);
          members.splice(index, 1);
          this.setState({members})
        });
      }
      InputMessage = (message) => {
        this.drone.publish({
          room: "observable-room",
          message,
        });
    }
    
    
    render() {
      

        return (
            <div className="chat-containe">
              <header className="header">
                <h1>Welcome to chat!</h1>
              </header>
              <div className="chat-message-container">
                <Members members={this.state.members}/>
                <Messages
                  messages={this.state.messages}
                  currentMember={this.state.member}/>
              </div>
            <Input InputMessage={this.InputMessage} />
            </div>

        )
    }
}
