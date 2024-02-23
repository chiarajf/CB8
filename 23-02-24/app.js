const express = require("express");
//ogni volta che devo prendere un dato devo utilizzare il body parser, in questo caso lo utilizzo per il form che andrò a creare
const bodyParser = require("body-parser");
const auth = require("./auth");

const app = express();
const PORT = 4000;

//uso bodyparser che è un middleware nativo e che mi gestisce il controllo dei dati parserizzandoli.
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/accesso", (req, res) => {
  res.sendFile(__dirname + "/public/form.html");
});

app.get("/auth", auth, (req, res) => {
  res.sendFile(__dirname + "/public/dashboard.html");
});

app.post("/mostra-dati", (req, res) => {
  const { nome } = req.body;
  const { cognome } = req.body;
  const { segno } = req.body;

  if (nome && cognome && segno) {
    return res
      .status(200)
      .send(
        `<h1>Grazie per aver lasciato i dati ${nome} ${cognome} con segno zodiacale ${segno}`
      );
  }
  res.status(400).send("per favore compila tutti i dati richiesti");
});

app.listen(PORT, () => {
  console.log("Server attivo");
});
