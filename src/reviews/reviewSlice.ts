import { RootState } from "@redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReview } from "@src/interfaces";

import { ReviewState } from "./reviews.types";

const initialState = {
  selectedReviews: undefined,
} as ReviewState;

export const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    selectReview: (state, action: PayloadAction<IReview>) => {
      state.selectedReviews ??= [];
      state.selectedReviews?.push(action.payload);
    },
    selectReviews: (state, action: PayloadAction<IReview[]>) => {
      state.selectedReviews ??= [];
      state.selectedReviews = state.selectedReviews?.concat(action.payload);
    },
  },
});

export const getSelectedReviews = (state: RootState) => state.reviews.selectedReviews;

export const { selectReview, selectReviews } = reviewSlice.actions;
