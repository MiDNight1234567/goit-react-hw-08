import { createSelector } from "@reduxjs/toolkit";

import { selectNameFilter } from "../filters/selectors";

const selectPhonebookIsLoading = (state) => state.phonebook.isLoading;
const selectPhonebookIsError = (state) => state.phonebook.isError;
const selectPhonebookContacts = (state) => state.phonebook.contacts;

const selectFilteredContacts = createSelector(
  [selectPhonebookContacts, selectNameFilter],
  (phonebook, filter) => {
    if (filter.length > 0) {
      return phonebook.filter(
        (contact) =>
          contact.name.toLowerCase().includes(filter.trim().toLowerCase()) ||
          contact.number.includes(filter.trim())
      );
    } else {
      return phonebook;
    }
  }
);

export {
  selectPhonebookIsLoading,
  selectPhonebookIsError,
  selectFilteredContacts,
};
