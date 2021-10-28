const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.movies = require("./movie.model")(mongoose);
db.orders = require("./order.model")(mongoose);
// db.cities = require("./city.model.js")(mongoose);
db.users = require("./user.model.js")(mongoose);

module.exports = db;