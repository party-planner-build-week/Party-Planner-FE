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
      <div className="ui container">
        <div className="ui floating message">Hey There! Go Add some Parties.</div>
        {this.props.parties.map(party => {
          return (
            <>
              <div className="ui olive message">
                <div className="content">
                  <p>{party.theme}</p>
                </div>
              </div>
              <div className="ui horizontal segments">
                <div className="ui segment">
                  <Party
                    theme={party.theme}
                    guests={party.guests_num}
                    budget={party.budget}
                    date={party.date}
                    moodboard_theme={party.moodboard_theme}
                    partyId={party.id}
                    key={party.id}
                    username={party.username}
                  />
                </div>
                <div className="ui segment">
                  <TodoList partyId={party.id} />
                </div>
                <div className="ui segment">
                  <ShoppingList />
                </div>
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
