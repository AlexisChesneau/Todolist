function middlewaresDebug(req, res, next) {
  console.log("\n_______________________________________");
  console.log(
    `${new Date().toLocaleString("fr")} - ${req.method} ${req.url}  `
  );
  if (Object.keys(req.body).length !== 0) {
    console.log("Body :");
    console.log(req.body);
  }
  next();
}

module.exports = middlewaresDebug;
