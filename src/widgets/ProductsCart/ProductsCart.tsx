import React, { ReactElement, useState } from "react";
import { ProductsCartController } from "./ProductsCartController";

import "./ProductsCart.css";
import { StyleButton } from "../../components";

interface Props {}

const imageRenderer = (image: string): ReactElement => {
  return <img className="product-list_card_image" src={image} />;
};

const priceRenderer = (price: number): string => {
  return `${price} Руб`;
};

export function ProductsCart({}: Props) {
  const controller = new ProductsCartController();
  controller.loadData();
  const [data, setData] = useState(controller.productsData);
  controller.getDataSetter(setData);

  const countRenderer = (id: number, count?: number) => {
    return (
      <div className="product-list_card_count_controll">
        <span>{count} шт.</span>
        <div
          className="controll-button"
          onClick={() => controller.addProduct(id)}
        >
          +
        </div>
        <div
          className="controll-button"
          onClick={() => controller.removeProduct(id)}
        >
          -
        </div>
      </div>
    );
  };

  return (
    <div className="Products-cart">
      <div className="products-list">
        {data.map((item, index) => (
          <div key={index} className="product-list_card">
            <div>{imageRenderer(item.images[0])}</div>
            <div className="product-list_card_name">{item.name}</div>
            <div className="product-list_card_price">
              {priceRenderer(item.price)}
            </div>
            <div className="product-list_card_count">
              {countRenderer(item.id, item.count)}
            </div>
          </div>
        ))}
        <StyleButton
          onClick={() => controller.clearCart()}
          text="Очистить корзину"
          cls="button-to-cart"
        />
      </div>
      <div className="price">Общая сумма: {controller.summ()} руб.</div>
      <form method="POST" action="https://kemsu.server.paykeeper.ru/create">
        Введите сумму оплаты:
        <input type="text" name="sum" value={controller.summ().toString()} />
        <br />
        ФИО:
        <input
          type="text"
          name="clientid"
          value={controller.UserInfo}
          onChange={(value) => {
            controller.onChangeUserInfo(value.target.value);
          }}
        ></input>
        <br />
        Электронная почта:
        <input
          type="text"
          name="client_email"
          value={controller.Email}
          onChange={(value) => {
            controller.onChangeEmail(value.target.value);
          }}
        />{" "}
        <br />
        Номер телефона:
        <input
          type="text"
          name="client_phone"
          value={controller.Phone}
          onChange={(value) => {
            controller.onChangePhone(value.target.value);
          }}
        />{" "}
        <br />
        <input type="submit" value="Перейти к оплате" />
      </form>
    </div>
  );
}
