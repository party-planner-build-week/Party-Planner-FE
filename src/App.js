import React, { Fragment, Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from "react-router-dom";


import WelcomePage from "./components/WelcomePage";
import Login from "./components/LoginPage";
import Register from "./components/RegisterPage";
import PartyList from "./components/PartyList";
import PartyForm from "./components/PartyForm";
import PrivateRouter from "./components/PrivateRouter";


import './style.css'

class App extends Component {
  logout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="App container fluid">
        <nav className="menu">
          <ul>
            {localStorage.getItem("token") ? (
              <>
                <NavLink activeClassName="active" to="/partylist">
                  Party List
                </NavLink>
                <NavLink activeClassName="active" to="/partyform">
                  Add a Party
                </NavLink>

                <button
                  className="ui secondary button"
                  onClick={this.logout}
                  to="/"
                >
                  Logout
                </button>
              </>
            ) : (
              <Fragment>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink className="" to="/register">
                  Register
                </NavLink>
              </Fragment>
            )}
          </ul>
        </nav>

        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/partyform" component={PartyForm} />
        <PrivateRouter exact path="/partylist" component={PartyList} />
      </div>
    );
  }
}

export default withRouter(App);
