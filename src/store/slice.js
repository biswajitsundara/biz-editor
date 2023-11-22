import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bold: false,
  italic: false,
  underline: false,
  undo: false,
  redo: false,
  formattingApplied: null
};

const formatSlice = createSlice({
  name: "format",
  initialState,
  reducers: {
    toggleBold: (state) => {
      state.bold = !state.bold;
      state.formattingApplied = 'bold';
      state.undo = true;
    },
    toggleItalics: (state) => {
      state.italic = !state.italic;
      state.formattingApplied = 'italics';
      state.undo = true;
    },
    toggleUnderline: (state) => {
      state.underline = !state.underline;
      state.formattingApplied = 'underline';
      state.undo = true;
    },
    resetFormattingFlag: (state) => {
      state.formattingApplied = null;
    }
  },
});

export const {toggleBold, toggleItalics, toggleUnderline, resetFormattingFlag} = formatSlice.actions;
export default formatSlice.reducer;

