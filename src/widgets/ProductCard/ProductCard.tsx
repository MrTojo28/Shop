import React from 'react';

import Images from '../../Images';

import './ProductCard.css';

interface Props {
 
}

function ProductCard({}: Props) {
  return (
    <div className="product-card">
      <div className="left-block">
        <img src={Images.img11} />
      </div>
      <div className="right-block">
      <h2>Название товара</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ab beatae, inventore ipsum, 
          ad odio exercitationem sunt excepturi sint eos nobis cumque obcaecati, 
          consequuntur dolorum quas perferendis laborum non fuga.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ab beatae, inventore ipsum, 
          ad odio exercitationem sunt excepturi sint eos nobis cumque obcaecati, 
          consequuntur dolorum quas perferendis laborum non fuga.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ab beatae, inventore ipsum, 
          ad odio exercitationem sunt excepturi sint eos nobis cumque obcaecati, 
          consequuntur dolorum quas perferendis laborum non fuga.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ab beatae, inventore ipsum, 
          ad odio exercitationem sunt excepturi sint eos nobis cumque obcaecati, 
          consequuntur dolorum quas perferendis laborum non fuga.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ab beatae, inventore ipsum, 
          ad odio exercitationem sunt excepturi sint eos nobis cumque obcaecati, 
          consequuntur dolorum quas perferendis laborum non fuga.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ab beatae, inventore ipsum, 
          ad odio exercitationem sunt excepturi sint eos nobis cumque obcaecati, 
          consequuntur dolorum quas perferendis laborum non fuga.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ab beatae, inventore ipsum, 
          ad odio exercitationem sunt excepturi sint eos nobis cumque obcaecati, 
          consequuntur dolorum quas perferendis laborum non fuga.
        </p>
        <a href='https://www.ozon.ru/product/chay-listovoy-chernyy-greenfield-earl-grey-fantasy-200-g-33006396/'>Ссылка на товар</a>
      </div>
    </div>
  );
}

export default ProductCard;
