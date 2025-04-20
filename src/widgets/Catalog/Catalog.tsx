import React from 'react';
import { Products, Categories } from '../../data/Products';
import { ECategories } from '../../domain/product/Product';
import Card from './Card/Card';

import './Catalog.css';
import { CatalogController } from './CatalogController';

interface Props {
  currentCategory?: ECategories;
}

export function Catalog({currentCategory}: Props) {
  const selectedCategory = Categories.filter(category=>category.id === currentCategory)
  const categoriesList = currentCategory
    ? selectedCategory
    : Categories

  const controller = new CatalogController(); 

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
                  onAdd={()=>controller.addProduct(product.id)}
                />
              })
            }
            </div>
          </div>
      )}
    </div>
  );
}
