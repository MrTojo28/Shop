import { ReactElement } from 'react';
import { Products } from '../../data/Products';
import './ProductsCart.css';
import { ProductsCartController } from './ProductsCartController';

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
  return (
    <div className="Products-cart">
        <div className="products-list">
          {
            controller.productsData.map((item,index)=>
              <div key={index} className='product-list_card'>
                  <div>{imageRenderer(item.images[0])}</div>
                  <div className='product-list_card_name'>{item.name}</div>
                  <div className='product-list_card_price'>{priceRenderer(item.price)}</div>
                  <div className='product-list_card_count'>{item.count} шт.</div>
              </div>
            )
          }
        </div>
        <div className="price">Общая сумма: {controller.summ()} руб.</div>
    </div>
  );
}
