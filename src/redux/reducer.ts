// src/redux/reducer.js
const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CONTACT':
        return {
          ...state,
          contacts: [
            ...state.contacts,
            { ...action.payload, id: state.nextId }, // Add new contact with incremental ID
          ],
          nextId: state.nextId + 1, // Increment the nextId
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
  
  export default contactReducer;
  