import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { editParty } from "../actions";

class EditParty extends Component {
  state = {
    party: {
      guests_num: "",
      theme: "",
      date: "",
      budget: "",
      moodboard_theme: "catness everdeen",
      completed: false
    }
  };


  editParty = e => {
    e.preventDefault();
    this.props.toggleEdit(e);
  };

  submitEdits = e => {
    e.preventDefault();
    console.log(this.props.partyId)
    this.props.editParty(this.state.party, this.props.partyId); 
  };

  taslim = e => {
    e.preventDefault();
    return (
      this.submitEdits(e), 
      this.props.toggleEdit(e)
    )
  }

  handleChanges = e => {
    this.setState({
      party: {
        ...this.state.party,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    console.log(this.props.partyId);
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
        <button onClick={e => this.taslim(e)}>Submit Edits</button>
        <button onClick={e => this.props.toggleEdit(e)}>Cancel Edits</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  editingParty: state.editingParty
});

export default withRouter(
  connect(
    mapStateToProps,
    { editParty }
  )(EditParty)
);
