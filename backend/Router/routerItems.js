const express = require("express");

const {
  createItem,
  readAllItems,
  updateItem,
  deleteOneItem,
  deleteAllItems,
  readOneItem,
  updateCheckbox,
} = require("../models/crud_Items");

const routerItems = express.Router();

routerItems.use((req, res, next) => {
  console.log("ici c'est router pour items");
  next();
});

routerItems.get("/", (req, res) => {
  readAllItems((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});

routerItems.get("/:identifiant", (request, response) => {
  readOneItem(request.params.identifiant, (err, rows) => {
    if (err) {
      response.status(500).send(err.message);
    } else {
      response.status(200).json(rows);
    }
  });
});

routerItems.post("/", (req, res) => {
  const { name, description } = req.body;
  createItem(name, description, (err, _) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(`Item is added`);
    }
  });
});

routerItems.put("/:id", (req, res) => {
  const { name, description } = req.body;
  updateItem(req.params.id, name, description, (err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(`Updated item`);
    }
  });
});

routerItems.put("/checkbox/:id", (req, res) => {
  const { checkbox } = req.body;
  updateCheckbox(req.params.id, checkbox, (err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(`Updated item`);
    }
  });
});

routerItems.delete("/:id", (req, res) => {
  deleteOneItem(req.params.id, (err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(`Deleted item`);
    }
  });
});

routerItems.delete("/", (req, res) => {
  deleteAllItems((err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(`Deleted All items`);
    }
  });
});

module.exports = routerItems;
