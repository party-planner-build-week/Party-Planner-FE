import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { addParty } from "../actions";

class PartyForm extends Component {
  state = {
    party: {
      guests_num: "",
      theme: "",
      date: "",
      budget: "",
      moodboard_theme: "",
      completed: false,
      user_id: localStorage.getItem("userId")
    }
  };

  handleChanges = e => {
    this.setState({
      party: {
        ...this.state.party,
        [e.target.name]: e.target.value
      }
    });
  };

  addParty = e => {
    console.log(this.state);
    e.preventDefault();
    this.props.addParty(this.state.party);
    this.props.history.push("/partylist");
    // this.setState({
    //   party: {
    //     guests_num: "",
    //     theme: "",
    //     date: "",
    //     budget: ""
    //   }
    // });
  };

  render() {
    console.log(this.state.party.user_id);
    return (
      <div className="ui container align-middle ">
        <div className="ui floating message">Fill Out The For Below!</div>
        <div className="ui horizontal segments">
          <div class="ui segment"><p>Hi There! we are currently still building out features to please bare with us! to the left you can create a party form.</p></div>
          <div class="ui segment">
            <form className="ui form" onSubmit={this.addParty}>
              <div className="field">
                <label> Occasion</label>
                <input
                  type="text"
                  name="theme"
                  placeholder="What is your Ocassion? Bens Birthday..."
                  required
                  onChange={this.handleChanges}
                  value={this.state.party.theme}
                />
              </div>
              <div className="field">
                <label>Party Theme</label>
                <input
                  type="text"
                  name="moodboard_theme"
                  placeholder="Theme of Party? Disney themed..."
                  required
                  onChange={this.handleChanges}
                  value={this.state.party.moodboard_theme}
                />
              </div>

              <div className="field">
                <label>Guests amount</label>
                <input
                  type="number"
                  name="guests_num"
                  placeholder="Number of Guests Expected?"
                  required
                  onChange={this.handleChanges}
                  value={this.state.party.guests_num}
                />
              </div>
              <div className="field">
                <label>Budget</label>
                <input
                  type="number"
                  name="budget"
                  placeholder="Budget for Your Event?"
                  required
                  onChange={this.handleChanges}
                  value={this.state.party.budget}
                />
              </div>

              <div className="field">
                <label> Event Date</label>
                <input
                  type="date"
                  id="start"
                  name="date"
                  min="2019-05-21"
                  required
                  onChange={this.handleChanges}
                  value={this.state.party.date}
                />
              </div>
              <button
                className="ui positive button"
                onSubmit={this.addParty}
              >
                {this.props.addingParty ? (
                  <Loader
                    type="ThreeDots"
                    color="#1f2a38"
                    height="12"
                    width="26"
                  />
                ) : (
                  "Add Party"
                )}
              </button>
            </form>
          </div>
          {/* <div class="ui segment">Thank you for trying out our application! we apperciate all the support</div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addingParty: state.addingParty,
  loggingIn: state.loggingIn
});

export default connect(
  mapStateToProps,
  { addParty }
)(PartyForm);
