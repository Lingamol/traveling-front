// import { createSelector } from "@reduxjs/toolkit";
// import { selectContacts } from "redux/contacts/selectors";
// import { relationshipFilters } from "./constants";
export const selectFilter = (state) => state.filters.filter;
export const selectRelationship = (state) => state.filters.relationship;
export const selectFiltersObject = (state) => state.filters;

// export const selectRelationshipContacts = createSelector(
//   [selectContacts, selectRelationship],
//   (contactList, relationshipFilter) => {
//     console.log("Calculating task count. Now memoized!");
//     switch (relationshipFilter) {
//       case relationshipFilters.Work:
//         return contactList.filter(
//           (contact) => contact.relationship === relationshipFilters.Work
//         );
//       case relationshipFilters.Family:
//         return contactList.filter(
//           (contact) => contact.relationship === relationshipFilters.Family
//         );
//       default:
//         return contactList;
//     }
//   }
// );

// const getVisibleContacts = (contacts, relationshipFilter) => {
//   //   console.log("relationship", relationshipFilter);
//   switch (relationshipFilter) {
//     case relationshipFilters.Work:
//       return contacts.filter(
//         (contacts) => contacts.relationship === relationshipFilters.Work
//       );
//     case relationshipFilters.Family:
//       return contacts.filter(
//         (contacts) => contacts.relationship === relationshipFilters.Family
//       );
//     default:
//       return contacts;
//   }
// };
