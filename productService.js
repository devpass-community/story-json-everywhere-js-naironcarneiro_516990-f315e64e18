async function getProduct(productId) {
  const apiUrl = `https://fakestoreapi.com/products/${productId}`;

  axios.get(apiUrl, {
    params: {
      productId: productId,
    },
  });
}

module.exports = getProduct;
