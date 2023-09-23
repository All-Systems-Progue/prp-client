import { configureStore } from "@reduxjs/toolkit";
import { reviewSlice } from "@reviews/reviewSlice";

import { editorSlice } from "./editorSlice";

export const store = configureStore({
  reducer: {
    reviews: reviewSlice.reducer,
    editor: editorSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
