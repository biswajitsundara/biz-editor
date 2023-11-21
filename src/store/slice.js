import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bold: false,
  italic: false,
  underline: false,
  formattingApplied: null
};

const formatSlice = createSlice({
  name: "format",
  initialState,
  reducers: {
    toggleBold: (state) => {
      state.bold = !state.bold;
      state.formattingApplied = 'bold';
    },
    toggleItalics: (state) => {
      state.italic = !state.italic;
      state.formattingApplied = 'italics';
    },
    toggleUnderline: (state) => {
      state.underline = !state.underline;
      state.formattingApplied = 'underline';
    },
    resetFormattingFlag: (state) => {
      state.formattingApplied = null;
    }
  },
});

export const {toggleBold, toggleItalics, toggleUnderline, resetFormattingFlag} = formatSlice.actions;
export default formatSlice.reducer;

