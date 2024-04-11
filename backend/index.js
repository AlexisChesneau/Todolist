const express = require("express");
const cors = require("cors");
const { createItem, readItem, updateItem, deleteItem } = require("./crud");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/items", (req, res) => {
  readItem((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});

app.post("/items", (req, res) => {
  const { name } = req.body;
  createItem(name, (err, _) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(`Item is added`);
    }
  });
});

app.put("/items/:id", (req, res) => {
  const { name } = req.body;
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
