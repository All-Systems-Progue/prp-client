import { RootState } from "@redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReview } from "@src/interfaces";

import { ReviewState } from "./reviews.types";

const initialState = {
  selectedReviews: [],
} as ReviewState;

export const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    selectReview: (state, action: PayloadAction<IReview>) => {
      // state.selectedReviews ??= [];
      state.selectedReviews.push(action.payload);
    },
    removeReview: (state, action: PayloadAction<IReview>) => {
      state.selectedReviews?.splice(
        state.selectedReviews.findIndex((review) => review._id === action.payload._id),
        1,
      );
    },
    selectReviews: (state, action: PayloadAction<IReview[]>) => {
      // state.selectedReviews ??= [];
      state.selectedReviews = state.selectedReviews?.concat(action.payload);
    },
  },
});

export const { selectReview, selectReviews, removeReview } = reviewSlice.actions;

export const selectReviewsForExport = (state: RootState) => state.reviews.selectedReviews;
