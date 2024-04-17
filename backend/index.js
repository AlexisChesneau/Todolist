const middlewaresDebug = require("./middlewares/middlewaresDebug");
const routerItems = require("./Router/routerItems");
const routerTags = require("./Router/routerTags");

const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use(middlewaresDebug);

app.use("/items", routerItems);
app.use("/tags", routerTags);

app.listen(3000, () => {
  console.log("Server is running");
});
