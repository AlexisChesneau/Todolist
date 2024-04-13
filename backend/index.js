const express = require("express");
const cors = require("cors");
const {
  createItem,
  readAllItems,
  updateItem,
  deleteItem,
  readItem,
  updateCheckbox,
} = require("./crud");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/items", (req, res) => {
  readAllItems((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});

app.get("/items/:identifiant", (request, response) => {
  console.log(request.params);
  readItem(request.params.identifiant, (err, rows) => {
    if (err) {
      response.status(500).send(err.message);
    } else {
      response.status(200).json(rows);
    }
  });
});

app.post("/items", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  createItem(name, (err, _) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(`Item is added`);
    }
  });
});

app.put("/checkbox/:id", (req, res) => {
  const { checkbox } = req.body;
  console.log(
    "Update checkbox /checkbox/:id " + checkbox + " " + req.params.id
  );

  updateCheckbox(req.params.id, checkbox, (err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(`Updated item`);
    }
  });
});

app.put("/items/:id", (req, res) => {
  const { name } = req.body;
  console.log("Update item /items/:id " + name + " " + req.params.id);
  updateItem(req.params.id, name, (err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(`Updated item`);
    }
  });
});

app.delete("/items/:id", (req, res) => {
  deleteItem(req.params.id, (err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(`Deleted item`);
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running");
});
