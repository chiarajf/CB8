const express = require("express");
const { getAllProducts } = require("../controllers/productsController");
const { getUomoProd } = require("../controllers/productsController");
const { getDonnaProd } = require("../controllers/productsController");
const { getBambinoProd } = require("../controllers/productsController");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/prodotti", (req, res) => {
  const products = getAllProducts();
  res.render("prodotti", { data: products });
});

router.get("/prodotti/uomo", (req, res) => {
  const products = getUomoProd();
  res.render("uomo", { data: products });
});

router.get("/prodotti/donna", (req, res) => {
  const products = getDonnaProd();
  res.render("donna", { data: products });
});

router.get("/prodotti/bambino", (req, res) => {
  const products = getBambinoProd();
  res.render("bambino", { data: products });
});

module.exports = router;
