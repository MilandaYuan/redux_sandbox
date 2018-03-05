//let nextTodoId = 0;
import { v4 } from "node-uuid";
const addTodo = text => ({
  type: "ADD_TODO",
  id: v4(),
  text
});

const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export { addTodo, toggleTodo };
