import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import logoUrl from './assets/logo.jpg';
import product1_1 from './assets/product1_1.jpg';
import product1_2 from './assets/product1_2.jpg';
import produit from './assets/product1_3.jpg';
import product1_4 from './assets/product1_4.jpg';
import product1_5 from './assets/product1_5.jpg';
import product1_6 from './assets/product1_6.jpg';

const products = [
  {
    name: 'Terrain 1',
    nom: 'Blé',
    price: 65000,
    image: product1_1,
    description: 'Description du Terrain 1',
  },
  {
    name: 'Terrain 2',
    nom: 'Mais',
    price: 63000,
    image: product1_2,
    description: 'Description du Terrain 2',
  },
  {
    name: 'Terrain 3',
    nom: 'Blé',
    price: 15000,
    image: produit,
    description: 'Description du Terrain 3',
  },
  {
    name: 'Terrain 4',
    nom: 'Patate',
    price: 60000,
    image: product1_4,
    description: 'Description du Terrain 4',
  },
  {
    name: 'Terrain 5',
    nom: 'Manioc',
    price: 50000,
    image: product1_5,
    description: 'Description du Terrain 5',
  },
  {
    name: 'Terrain 6',
    nom: 'Tomate',
    price: 25000,
    image: product1_6,
    description: 'Description du Terrain 6',
  },
  {
    name: 'Terrain 7',
    nom: 'Blé',
    price: 100000,
    image: produit,
    description: 'Description du Terrain 7',
  },
];

const productStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '20px',
  border: '1px solid #ddd',
  padding: '10px',
  width: '200px',
  textAlign: 'center',
  backgroundColor: '#d3dfff',
  borderRadius: '16px',
};

const buttonStyle = {
  backgroundColor: '#007BFF',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  cursor: 'pointer',
  fontSize: '16px',
  marginTop: '10px',
};

const App = () => {
  const topProducts = products.slice(0, 3); // Produits alignés en haut
  const bottomProducts = products.slice(3, 6); // Produits alignés en bas

  return (
    <div className="App">
      {/* Utilisez le chemin du logo importé */}
      <Header logoUrl={logoUrl} title="Mon Site de Simulation de Culture" />
      {/* Affichez la liste des produits alignés en haut */}
      <div className="product-grid">
        {topProducts.map((product, index) => (
          <div className="product" key={index} style={productStyle}>
            <img src={product.image} alt={`Product ${index + 1}`} />
            <h2>{product.name}</h2>
            <p> {product.nom}</p>
            <p>{product.description}</p>
            <p>{product.price} Ar</p>
            <button style={buttonStyle}>Modifier</button>
          </div>
        ))}
      </div>
      {/* Affichez la liste des produits alignés en bas */}
      <div className="product-grid">
        {bottomProducts.map((product, index) => (
          <div className="product" key={index} style={productStyle}>
            <img src={product.image} alt={`Product ${index + 4}`} />
            <h2>{product.name}</h2>
            <p> {product.nom}</p>
            <p> {product.description}</p>
            <p>{product.price} Ar</p>
            <button style={buttonStyle}>Modifier</button>
          </div>
        ))}
      </div>
      {/* Ajoutez le composant Footer ici */}
      <Footer />
    </div>
  );
};

export default App;
