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

class App extends Component {
  logout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem('userId');
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <NavLink to="/">Home</NavLink>
            {localStorage.getItem("token") ? (
              <>
                <NavLink to="/partyform">Add a Party</NavLink>
                <NavLink to="/partylist">Party List</NavLink>
                <button onClick={this.logout} to="/">
                  Logout
                </button>
              </>
            ) : (
              <Fragment>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
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
