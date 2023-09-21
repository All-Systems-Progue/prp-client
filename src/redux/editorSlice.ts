import { AnyAction, createSlice, Dispatch, PayloadAction, ThunkDispatch } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

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

export const selectEditorContents = (state: AppState) => state.editor.editorContents;

export type AppDispatch = Dispatch & ThunkDispatch<AppState, null, AnyAction>;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
