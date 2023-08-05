const axios = require("axios");
async function getProduct(productId) {
  const apiUrl = `https://fakestoreapi.com/products/${productId}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = getProduct;
