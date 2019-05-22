import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { getParty, deleteParty, editParty } from "../actions";
import EditParty from "./EditParty";
import Party from './Party';

class PartyList extends Component {
  state = {
    deletingParty: null,
    editingParty: false
  };

componentDidUpdate(prevState) {
  if (prevState.editingParty !== this.state.editingParty) {
    return this.props.getParty();
  }
}

  componentDidMount() {
    this.props.getParty();
  }

  
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
        {this.props.parties.map(party => {
          return (
            <>
                <div className="CardStuff">
                  <Party
                    theme={party.theme}
                    guests={party.guests_num}
                    budget={party.budget}
                    date={party.date}
                    moodboard_theme={party.moodboard_theme}
                    partyId={party.id}
                    key={party.id}
                    toggle
                  />
                </div>
            </>
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
