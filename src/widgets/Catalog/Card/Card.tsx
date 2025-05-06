import React, {ReactElement, useState} from 'react';


import { TProduct } from '../../../domain/product/Product';
import { StyleButton } from '../../../components';

import './Card.css';
import { NavLink } from 'react-router';

interface Props {
  data: TProduct;
  onAdd:()=>void;
}

const priceRenderer = (price: number): string => {
  return `${price} Руб`
}


function Card({ data, onAdd }: Props) {
  
  const [currentImage, changeImage] = useState(data.images[0])

  const imageRenderer = (images: string[]): ReactElement => {
    return <img
      className='image'
      src = {currentImage}
      onMouseOver={()=>{changeImage(images[1])}}
      onMouseOut={()=>{changeImage(images[0])}}
    />
  }

  return (
    <div>
      <NavLink to={'/catalog/productCard'}>
      <div className="card" id={`${data.id}`}>
        <div>{imageRenderer(data.images)}</div>
        <div className='price'>{priceRenderer(data.price)}</div>
        <div className='name'>{data.name}</div>
      </div>
      </NavLink>
      <div className='button-container'>
        <StyleButton
          onClick={()=>onAdd()}
          text='В корзину'
          cls='button-to-cart'
        />
      </div>
    </div>

  );
}

export default Card;
