require("dotenv").config();
const express = require("express");
const hbs = require("hbs");
const app = express();

const port = process.env.PORT;

app.set("view engine", "hbs");
app.use(express.json());
app.use(express.static(__dirname + "/public"));

//Qui inizio il routing
app.use("/", require("./routes/root"));
app.use("/prodotti", require("./routes/root"));
app.use("/uomo", require("./routes/root"));
app.use("/donna", require("./routes/root"));
app.use("/bambino", require("./routes/root"));

app.listen(port, () => {
  console.log(`Server active on port ${port}`);
});
