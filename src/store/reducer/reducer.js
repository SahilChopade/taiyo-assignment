// src/redux/store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  contacts: [],
};

// Reducer function
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'add':
      return { ...state, count: state. };
    case 'edit':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

// Create store
const store = createStore(counterReducer);

export default store;
