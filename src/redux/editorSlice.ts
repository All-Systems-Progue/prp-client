import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type EditorState = {
  editorContents: string;
};

const initialState = {
  editorContents: "",
} as EditorState;

type AppState = {
  editor: EditorState;
};

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

export const selectEditorContent = (state: AppState) => state.editor.editorContents;
