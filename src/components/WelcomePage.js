import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class WelcomePage extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui compact message">
          <div className="content">
            <p>
              Hi there! Welcome to Party Planner Application! You can Login
              or Register below to being.
            </p>
          </div>
        </div>
        <div className="ui placeholder segment">
          <div className="ui stackable very relaxed two column grid">
            <div className="column">
              <Link to="login" className="ui big button">
                <i aria-hidden="true" className="sign-in icon" />
                Login
              </Link>
            </div>
            <div className="middle aligned column">
              <Link to="register" className="ui big button">
                <i aria-hidden="true" className="signup icon" />
                Sign up
              </Link>
            </div>
          </div>
          <div className="ui vertical divider">Or</div>
        </div>
      </div>
    );
  }
}

export default WelcomePage;