import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../actions/";
import { Link } from "react-router-dom";
import "../App.css";

class RegisterPage extends Component {
  state = {
    newCredentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      newCredentials: {
        ...this.state.newCredentials,
        [e.target.name]: e.target.value
      }
    });
  };

  register = e => {
    e.preventDefault();
    this.props.register(this.state.newCredentials).then(() => {
      this.props.history.push("/login");
    });
  };

  render() {
    return (
      <div className="login-form">
        <form className="form" onSubmit={this.register}>
          <h4>Create your Login and you'll be redirected to the login page.</h4>
          <input
            className="registerInput"
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.newCredentials.username}
            onChange={this.handleChange}
          />
          <input
            className="registerInput"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.newCredentials.password}
            onChange={this.handleChange}
          />
          <button className="button" onClick={this.register}>
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ isRegistering, error }) => ({
  isRegistering,
  error
});

export default connect(
  mapStateToProps,
  { register }
)(RegisterPage);
