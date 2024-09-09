// src/redux/actions.ts

import { ADD_CONTACT, AddContactAction, Contact, DELETE_CONTACT, DeleteContactAction, EDIT_CONTACT, EditContactAction } from "./store";

// Action Creators
export const addContact = (contact: Omit<Contact, 'id'>): AddContactAction => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const editContact = (id: number, updatedContact: Omit<Contact, 'id'>): EditContactAction => ({
  type: EDIT_CONTACT,
  payload: { id, updatedContact },
});

export const deleteContact = (id: number): DeleteContactAction => ({
  type: DELETE_CONTACT,
  payload: id,
});