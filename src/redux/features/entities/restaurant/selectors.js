export const selectRestaurantModule = (state) => state.restaurant;
export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;
export const selectRestaurantByIds = (state, id) =>
  selectRestaurantModule(state).entities[id];

export const selectDishesIdsByRestaurantId = (state, id) =>
  selectRestaurantModule(state).entities[id].menu;

export const selectReviewsIdsByRestaurantId = (state, id) =>
  selectRestaurantModule(state).entities[id].reviews;
