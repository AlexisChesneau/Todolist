const sqlite3 = require("sqlite3").verbose();
const dbname = "todolist.db";

let db = new sqlite3.Database(dbname, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to the Database");
    db.run(
      "CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)",
      (err) => {
        if (err) {
          console.error(err.message);
        } else {
          console.log("Table created or existed");
        }
      }
    );
  }
});

// db.close((err) => {
//   if (err) {
//     console.error(err.message);
//   } else {
//     console.log("Database closed.");
//   }
// });

module.exports = db;
