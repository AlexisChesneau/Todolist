const db = require("../database.js");

const createItem = (name, description, callback) => {
  const sql = `INSERT INTO Items (name, description) VALUES (?, ?)`;
  db.get(sql, [name, description], function (err) {
    callback(err, { id: this.lastID });
  });
};

const readAllItems = (callback) => {
  const sql = `SELECT * FROM Items`;
  db.all(sql, [], callback);
};

const readOneItem = (id, callback) => {
  const sql = `SELECT name, description FROM Items WHERE id = ?`;
  db.get(sql, id, callback);
};

const updateItem = (id, name, description, callback) => {
  const sql = `UPDATE Items SET name = ?, description = ? WHERE id = ?`;
  console.log(sql);
  db.run(sql, [name, description, id], callback);
};

const updateCheckbox = (id, checkbox, callback) => {
  const sql = `UPDATE Items SET checkbox = ? WHERE id = ?`;
  db.run(sql, [checkbox, id], callback);
};

const deleteOneItem = (id, callback) => {
  const sql = `DELETE FROM Items WHERE id = ?`;
  db.run(sql, id, callback);
};

const deleteAllItems = (callback) => {
  const sql = `DELETE FROM Items`;
  db.run(sql, callback);
};

module.exports = {
  createItem,
  readAllItems,
  updateItem,
  deleteOneItem,
  deleteAllItems,
  readOneItem,
  updateCheckbox,
};
