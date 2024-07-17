import React, { useEffect, useState } from 'react';

const fetchFoodData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.products;
};

const FoodComponent = () => {
  const [productsWithMilk, setProductsWithMilk] = useState([]);
  const [productsWithoutMilk, setProductsWithoutMilk] = useState([]);
  const [error, setError] = useState(null);

  const fetchAllProductsWithMilk = async () => {
    const pageSize = 10; // Number of products per page
    let page = 1;
    let allProductsWithMilk = [];
    let hasMore = true;

    while (hasMore) {
      const url = `https://world.openfoodfacts.org/api/v2/search?allergens_tags=milk&fields=product_name,brands,quantity,ingredients_text,image_url,allergens_tags&page=${page}&page_size=${pageSize}`;

      try {
        const products = await fetchFoodData(url);
        allProductsWithMilk = [...allProductsWithMilk, ...products];

        // If the number of products returned is less than the page size, we have reached the end
        if (products.length < pageSize) {
          hasMore = false;
        } else {
          page += 1;
        }
      } catch (error) {
        setError(error.message);
        hasMore = false;
      }
    }

    return allProductsWithMilk;
  };

  const fetchAllProductsWithoutMilk = async () => {
    const pageSize = 10; // Number of products per page
    let page = 1;
    let allProductsWithoutMilk = [];
    let hasMore = true;

    while (hasMore) {
      const url = `https://world.openfoodfacts.org/api/v2/search?fields=product_name,brands,quantity,ingredients_text,image_url,allergens_tags&page=${page}&page_size=${pageSize}`;

      try {
        const products = await fetchFoodData(url);
        // Filter out products that contain milk as allergen
        const productsWithoutMilk = products.filter(product => (
          !product.allergens_tags || !product.allergens_tags.includes('milk')
        ));
        allProductsWithoutMilk = [...allProductsWithoutMilk, ...productsWithoutMilk];

        // If the number of products returned is less than the page size, we have reached the end
        if (products.length < pageSize) {
          hasMore = false;
        } else {
          page += 1;
        }
      } catch (error) {
        setError(error.message);
        hasMore = false;
      }
    }

    return allProductsWithoutMilk;
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const productsWithMilk = await fetchAllProductsWithMilk();
        const productsWithoutMilk = await fetchAllProductsWithoutMilk();

        setProductsWithMilk(productsWithMilk);
        setProductsWithoutMilk(productsWithoutMilk);
      } catch (error) {
        setError(error.message);
      }
    };

    getData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Products with Milk as Allergen</h1>
      {productsWithMilk.map((product, index) => (
        <div key={index}>
          <h2>{product.product_name}</h2>
          <p>Brand: {product.brands}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Ingredients: {product.ingredients_text}</p>
          <img src={product.image_url} alt={product.product_name} />
        </div>
      ))}

      <h1>Products without Milk as Allergen</h1>
      {productsWithoutMilk.map((product, index) => (
        <div key={index}>
          <h2>{product.product_name}</h2>
          <p>Brand: {product.brands}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Ingredients: {product.ingredients_text}</p>
          <img src={product.image_url} alt={product.product_name} />
        </div>
      ))}
    </div>
  );
};

export default FoodComponent;
