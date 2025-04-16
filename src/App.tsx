import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { ECategories } from './domain/product/Product';
import {Catalog, AboutUs, ProductCard, MainPage, ProductsCart} from './widgets'
import {Header, HeaderButton, MainContainer, HeaderDropdownButton} from './components'

import './App.css';
import { AppController } from './AppController';


function App() {

  const [category,setCategory] = useState<ECategories>();

  useEffect(()=>{
    const controller = new AppController
    controller.initialization();
  },[])

  return (
    <div className="app">
      <div className="app-container">
        <Header
          leftButtons={[  
            <HeaderButton path='/aboutUs' text='О нас'/>,
            <HeaderDropdownButton text='Каталог' path='/catalog' onClick={()=>{setCategory(undefined)}} items={[
              {text:'Флюидные экстракты',path:`/catalog`,onClick:()=>{setCategory(ECategories.EXTRACTS)}},
              {text:'Концентрат напитка «Умная вода»',path:`/catalog`,onClick:()=>{setCategory(ECategories.SMART_WATER)}},
              {text:'Концентраты безалкогольных напитков',path:`/catalog`,onClick:()=>{setCategory(ECategories.NAPITKI)}},
              {text:'Чайный напиток на основе черного или зеленого чая',path:`/catalog`,onClick:()=>{setCategory(ECategories.TEA)}},
              {text:'Косметическая продукция',path:`/catalog`,onClick:()=>{setCategory(ECategories.COSMECTIK)}},
            ]}/>
          ]}
          rightButtons={[
            <HeaderButton path='/news' text='Новости'/>,
            <HeaderButton path='/contacts' text='Контакты'/>,
            <HeaderButton path='/facts' text='Научные факты'/>
          ]}


        />
        <MainContainer>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/catalog" element={<Catalog currentCategory={category} />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/news" element={<div>Новости</div>} />
            <Route path="/contacts" element={<div>Контакты попа</div>} />
            <Route path="/facts" element={<div>Факты</div>} />
            <Route path="/catalog/productCard" element={<ProductCard selectedProductId={1} />} />
            <Route path="/productsCart" element={<ProductsCart />} />
          </Routes>
        </MainContainer>
      </div>
    </div>
  );
}

export default App;
