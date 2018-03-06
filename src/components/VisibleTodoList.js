import { connect } from "react-redux";
import TodoList from "./TodoList";
import { toggleTodo } from "../actions/index";
import { withRouter } from "react-router";
import { getVisibleTodos } from "../reducers/index";

const mapStateToTodoListProps = (state, { params }) => ({
  todos: getVisibleTodos(state, params.filter || "all")
});
// const mapDispatchToTodoListProps = dispatch => ({
//   onTodoClick(id) {
//     dispatch(toggleTodo(id));
//   }
// });
const VisibleTodoList = withRouter(
  connect(mapStateToTodoListProps, { onTodoClick: toggleTodo })(TodoList)
);

export default VisibleTodoList;
