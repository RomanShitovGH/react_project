import { restaurants } from "../../constants/mock";
import { RestaurantPage } from "../../pages/restaurants-page/component";
import { Layout } from "../../components/layout/component";
import { Provider } from "react-redux";
import store from "../../redux";

export const Main = () => {
  return (
    <Layout>
      <Provider store={store}>
        <RestaurantPage restaurants={restaurants} />
      </Provider>
    </Layout>
  );
};
