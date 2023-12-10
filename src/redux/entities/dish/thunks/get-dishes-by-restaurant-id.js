import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishesIdsByRestaurantId } from "../../restaurant/selectors";

export const getDishesByRestaurantId = createAsyncThunk(
  "dish/getDishesByRestaurantId",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );
    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("Список блюд пустой");
    }

    return result;
  },
  {
    condition: (restaurantId, { getState }) =>
      selectDishesIdsByRestaurantId(getState(), restaurantId),
  }
);
