import { createStore } from "redux";
import { loadState, saveState } from "./localStoragee";
import throttle from "lodash/throttle";
import todoApp from "./reducers/index";
const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(todoApp, persistedState);
  store.subscribe(
    throttle(() => {
      saveState({
        todos: store.getState().todos
      });
    }, 1000)
  );

  return store;
};
export default configureStore;
