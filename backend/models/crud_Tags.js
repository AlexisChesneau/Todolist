const db = require("../database.js");

const readAllTags = (callback) => {
  const sql = `SELECT * FROM Tags`;
  db.all(sql, [], callback);
};

const readOneTags = (id, callback) => {
  const sql = `SELECT tag_name FROM Tags WHERE id = ?`;
  db.get(sql, id, callback);
};

module.exports = {
  readAllTags,
  readOneTags,
};
