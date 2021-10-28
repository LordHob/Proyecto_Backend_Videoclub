const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.cas = require("./ca.model")(mongoose);
db.provinces = require("./province.model")(mongoose);
db.cities = require("./city.model.js")(mongoose);
db.users = require("./user.model.js")(mongoose);

module.exports = db;