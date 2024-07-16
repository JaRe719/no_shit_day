import React, { useEffect, useState } from 'react';

const fetchOpenFoodFacts = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    throw new Error(error.message);
  }
};

const FoodList = () => {
  const [foodDataWithAllergen, setFoodDataWithAllergen] = useState([]);
  const [foodDataWithoutAllergen, setFoodDataWithoutAllergen] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlWithAllergen = 'https://world.openfoodfacts.org/api/v2/search?allergens_tags=milk&fields=product_name,brands,quantity,ingredients_text,image_url';
        const urlWithoutAllergen = 'https://world.openfoodfacts.org/api/v2/search?allergens_tags=-milk&fields=product_name,brands,quantity,ingredients_text,image_url';

        const [dataWithAllergen, dataWithoutAllergen] = await Promise.all([
          fetchOpenFoodFacts(urlWithAllergen),
          fetchOpenFoodFacts(urlWithoutAllergen),
        ]);

        setFoodDataWithAllergen(dataWithAllergen);
        setFoodDataWithoutAllergen(dataWithoutAllergen);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Food Products With Milk</h1>
      {foodDataWithAllergen.length > 0 ? (
        <ul>
          {foodDataWithAllergen.map((product, index) => (
            <li key={index}>
              <h2>{product.product_name}</h2>
              <p>Brand: {product.brands}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Ingredients: {product.ingredients_text}</p>
              {product.image_url && <img src={product.image_url} alt={product.product_name} width="100" />}
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found.</p>
      )}

      <h1>Food Products Without Milk</h1>
      {foodDataWithoutAllergen.length > 0 ? (
        <ul>
          {foodDataWithoutAllergen.map((product, index) => (
            <li key={index}>
              <h2>{product.product_name}</h2>
              <p>Brand: {product.brands}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Ingredients: {product.ingredients_text}</p>
              {product.image_url && <img src={product.image_url} alt={product.product_name} width="100" />}
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default FoodList;

// 'https://world.openfoodfacts.org/api/v2/search?allergens_tags_n=milk&fields=product_name,brands,quantity,ingredients_text,image_url'
// `https://world.openfoodfacts.org/api/v2/search?allergens_tags_not_contains=${allergen}&fields=product_name,brands,quantity,ingredients_text,image_url`