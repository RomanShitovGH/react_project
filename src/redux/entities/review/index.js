import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../constants/normalized-mock";
import { REQUEST_STATUSES } from "../../../constants/request-statuses";
import { getReviewsByRestaurantId } from "./thunks/get-reviews-by-restaurant-id";

export const reviewSlice = createSlice({
  name: "review",
  initialState: {
    entities: normalizedReviews.reduce((acc, review) => {
      acc[review.id] = review;

      return acc;
    }, {}),
    ids: normalizedReviews.map(({ id }) => id),
  },
  extraReducers: (builder) =>
    builder
      .addCase(getReviewsByRestaurantId.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(getReviewsByRestaurantId.fulfilled, (state, { payload }) => {
        state.entities = payload.reduce((acc, review) => {
          acc[review.id] = review;

          return acc;
        }, {});
        state.ids = payload.map(({ id }) => id);
        state.status = REQUEST_STATUSES.fullfield;
      })
      .addCase(getReviewsByRestaurantId.rejected, (state) => {
        state.status = REQUEST_STATUSES.rejected;
      }),
});
