import { useParams } from "react-router-dom";
import { useGetDishesQuery } from "../../redux/services/api";
import { Dishes } from "./component";

import styles from "./styles.module.css";

export const MenuContainer = () => {
  const { restaurantId } = useParams();
  const { data, isFetching } = useGetDishesQuery(restaurantId);

  if (isFetching) {
    return "Загрузка данных по ресторану";
  }

  return <Dishes restaurant={data} className={styles.card} />;
};
