// src/redux/store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  contacts: [], // Array to store contact objects
  nextId: 1,    // Incremental ID for new contacts
};

// Reducer function to handle add, edit, and delete actions
const contactReducer = (state = initialState, action : any) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [
          ...state.contacts,
          { ...action.payload, id: state.nextId }, // Add contact with an incremental id
        ],
        nextId: state.nextId + 1, // Increment nextId for the next contact
      };

    case 'EDIT_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id
            ? { ...contact, ...action.payload.updatedContact }
            : contact
        ),
      };

    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
      };

    default:
      return state;
  }
};

// Create the Redux store with the reducer
const store = createStore(contactReducer);

export default store;
