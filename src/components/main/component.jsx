import { restaurants } from "../../constants/mock";
import { RestaurantPage } from "../../pages/restaurants-page/component";
import { Layout } from "../../components/layout/component";

export const Main = () => {
  return (
    <Layout>
      <RestaurantPage restaurants={restaurants} />
    </Layout>
  );
};
