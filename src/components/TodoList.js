import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getTodo, addTodo, deleteTodo } from "../actions";
import Todo from "./Todo";

class TodoList extends Component {
  state = {
    party: {
      completed: false,
      deletePartyTodo: false,
      party_id: 1
    },
    task: {
      task: "",
      completed: false,
      party_id: this.props.partyId
    }
  };

  componentDidMount() {
    this.props.getTodo();
  }

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.task);
    this.setState({ task: "" });
  };

  deleteParty = id => {
    // this.setState({ deletingPartyId: id });
    this.props.deleteParty(id);
  };

  handleInputChanges = e =>
    this.setState({
      task: {
        ...this.state.task,
        task: e.target.value
      }
    });

  render() {
    console.log(this.props.partyTodo);
    return (
      <div>
        {/* {this.props.partyTodo &&
          this.props.partyTodo.map(todo => (
            <h4 onClick={() => this.toggleTodo()}>
              {todo.task}
              {todo.completed && <i>✔</i>}
            </h4>
          ))}
        <form onSubmit={this.addTodo}>
          <input
            onChange={this.handleInputChanges}
            value={this.state.task.task}
            type="text"
            placeholder="Add To list . . .📃"
          />
        </form>
        <button onClick={this.addTodo}>Add to List</button>
        <button onClick={this.deleteTodo}>Delete from List</button> */}
        <p>Task List is not working currently.</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  partyTodo: state.partyTodo,
  addPartyTodo: state.addPartyTodo,
  deletePartyTodo: state.partyTodo
});

export default connect(
  mapStateToProps,
  { getTodo, addTodo, deleteTodo }
)(TodoList);
