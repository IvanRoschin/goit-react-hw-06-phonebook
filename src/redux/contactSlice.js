import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.unshift(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addContact, deleteContact, filterContact } =
  contactSlice.actions;

export const contactReducer = contactSlice.reducer;

//Selector
export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;
