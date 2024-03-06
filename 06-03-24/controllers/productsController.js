const data = {
  products: require("../models/products.json"),
  setProducts: (data) => {
    this.products = data;
  },
};

const getAllProducts = () => {
  return data.products;
};

const getUomoProd = () => {
  return data.products.filter((prodotto) => prodotto.categoria === "uomo");
};

const getDonnaProd = () => {
  return data.products.filter((prodotto) => prodotto.categoria === "donna");
};

const getBambinoProd = () => {
  return data.products.filter((prodotto) => prodotto.categoria === "bambini");
};

module.exports = {
  getAllProducts,
  getUomoProd,
  getDonnaProd,
  getBambinoProd,
};
