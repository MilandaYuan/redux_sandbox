import React, { Component } from "react";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import * as actions from "../actions/index";
import { withRouter } from "react-router";
import { getVisibleTodos } from "../reducers/index";

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(preProps) {
    if (this.props.filter !== preProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter);
  }
  render() {
    console.log(this.props);
    const { toggleTodo, ...rest } = this.props;
    return <TodoList {...rest} onTodoClick={toggleTodo} />;
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
  connect(mapStateToTodoListProps, actions)(VisibleTodoList)
);

export default VisibleTodoList;
