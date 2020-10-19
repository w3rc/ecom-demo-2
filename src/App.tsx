import React from 'react';
import './App.scss';
import Product from './Product/Product';
import { Product as ProductType, products } from './products';

function App() {
  return (
    <div className="App">
      {products.map((product: ProductType) =>
        <Product id={product.id} data={product} />
      )}
    </div>
  );
}

export default App;
