import React, { useState } from 'react';

import Header from './components/Header/Header';
import HeaderButton from './components/HeaderButton/HeaderButton';
import MainContainer from './components/MainContainer/MainContainer';
import Catalog from './widgets/Catalog/Catalog';
import AboutUs from './widgets/AboutUs/AboutUs';
import HeaderDropdownButton from './components/HeaderDropdownButton/HeaderDropdownButton';
import ProductCard from './widgets/ProductCard/ProductCard';

import './App.css';
import { Route, Routes } from 'react-router';
import MainPage from './widgets/MainPage/MainPage';
import { ECategories } from './domain/product/Product';


function App() {

  const [category,setCategory] = useState<ECategories>();

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
            <Route path="/contacts" element={<div>Контакты</div>} />
            <Route path="/facts" element={<div>Факты</div>} />
            <Route path="/catalog/productCard" element={<ProductCard />} />
          </Routes>
        </MainContainer>
      </div>
    </div>
  );
}

export default App;
