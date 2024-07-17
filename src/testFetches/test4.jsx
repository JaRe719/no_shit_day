import React, { useState, useEffect } from 'react';

const fetchFoodData = async (allergen, page, pageSize) => {
  const url = `https://world.openfoodfacts.org/api/v2/search?allergens_tags=${allergen}&fields=product_name,brands,quantity,ingredients_text,image_url,allergens_tags&page=${page}&page_size=${pageSize}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    throw error;
  }
};

const ProductList = () => {
  const [productsWithMilk, setProductsWithMilk] = useState([]);
  const [productsWithoutMilk, setProductsWithoutMilk] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        // Laden von Produkten mit Milch
        const productsWithMilkData = await fetchFoodData('milk', 1, 50); // Beispiel: Seite 1, 50 Produkte pro Seite
        setProductsWithMilk(productsWithMilkData);

        // Laden von Produkten ohne Milch
        const productsWithoutMilkData = await fetchFoodData('-milk', 1, 50); // Beispiel: Seite 1, 50 Produkte pro Seite
        setProductsWithoutMilk(productsWithoutMilkData);
      } catch (error) {
        setError(error.message);
      }
    };

    loadProducts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Produkte mit Milch</h2>
      <ul>
        {productsWithMilk.map((product, index) => (
          <li key={index}>
            <img src={product.image_url} alt={product.product_name} />
            <div>
              <p>Produktname: {product.product_name}</p>
              <p>Marke: {product.brands}</p>
              <p>Menge: {product.quantity}</p>
              <p>Zutaten: {product.ingredients_text}</p>
            </div>
          </li>
        ))}
      </ul>

      <h2>Produkte ohne Milch</h2>
      <ul>
        {productsWithoutMilk.map((product, index) => (
          <li key={index}>
            <img src={product.image_url} alt={product.product_name} />
            <div>
              <p>Produktname: {product.product_name}</p>
              <p>Marke: {product.brands}</p>
              <p>Menge: {product.quantity}</p>
              <p>Zutaten: {product.ingredients_text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
