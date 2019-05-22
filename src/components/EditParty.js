import React, { Component } from "react";
import Loader from "react-loader-spinner";

class EditParty extends Component {
  state = {
    party: {
      guests_num: "",
      theme: "",
      date: "",
      budget: "",
      moodboard_theme: "catness everdeen",
      completed: false,
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

  render() {
    return (
      <div>
        <form onSubmit={this.editParty}>
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
        </form>
        <button onClick={this.editParty}>Submit Edits</button>
      </div>
    );
  }
}

export default EditParty;
