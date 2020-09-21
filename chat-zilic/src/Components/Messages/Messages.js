import React, { Component } from "react";
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import './Messages.css';


export default class Messages extends Component {
    renderMessage(message) {

    const messageFromMe = message.member.id === this.props.currentMember.id;
    const className = messageFromMe ? "currentMember" : "message";

    return (
        <ul className={className} key={uuidv4()}>
             <div className="username">
              <p>{message.member.clientData.username}
              <img src={message.member.clientData.choiceAvatar} 
                   alt={message.member.clientData.username}/></p>
            </div>
            <div className="messageText">
                <p>{message.text}</p>
            </div>
        </ul>
    );
  }

  render() {
    return (
      <ul className="listMessages">{this.props.messages.map((message) => this.renderMessage(message))}</ul>
    );
  }
}
Messages.propTypes = {
    messages: PropTypes.array,
    currentMember: PropTypes.object
}