import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { editParty } from "../actions";

class EditParty extends Component {
  state = {
    party: {
      guests_num: "",
      theme: "",
      date: "",
      budget: "",
      moodboard_theme: "",
      completed: false
    }
  };

  editParty = e => {
    e.preventDefault();
    this.props.toggleEdit(e);
  };

  submitEdits = e => {
    e.preventDefault();
    console.log(this.props.partyId);
    this.props.editParty(this.state.party, this.props.partyId);
  };

  taslim = e => {
    e.preventDefault();
    return this.submitEdits(e), this.props.toggleEdit(e);
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
    console.log(this.props.partyId);
    return (
      <div>
        <form
          className="ui form extra-margin-left"
          onSubmit={this.editParty}
        >
          <div className="field">
            <label>Occasion</label>
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
            <label> Event Date </label>
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
          <div className="extra content">
            <button
              className="ui positive button"
              onClick={e => this.taslim(e)}
            >
              Submit Edits
            </button>
            <button
              className="ui button"
              onClick={e => this.props.toggleEdit(e)}
            >
              Cancel Edits
            </button>
          </div>
        </form>
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
