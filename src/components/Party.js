import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { getParty, deleteParty, editParty } from "../actions";
import EditParty from "./EditParty";

class Party extends Component {
  state = {
    deletingParty: null,
    editingParty: false
  };

  componentDidMount() {
    this.props.getParty();
  }

  deleteParty = id => {
    // this.setState({ deletingPartyId: id });
    this.props.deleteParty(id);
  };

  toggleEdit = e => {
    e.preventDefault();
    this.setState({ editingParty: !this.state.editingParty });
  };

  // editParty = (e, party) => {
  //   e.preventDefault();
  //   this.props.editParty(party)
  // }

  render() {
    if (this.props.fetchingParties)
      return (
        <div>
          <Loader type="Puff" color="#ffffff" height="100" width="100" />
        </div>
      );
    return (
      <div>
        {this.state.editingParty ? (
          <EditParty
            partyId={this.props.partyId}
            toggleEdit={this.toggleEdit}
          />
        ) : (
          <div>
            <h3 className="event-title">Occasion </h3>
            <p>{this.props.theme}</p>
            <h3 className="event-title">Party Theme</h3>
            <p>{this.props.moodboard_theme}</p>
            <h3 className="event-title">Guests amount </h3>
            <p>{this.props.guests}</p>
            <h3 className="event-title">Budget</h3>
            <p>{this.props.budget}</p>
            <h3 className="event-title">Event Date</h3>
            <p>{this.props.date}</p>
            <button
              className="ui button positive"
              onClick={e => this.toggleEdit(e)}
            >
              Edit Party
            </button>
            <button
              className="ui button negative"
              onClick={() => this.deleteParty(this.props.partyId)}
            >
              Delete Party
            </button>
          </div>
        )}

        {/* { this.state.addTodoList } */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  deletingParty: state.deletingParty,
  editingParty: state.editingParty
});

export default withRouter(
  connect(
    mapStateToProps,
    { getParty, deleteParty, editParty }
  )(Party)
);
