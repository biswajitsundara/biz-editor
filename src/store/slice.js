import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bold: false,
  italic: false,
  underline: false,
};

const formatSlice = createSlice({
  name: "format",
  initialState,
  reducers: {
    toggleBold: (state) => {
      state.bold = !state.bold;
    },
    toggleItalics: (state) => {
      state.italic = !state.italic;
    },
    toggleUnderline: (state) => {
      state.underline = !state.underline;
    },
  },
});

export const {toggleBold, toggleItalics, toggleUnderline} = formatSlice.actions;
export default formatSlice.reducer;

