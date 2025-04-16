import React from 'react';

import Images from '../../Images';
import { Products } from '../../data/Products';

import './ProductCard.css';

interface Props {
  selectedProductId: number
}

function ProductCard({selectedProductId}: Props) {
  const selectedProduct = Products.find((item)=>item.id===selectedProductId)
  return (
    <div className="product-card">
      <div className="left-block">
        <img src={selectedProduct?.images[0]} />
      </div>
      <div className="right-block">
      <h2>{selectedProduct?.name}</h2>
        {
          selectedProduct?.description.map(str => 
            <a>{str}</a>
          )
        }
        <div className='cart-button'>Добавить в корзину</div>
      </div>
    </div>
  );
}

export default ProductCard;
