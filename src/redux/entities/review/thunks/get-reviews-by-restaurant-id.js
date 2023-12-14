import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewsIdsByRestaurantId } from "../../restaurant/selectors";

export const getReviewsByRestaurantId = createAsyncThunk(
  "review/getReviewsByRestaurantId",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );
    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("Отзывов нет");
    }

    return result;
  },
  {
    condition: (restaurantId, { getState }) =>
      selectReviewsIdsByRestaurantId(getState(), restaurantId),
  }
);
