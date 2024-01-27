import React from 'react';
import Product from './Product';

const ProductList = (props) => {
  const { products } = props;

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
 