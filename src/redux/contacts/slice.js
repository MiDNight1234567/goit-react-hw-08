import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import {
  apiAddUserContact,
  apiDeleteUserContact,
  apiEditUserContact,
  apiGetUserContacts,
} from "./operations";
import { apiLogoutUser } from "../auth/operations";

const INITIAL_STATE = {
  contacts: null,
  isLoading: false,
  isError: false,
};

const phonebookSlice = createSlice({
  name: "phonebook",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(apiGetUserContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(apiAddUserContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
      })
      .addCase(apiDeleteUserContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(apiEditUserContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        const index = state.contacts.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.contacts[index] = action.payload;
      })
      .addCase(apiLogoutUser.fulfilled, () => {
        return INITIAL_STATE;
      })

      .addMatcher(
        isAnyOf(
          apiGetUserContacts.pending,
          apiAddUserContact.pending,
          apiDeleteUserContact.pending,
          apiEditUserContact.pending,
          apiLogoutUser.pending
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          apiGetUserContacts.rejected,
          apiAddUserContact.rejected,
          apiDeleteUserContact.rejected,
          apiEditUserContact.rejected,
          apiLogoutUser.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.isError = true;
        }
      ),
});

export const phonebookReducer = phonebookSlice.reducer;
