const express = require("express");

const { readAllTags, readOneTags } = require("../models/crud_Tags");

const routerTags = express.Router();

routerTags.get("/tags", (req, res) => {
  readAllTags((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});

routerTags.get("/tags/:id", (req, res) => {
  readOneTags(req.params.id, (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});

module.exports = routerTags;
