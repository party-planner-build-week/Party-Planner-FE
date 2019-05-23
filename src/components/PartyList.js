import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getParty, deleteParty, editParty } from "../actions";
import Party from "./Party";
import TodoList from "./TodoList";
import ShoppingList from "./ShoppingList";
import "../style.css";

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
    // console.log(this.props.parties);
    return (
      <div>
        <h2>Current PartyList!</h2>
        {this.props.parties.map(party => {
          return (
            <>
              <h4> {party.theme}</h4>
              <div className="PartyCard">
                <Party
                  theme={party.theme}
                  guests={party.guests_num}
                  budget={party.budget}
                  date={party.date}
                  moodboard_theme={party.moodboard_theme}
                  partyId={party.id}
                  key={party.id}

                />
                <TodoList partyId={party.id} />
                <ShoppingList />
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
