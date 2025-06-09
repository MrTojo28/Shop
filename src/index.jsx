import 'reflect-metadata';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router';
import './service';
import App from './App';
import './index.css';
import { CartService } from './service';
// import { CartServiceInterface } from './service/cart/CartServiceInterface';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

// declare global {
//   interface Window { cartService: CartServiceInterface; }
// }

window.cartService = new CartService();

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
