const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const quotes = require("./quotes");
const app = express();
const port = 5000;

function getNextID() {
  const lastID = quotes.length > 0 ? quotes[quotes.length - 1].id : 0;
  return lastID + 1;
}

app.use(express.static("./public"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/api/data", (req, res) => {
  res.json(quotes);
});

app.get("/quotes", (req, res) => {
  const reversedQuotes = quotes.slice().reverse();

  res.render("quotes", { data: reversedQuotes });
});

app.get("/form", (req, res) => {
  const reversedQuotes = quotes.slice().reverse();
  res.render("form", { data: reversedQuotes });
});

app.post("/form", (req, res) => {
  const { quote, author } = req.body;

  if (!quote || !author) {
    return res.status(400).json({ success: false, msg: "Wrong data typed" });
  }

  const newQuote = {
    id: getNextID(),
    quote: quote,
    author: author,
  };

  quotes.push(newQuote);

  const reversedQuotes = quotes.slice().reverse();
  res.render("form", { data: reversedQuotes });
});

app.listen(port, () => {
  console.log(`Server active on port ${port}`);
});
