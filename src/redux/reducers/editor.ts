import { REFRESH_EDITOR } from "../actions/types";

export const editorReducer = (
  state = "",
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case REFRESH_EDITOR:
      return action.payload;
    default:
      return state; // TODO: throw new Error()
  }
};
