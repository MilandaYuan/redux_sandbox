import React, { Component } from "react";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import { toggleTodo } from "../actions/index";
import { withRouter } from "react-router";
import { getVisibleTodos } from "../reducers/index";
import { fetchTodos } from "../api/index";

class VisibleTodoList extends Component {
  componentDidMount() {
    fetchTodos(this.props.filter).then(todos =>
      console.log(this.props.filter, todos)
    );
  }
  componentDidUpdate(preProps) {
    if (this.props.filter !== preProps.filter) {
      fetchTodos(this.props.filter).then(todos =>
        console.log(this.props.filter, todos)
      );
    }
  }

  render() {
    return <TodoList {...this.props} />;
  }
}

const mapStateToTodoListProps = (state, { params }) => {
  const filter = params.filter || "all";
  return {
    todos: getVisibleTodos(state, filter),
    filter
  };
};

VisibleTodoList = withRouter(
  connect(mapStateToTodoListProps, { onTodoClick: toggleTodo })(VisibleTodoList)
);

export default VisibleTodoList;
