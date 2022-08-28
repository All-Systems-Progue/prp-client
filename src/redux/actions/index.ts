import { REFRESH_EDITOR } from "./types";

export const refreshEditor = (
  editorContents: string
): { type: string; payload: string } => {
  return {
    type: REFRESH_EDITOR,
    payload: editorContents,
  };
};
