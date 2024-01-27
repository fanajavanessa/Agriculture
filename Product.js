import React from 'react';

const Product = (props) => {
  const {name, price, images } = props;

  return (
    <div className="product">
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <div className="product-images">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`${name} Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Product;
 