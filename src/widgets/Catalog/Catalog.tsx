import React from 'react';
import { Products, Categories } from '../../data/Products';
import { ECategories } from '../../domain/product/Product';
import Card from './Card/Card';

import './Catalog.css';

interface Props {
  currentCategory?: ECategories;
}

function Catalog({currentCategory}: Props) {
  const selectedCategory = Categories.filter(category=>category.id === currentCategory)
  const categoriesList = currentCategory
    ? selectedCategory
    : Categories

  return (
    <div className="catalog">
      {
        categoriesList.map((category)=>
          <div className="category">
            <div className="category__title">{category.text}</div>
            <div className="category__content">
            {
              Products.filter(product => product.category === category.id ).map((product)=>{
                return <Card
                  data={product}
                  key={product.id}
                />
              })
            }
            </div>
          </div>
      )}
    </div>
  );
}

export default Catalog;
