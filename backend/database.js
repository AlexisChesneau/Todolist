const sqlite3 = require("sqlite3").verbose();
const dbname = "todolist.db";

let db = new sqlite3.Database(dbname, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to the Database");

    db.run(
      "CREATE TABLE IF NOT EXISTS Tags (id INTEGER PRIMARY KEY AUTOINCREMENT, tag_name VARCHAR(50))",
      (err) => {
        if (err) {
          console.error(err.message);
        } else {
          console.log("Table Tags created or existed");
        }
      }
    );

    db.run(
      "CREATE TABLE IF NOT EXISTS Items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, checkbox BOOLEAN DEFAULT FALSE, description TEXT, tag_id INTEGER, FOREIGN KEY (tag_id) REFERENCES Tags(id))",
      (err) => {
        if (err) {
          console.error(err.message);
        } else {
          console.log("Table items created or existed");
        }
      }
    );
  }
});

// PRAGMA foreign_keys = ON;

module.exports = db;
