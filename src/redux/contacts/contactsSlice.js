import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations ";
// import { nanoid } from 'nanoid';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
const contactsInitialState = {
  contactList: [
    { id: 0, name: "Learn HTML and CSS", number: 1, relationship: "family" },
    { id: 1, name: "Get good at JavaScript", number: 2, relationship: "work" },
    { id: 2, name: "Master React", number: 3, relationship: "family" },
    { id: 3, name: "Discover Redux", number: 4, relationship: "work" },
    { id: 4, name: "Build amazing apps", number: 5, relationship: "family" },
  ],
  isLoading: false,
  error: null,
};

const extraActions = [fetchContacts, addContact, deleteContact];
const getActions = (type) =>
  extraActions.map((extraAction) => extraAction[type]);
const handleFetchContactsSuccses = (state, action) => {
  state.contactList = action.payload;
};
const handleAddContactSuccses = (state, action) => {
  state.contactList.push(action.payload);
};
const handleDeleteContactSuccses = (state, action) => {
  const index = state.contactList.findIndex(
    (contact) => contact.id === action.payload.id
  );
  state.contactList.splice(index, 1);
};
// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };
export const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  // reducers: {
  //   // fetchingInProgress(state) {
  //   //   state.isLoading = true;
  //   // },
  //   // fetchingSuccess(state, action) {
  //   //   state.isLoading = false;
  //   //   state.error = null;
  //   //   state.contactList = action.payload;
  //   // },
  //   // fetchingError(state, action) {
  //   //   state.isLoading = false;
  //   //   state.error = action.payload;
  //   // },
  //   setFilter(state, action) {
  //     state.filter = action.payload;
  //   },
  // },
  // extraReducers: {
  //   [fetchContacts.pending]: handlePending,
  //   [fetchContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.contactList = action.payload;
  //   },
  //   [fetchContacts.rejected]: handleRejected,
  //   [addContact.pending]: handlePending,
  //   [addContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.contactList.push(action.payload);
  //   },
  //   [addContact.rejected]: handleRejected,
  //   [deleteContact.pending]: handlePending,
  //   [deleteContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.contactList.findIndex(
  //       contact => contact.id === action.payload.id
  //     );
  //     state.contactList.splice(index, 1);
  //   },
  //   [deleteContact.rejected]: handleRejected,
  // },
  ///////////////////////////////////////////////
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContactsSuccses)
      .addCase(addContact.fulfilled, handleAddContactSuccses)
      .addCase(deleteContact.fulfilled, handleDeleteContactSuccses)
      .addMatcher(isAnyOf(...getActions("pending")), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...getActions("rejected")), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(isAnyOf(...getActions("fulfilled")), (state, action) => {
        state.isLoading = false;
        state.error = null;
      });
  },
});
// export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
