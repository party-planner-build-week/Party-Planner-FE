import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { getParty, deleteParty, editParty } from "../actions";
import EditParty from "./EditParty";

class PartyList extends Component {
  state = {
    deletingParty: null,
    editingParty: null
  };

  componentDidMount() {
    this.props.getParty();
  }

  deleteParty = id => {
    this.setState({ deletingPartyId: id });
    this.props.deleteParty(id);
  };

  render() {
    // if (this.props.fetchingParties)
    //   return (
    //     <div>
    //       <Loader type="Puff" color="#ffffff" height="100" width="100" />
    //     </div>
    //   );
    console.log(this.props.parties);
    return (
      <div>
        <h2>Current PartyList!</h2>
        {/* <div>
                  <EditParty 
                  party={this.party}
                  editParty={this}
                  />
                </div> */}
        {this.props.parties.map(party => {
          return (
            <div className="CardStuff">
              <button
                onClick={() => this.setState({ editingPartyId: party.id })}
              >
                Edit Party
              </button>
              <button onClick={() => this.deleteParty(party.id)}>
                Delete Party
              </button>
              <p>Theme: {party.theme}</p>
              <p>Guests: {party.guest}</p>
              <p>Budget: {party.budget}</p>
              <p>Date: {party.date}</p>
              <p>Moodboard Theme: {party.moodboard_theme}</p>
              {this.props.deletingParty &&
                this.state.deletingPartyId == party.id && <p>Deleting Party</p>}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  parties: state.parties,
  fetchingParties: state.fetchingParties,
  error: state.error,
  deletingParty: state.deletingParty,
  editingParty: state.editingParty
});

export default withRouter(
  connect(
    mapStateToProps,
    { getParty, deleteParty, editParty }
  )(PartyList)
);
