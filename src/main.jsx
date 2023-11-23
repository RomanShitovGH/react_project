import ReactDOM from "react-dom/client";
import React from "react";

import { restaurants } from "./constants/mock";

import { RestaurantPage } from "./pages/restaurants-page/component";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <RestaurantPage restaurants={restaurants} />
  </>
);
