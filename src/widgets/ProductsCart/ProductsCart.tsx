import { ReactElement, useState } from 'react';
import { ProductsCartController } from './ProductsCartController';

import './ProductsCart.css';

interface Props {
 
}

const imageRenderer = (image: string): ReactElement => {
  return <img
    className='product-list_card_image'
    src = {image}
  />
}

const priceRenderer = (price: number): string => {
  return `${price} Руб`
}

export function ProductsCart({}: Props) {

  const controller = new ProductsCartController();
  controller.loadData();
  const [data, setData] = useState(controller.productsData)
  controller.getDataSetter(setData)

  const countRenderer = (id: number, count?: number) => {
    return <div className='product-list_card_count_controll'>
      <span>{count} шт.</span>
      <div className='controll-button' onClick={()=>controller.addProduct(id)}>+</div>
      <div className='controll-button' onClick={()=>controller.removeProduct(id)}>-</div>
    </div>
  }

  return (
    <div className="Products-cart">
        <div className="products-list">
          {
            data.map((item,index)=>
              <div key={index} className='product-list_card'>
                  <div>{imageRenderer(item.images[0])}</div>
                  <div className='product-list_card_name'>{item.name}</div>
                  <div className='product-list_card_price'>{priceRenderer(item.price)}</div>
                  <div className='product-list_card_count'>{countRenderer(item.id, item.count)}</div>
              </div>
            )
          }
          <div className='clear-cart-button' onClick={()=>{controller.clearCart()}}>Очистить корзину</div>
        </div>
        <div className="price">Общая сумма: {controller.summ()} руб.</div>
    </div>
  );
}
