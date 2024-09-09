// src/redux/store.ts
import { createStore } from 'redux';

// Define Contact Type
export interface Contact {
  id: number;
  firstname: string;
  lastname: string;
  status: 'active' | 'inactive'; // Status is now 'active' or 'inactive'
}

// Define State Type
export interface State {
  contacts: Contact[];
  nextId: number;
}

// Initial state
const initialState: State = {
  contacts: [],
  nextId: 1,
};

// Define Action Types
export const ADD_CONTACT = 'ADD_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

// Define Action Interfaces
export interface AddContactAction {
  type: typeof ADD_CONTACT;
  payload: Omit<Contact, 'id'>; // Contact without ID
}

export interface EditContactAction {
  type: typeof EDIT_CONTACT;
  payload: {
    id: number;
    updatedContact: Omit<Contact, 'id'>;
  };
}

export interface DeleteContactAction {
  type: typeof DELETE_CONTACT;
  payload: number; // ID of the contact to delete
}

// Union of Action Types
export type ContactActionTypes = AddContactAction | EditContactAction | DeleteContactAction;

// Reducer
const contactReducer = (state = initialState, action: ContactActionTypes): State => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [
          ...state.contacts,
          { ...action.payload, id: state.nextId },
        ],
        nextId: state.nextId + 1,
      };

    case EDIT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id
            ? { ...contact, ...action.payload.updatedContact }
            : contact
        ),
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
      };

    default:
      return state;
  }
};

// Create store
const store = createStore(contactReducer);

export default store;


