import classNames from "classnames";
import styles from "./styles.module.css";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { useGetRestaurantQuery } from "../../redux/services/api";

export const RestaurantCard = ({ className }) => {
  const { restaurantId } = useParams();
  const { data, isFetching } = useGetRestaurantQuery(restaurantId);

  if (isFetching) {
    return "Загрузка данных по ресторану";
  }

  return (
    <div className={classNames(className)}>
      <div className={classNames(styles.card, styles.cardBorder)}>
        ReastaurantName: {data.name}
      </div>
      <NavLink to="menu">Меню</NavLink>
      <NavLink to="reviews">Отзывы</NavLink>
      <Outlet />
    </div>
  );
};
