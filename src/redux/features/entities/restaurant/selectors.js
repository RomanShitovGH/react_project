export const selectRestaurantModule = (state) => state.restaurant;
export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;
export const selectRestaurantByIs = (state, id) =>
  selectRestaurantModule(state).entities[id];
