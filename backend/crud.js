const db = require("./database.js");

const createItem = (name, callback) => {
  const sql = `INSERT INTO items (name) VALUES (?)`;
  db.run(sql, [name], function (err) {
    callback(err, { id: this.lastID });
  });
};

const readAllItems = (callback) => {
  const sql = `SELECT * FROM items`;
  db.all(sql, [], callback);
};

const readItem = (id, callback) => {
  const sql = `SELECT name FROM items WHERE id = ?`;
  db.get(sql, id, callback);
};

const updateItem = (id, name, callback) => {
  const sql = `UPDATE items SET name = ? WHERE id = ?`;
  console.log(sql);
  db.run(sql, [name, id], callback);
};

const updateCheckbox = (id, checkbox, callback) => {
  const sql = `UPDATE items SET checkbox = ? WHERE id = ?`;
  db.run(sql, [checkbox, id], callback);
};

const deleteItem = (id, callback) => {
  const sql = `DELETE FROM items WHERE id = ?`;
  db.run(sql, id, callback);
};

module.exports = {
  createItem,
  readAllItems,
  updateItem,
  deleteItem,
  readItem,
  updateCheckbox,
};
