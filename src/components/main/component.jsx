import { RestaurantPage } from "../../pages/restaurants-page/component";
import { Layout } from "../../components/layout/component";
import { Provider } from "react-redux";
import store from "../../redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "../../pages/main-page/component";
import { NotFoundPage } from "../../pages/not-found-page/component";
import { RestaurantCard } from "../restaurant-card/component";
import { MenuContainer } from "../dishes/container";
import { ReviewsContainer } from "../reviews/container";

export const Main = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="restaurants" element={<RestaurantPage />}>
              <Route index element={<div>Выбирите ресторан</div>} />
              <Route path=":restaurantId" element={<RestaurantCard />}>
                <Route index element={<div>Выбирите меню или отзывы</div>} />
                <Route path="menu" element={<MenuContainer />} />
                <Route path="reviews" element={<ReviewsContainer />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};
