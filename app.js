import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app);

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
