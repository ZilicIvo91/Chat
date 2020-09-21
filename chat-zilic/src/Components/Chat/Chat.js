import React, { Component } from 'react';
import Messages from "../Messages/Messages";
import Input from "../Input/Input";

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
          messages: [],
          member: {
            username: this.props.member.username,
            choiceAvatar: this.props.member.choiceAvatar
          },
        };
    
        this.drone = new window.Scaledrone("Lbw7I83eHxqGhEgh", {
          data: this.state.member,
        });
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
      }
      InputMessage = (message) => {
        this.drone.publish({
          room: "observable-room",
          message,
        });
    }
    
    
    render() {
        return (
            <div>
            <Messages
                messages={this.state.messages}
                currentMember={this.state.member}
          />
          <Input InputMessage={this.InputMessage} />
            </div>
        )
    }
}
