import React, { Component } from 'react';
import './Members.css';
import { v4 as uuidv4 } from 'uuid';




export class Members extends Component {
    render() {
        const {members} = this.props;
        return (
            <div className="members-container">
                <p className='online'>Trenutno online: {members.length}; </p>
                <ul>{members.map((m) => {
                    return(
                    <li key={uuidv4} className="members-list">
                        <img src={m.clientData.choiceAvatar} />
                        <p>{m.clientData.username}</p>
                    </li>);
                    })}
                </ul>
            </div>
        )
    }
}

export default Members
