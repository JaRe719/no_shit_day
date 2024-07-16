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
  
  const loadAllProducts = async () => {
    try {
      // Laden von Produkten mit Milch
      const productsWithMilkData = await fetchFoodData('milk', 1, 50); // Beispiel: Seite 1, 50 Produkte pro Seite
  
      // Laden von Produkten ohne Milch
      const productsWithoutMilkData = await fetchFoodData('-milk', 1, 50); // Beispiel: Seite 1, 50 Produkte pro Seite
  
      return {
        productsWithMilk: productsWithMilkData,
        productsWithoutMilk: productsWithoutMilkData,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return { error: error.message };
    }
  };
  
  export default loadAllProducts;
  