const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const { users } = require("./data");

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

//mostro tutto il mio data.js con tutti i miei users sulla rotta /api/v1
app.get("/api/v1", (req, res) => {
  res.json(users);
});

//mostro solo alcuni campi scelti dal mio data, in questo caso id dell'user il suo nomo e cognome
app.get("/api/v1/users", (req, res) => {
  const newUsers = users.map((user) => {
    const { id, firstName, lastName } = user;
    return { id, firstName, lastName };
  });
  res.json(newUsers);
});

//effettuo la ricerca per id, imposto un controllo e cioè che se l'id inserito non è presente, allora mi verrà restituito "Utente non trovato"
app.get("/api/v1/users/:userId", (req, res) => {
  const { userId } = req.params;
  console.log(req.params);
  const singleUsers = users.find((user) => user.id === Number(userId));

  if (!singleUsers) {
    return res.status(404).send("Utente non trovato");
  }

  return res.json(singleUsers);
});

//filtro per first name degli utenti. Ho aggiunto la possibilità di ricercare sia in maiuscolo che in minuscolo anche tramite l'or
// con limit decido quanti risultati mostrare di quella particolare ricerca. Per esempio io ho due utenti che si chiamano Eleonora.
//se nel path scrivo : ?search=Eleanora&limit=1 vedrò solo il primo dei due risultati, mentre se metto 2 li vedrò entrambi
app.get("/api/v1/user", (req, res) => {
  const { search, limit } = req.query;
  console.log(req.query);
  let filterUser = [...users];

  if (search) {
    const searchTermLower = search.toLowerCase();
    const searchTermUpper = search.toUpperCase();
    filterUser = filterUser.filter((user) => {
      const userLowerCase = user.firstName.toLowerCase();
      return (
        userLowerCase.startsWith(searchTermLower) ||
        userLowerCase.startsWith(searchTermUpper)
      );
    });
  }

  if (limit) {
    filterUser = filterUser.slice(0, limit);
  }

  if (filterUser.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }

  res.status(200).json(filterUser);
});

app.listen(PORT, () => {
  console.log("server attivo");
});
