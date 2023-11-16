import ReactDOM from "react-dom";
import React from "react";

import { restaurants } from "./constants/mock";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ul>
    <li>
      ReastaurantName: {restaurants[0].name}
      <br />
      Menu:
      <ul>
        <li>
          {restaurants[0].menu[0].name}, price: {restaurants[0].menu[0].price}
        </li>
        <li>
          {restaurants[0].menu[1].name}, price: {restaurants[1].menu[1].price}
        </li>
        <li>
          {restaurants[0].menu[2].name}, price: {restaurants[2].menu[2].price}
        </li>
      </ul>
      Reviews:
      <ul>
        <li>
          {restaurants[0].reviews[0].user}(rating-
          {restaurants[0].reviews[0].rating}
          ): {restaurants[0].reviews[0].text}
        </li>
        <li>
          {restaurants[0].reviews[1].user}(rating-
          {restaurants[0].reviews[1].rating}
          ): {restaurants[1].reviews[1].text}
        </li>
      </ul>
    </li>
    <br />
    <li>
      ReastaurantName: {restaurants[1].name}
      <br />
      Menu:
      <ul>
        <li>
          {restaurants[1].menu[0].name}, price: {restaurants[1].menu[0].price}
        </li>
        <li>
          {restaurants[1].menu[1].name}, price: {restaurants[1].menu[1].price}
        </li>
      </ul>
      Reviews:
      <ul>
        <li>
          {restaurants[1].reviews[0].user}(rating-
          {restaurants[1].reviews[0].rating}
          ): {restaurants[1].reviews[0].text}
        </li>
        <li>
          {restaurants[1].reviews[1].user}(rating-
          {restaurants[1].reviews[1].rating}
          ): {restaurants[1].reviews[1].text}
        </li>
        <li>
          {restaurants[1].reviews[2].user}(rating-
          {restaurants[1].reviews[2].rating}
          ): {restaurants[1].reviews[2].text}
        </li>
      </ul>
    </li>
    <br />
    <li>
      ReastaurantName: {restaurants[2].name}
      <br />
      Menu:
      <ul>
        <li>
          {restaurants[2].menu[0].name}, price: {restaurants[2].menu[0].price}
        </li>
        <li>
          {restaurants[2].menu[1].name}, price: {restaurants[2].menu[1].price}
        </li>
        <li>
          {restaurants[2].menu[2].name}, price: {restaurants[2].menu[2].price}
        </li>
      </ul>
      Reviews:
      <ul>
        <li>
          {restaurants[2].reviews[0].user}(rating-
          {restaurants[2].reviews[0].rating}
          ): {restaurants[2].reviews[0].text}
        </li>
      </ul>
    </li>
    <br />
    <li>
      ReastaurantName: {restaurants[3].name}
      <br />
      Menu:
      <ul>
        <li>
          {restaurants[3].menu[0].name}, price: {restaurants[3].menu[0].price}
        </li>
        <li>
          {restaurants[3].menu[1].name}, price: {restaurants[3].menu[1].price}
        </li>
      </ul>
      Reviews:
      <ul>
        <li>
          {restaurants[3].reviews[0].user}(rating-
          {restaurants[3].reviews[0].rating}
          ): {restaurants[3].reviews[0].text}
        </li>
        <li>
          {restaurants[3].reviews[1].user}(rating-
          {restaurants[3].reviews[1].rating}
          ): {restaurants[3].reviews[1].text}
        </li>
      </ul>
    </li>
  </ul>
);
