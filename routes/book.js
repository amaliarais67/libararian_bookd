const BookRoute = require("express").Router();
const BookController = require("../controllers/BookController");

BookRoute.get("/", BookController.getbooks);
BookRoute.get("/add", BookController.createPage);
BookRoute.post("/add", BookController.create);
BookRoute.get("/edit/:id", BookController.updatePage);
BookRoute.post("/edit/:id", BookController.update);
BookRoute.get("/delete/:id", BookController.delete);
BookRoute.get("/:id", BookController.findById);

module.exports = BookRoute;
