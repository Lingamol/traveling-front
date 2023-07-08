import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";
// import { selectRelationshipContacts } from "../filters/selectors";

import { relationshipFilters } from "redux/filters/constants";
import { selectRelationship } from "../filters/selectors";
export const selectContactsObj = (state) => state.contacts;
export const selectContacts = (state) => state.contacts.contactList;

export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;

export const selectRelationshipContacts = createSelector(
  [selectContacts, selectRelationship],
  (contactList, relationshipFilter) => {
    console.log("Calculating Relationship count. Now memoized!");
    switch (relationshipFilter) {
      case relationshipFilters.Work:
        return contactList.filter(
          (contact) => contact.relationship === relationshipFilters.Work
        );
      case relationshipFilters.Family:
        return contactList.filter(
          (contact) => contact.relationship === relationshipFilters.Family
        );
      default:
        return contactList;
    }
  }
);

export const selectVisibleContacts = createSelector(
  [selectRelationshipContacts, selectFilter],
  (contactList, filterContact) => {
    console.log("Calculating Filter count. Now memoized!");
    // console.log('contactList from selectors', contactList);
    // console.log('filter', filterContact);
    const normalizedFilter = filterContact.toLowerCase();

    const visibleContacts = contactList.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visibleContacts ? visibleContacts : [];
  }
);
