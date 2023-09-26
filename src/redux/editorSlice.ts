import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./store";

type EditorState = {
  editorContents: string;
};

const initialState = {
  editorContents: "",
} as EditorState;

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    refreshEditor: (state, action: PayloadAction<string>) => {
      state.editorContents = action.payload;
    },
  },
});

export const { refreshEditor } = editorSlice.actions;

export const selectEditorContent = (state: RootState) => state.editor.editorContents;
