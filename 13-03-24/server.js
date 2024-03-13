const express = require("express");
const port = 3000;
const app = express();
const router = require("./routes/root");

app.use(router);

app.listen(port, () => {
  console.log("Ser Ver sta ascoltando...");
});
