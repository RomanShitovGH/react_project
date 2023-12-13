import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/request-statuses";
import { getDishesByRestaurantId } from "./thunks/get-dishes-by-restaurant-id";

export const dishSlice = createSlice({
  name: "dish",
  initialState: {
    entities: {},
    ids: [],
    status: REQUEST_STATUSES.idle,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getDishesByRestaurantId.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
        state.entities = payload.reduce((acc, dish) => {
          acc[dish.id] = dish;
          return acc;
        }, state.entities);
        state.ids = Array.from(
          new Set([...state.ids, ...payload.map(({ id }) => id)])
        );
        state.status = REQUEST_STATUSES.fullfield;
      })
      .addCase(getDishesByRestaurantId.rejected, (state) => {
        state.status = REQUEST_STATUSES.rejected;
      }),
});
