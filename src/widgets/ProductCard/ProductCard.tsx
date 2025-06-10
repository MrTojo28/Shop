import React from "react";

import Images from "../../Images";
import { Products } from "../../data/Products";

import "./ProductCard.css";
import { ProductCardController } from "./ProductCardController";
import { StyleButton } from "../../components";
import { NavLink } from "react-router";

interface Props {
  selectedProductId: number;
}

export function ProductCard({ selectedProductId }: Props) {
  const selectedProduct = Products.find(
    (item) => item.id === selectedProductId
  );
  const controller = new ProductCardController();
  return (
    <div className="product-card">
      <div className="left-block">
        <img src={selectedProduct?.images[0]} />
      </div>
      <div className="right-block">
        <h2>{selectedProduct?.name}</h2>
        {selectedProduct?.description.map((str) => (
          <p>{str}</p>
        ))}
        <NavLink to={"/contacts"}>
          <StyleButton
            onClick={() => controller.addToCart(selectedProductId)}
            text="Связаться с нами для покупки"
            cls="button-to-cart"
          />
        </NavLink>
      </div>
    </div>
  );
}
