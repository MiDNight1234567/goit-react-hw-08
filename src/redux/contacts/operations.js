import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

import {
  requestAddContact,
  requestDeleteContact,
  requestEditContact,
  requestGetContacts,
} from "../../services/contactsApi";

const apiGetUserContacts = createAsyncThunk(
  "phonebook/get",
  async (_, thunkAPI) => {
    try {
      const data = await requestGetContacts();
      return data;
    } catch (err) {
      toast.error("We are experiencing server issues. Please try again later.");
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const apiAddUserContact = createAsyncThunk(
  "phonebook/add",
  async (formData, thunkAPI) => {
    try {
      const data = await requestAddContact(formData);
      return data;
    } catch (err) {
      toast.error("We are experiencing server issues. Please try again later.");
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const apiDeleteUserContact = createAsyncThunk(
  "phonebook/delete",
  async (contactId, thunkAPI) => {
    try {
      const data = await requestDeleteContact(contactId);
      return data;
    } catch (err) {
      toast.error("We are experiencing server issues. Please try again later.");
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const apiEditUserContact = createAsyncThunk(
  "phonebook/edit",
  async (editedContact, thunkAPI) => {
    try {
      const data = await requestEditContact(editedContact);
      return data;
    } catch (err) {
      toast.error("We are experiencing server issues. Please try again later.");
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export {
  apiGetUserContacts,
  apiAddUserContact,
  apiDeleteUserContact,
  apiEditUserContact,
};
