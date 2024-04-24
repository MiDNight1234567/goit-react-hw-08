import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

const { changeFilter } = filtersSlice.actions;

const filtersReducer = filtersSlice.reducer;

export { changeFilter, filtersReducer };
