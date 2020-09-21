import React, { Component } from "react";
import PropTypes from 'prop-types';


export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
    };
  }

  InputSubmit = (e) => {
    e.preventDefault();
    this.props.InputMessage(this.state.message);
    this.setState({ message: "" });
  };

  InputChange = (e) => {
    this.setState({ message: e.target.value });
  };

  render() {
    return (
      <div className="input">
        <form onSubmit={this.InputSubmit}>
          <input
            type="text"
            value={this.state.message}
            onChange={this.InputChange}
            placeholder="Unesite svoju poruku..."
            required
          />
          <input className="button" type="submit" value="Pošalji" />
        </form>
      </div>
    );
  }
}
Input.propTypes = {
  InputMessage: PropTypes.string
}