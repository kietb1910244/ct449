const express = require("express");
const contactsRouter = require("./app/routes/contact.route");
const cors = require("cors");

const app = express();

app.use(cors());
app.use("/api/contacts", contactsRouter);
module.exports = app;

app.get("/", (req, res) => {
  res.json({ message: "Wwlcome to contact book application." });
});
module.exporst = app;
