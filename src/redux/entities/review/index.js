import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/request-statuses";
import { getReviewsByRestaurantId } from "./thunks/get-reviews-by-restaurant-id";

export const reviewSlice = createSlice({
  name: "review",
  initialState: {
    entities: {},
    ids: [],
    status: REQUEST_STATUSES.idle,
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
        }, state.entities);
        state.ids = Array.from(
          new Set([...state.ids, ...payload.map(({ id }) => id)])
        );
        state.status = REQUEST_STATUSES.fullfield;
      })
      .addCase(getReviewsByRestaurantId.rejected, (state) => {
        state.status = REQUEST_STATUSES.rejected;
      }),
});
