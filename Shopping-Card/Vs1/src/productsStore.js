const productsArray = [
  {
    id: "1",
    title: "Coffee",
    price: 4.99,
  },
  {
    id: "2",
    title: "Sunglasses",
    price: 9.99,
  },
  {
    id: "3",
    title: "Camera",
    price: 39.99,
  },
];

function getProductData(id) {
  let getProductData = productsArray.find((reference) => reference.id === id);
  if (getProductData == undefined) {
    return undefined;
  }
  return getProductData;
}

export { productsArray, getProductData };
