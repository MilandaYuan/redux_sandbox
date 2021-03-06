import React from 'react';
import { render } from 'react-dom';
//import { createStore } from 'redux';


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

//const { createStore } = Redux

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state
  }
}
const createStore = (reducer) => {
  let state;
  let listeners = [];
  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => { listener() })
  }
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }
  dispatch({});
  return { getState, dispatch, subscribe }
}

const store = createStore(counter);
const render1 = () => {
  document.body.innerText = store.getState()
}
render1()
store.subscribe(render1);
document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
})

