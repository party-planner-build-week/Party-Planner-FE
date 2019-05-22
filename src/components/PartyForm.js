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
      moodboard_theme: "catness everdeen",
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
      <div>
        Add a new party POGGERS
        <form onSubmit={this.addParty}>
          <input
            type="number"
            name="guests_num"
            placeholder="# of guests..."
            required
            onChange={this.handleChanges}
            value={this.state.party.guests_num}
          />

          <input
            type="text"
            name="theme"
            placeholder="kids party"
            required
            onChange={this.handleChanges}
            value={this.state.party.theme}
          />
          <input
            type="number"
            name="budget"
            placeholder="$500"
            required
            onChange={this.handleChanges}
            value={this.state.party.budget}
          />

          <input
            type="date"
            id="start"
            name="date"
            min="2019-05-21"
            required
            onChange={this.handleChanges}
            value={this.state.party.date}
          />
          <button onSubmit={this.addParty}>
            {this.props.addingFriend ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Add Party"
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addingParty: state.addingParty
});

export default connect(
  mapStateToProps,
  { addParty }
)(PartyForm);
