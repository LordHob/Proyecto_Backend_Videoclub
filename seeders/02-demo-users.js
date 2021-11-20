'use strict';
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [{
      name: "Rafael Giner",
      email: "rafa@mail.com",
      password: bcrypt.hashSync("rafa", Number.parseInt(authConfig.rounds)),
      city: "Valencia",
      admin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "George Asdf",
      email: "george@mail.com",
      password: bcrypt.hashSync("george", Number.parseInt(authConfig.rounds)),
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Nealson Chilver",
      email: "nchilver0@paypal.com",
      password: bcrypt.hashSync("rfgthdsd", Number.parseInt(authConfig.rounds)),
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Franni Swire",
      email: "fswire1@hp.com",
      password: bcrypt.hashSync("GrCdwWS", Number.parseInt(authConfig.rounds)),
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Nonna McDowall",
      email: "nmcdowall2@wiley.com",
      password: bcrypt.hashSync("DGyHUjiK", Number.parseInt(authConfig.rounds)),
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Tracy Spere",
      email: "tspere3@about.me",
      password: bcrypt.hashSync("ReSvftU", Number.parseInt(authConfig.rounds)),
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Cchaddie McGaugie",
      email: "cmcgaugie4@opensource.org",
      password: bcrypt.hashSync("6434Fsas", Number.parseInt(authConfig.rounds)),
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Pepita Lakin",
      email: "plakin5@ted.com",
      password: bcrypt.hashSync("bgDseR45", Number.parseInt(authConfig.rounds)),
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Donna Lusty",
      email: "dlusty6@boston.com",
      password: bcrypt.hashSync("7erGHiU", Number.parseInt(authConfig.rounds)),
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Janot Ebbs",
      email: "jebbs7@timesonline.co.uk",
      password: bcrypt.hashSync("099sEdf", Number.parseInt(authConfig.rounds)),
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Maud Sarjant",
      email: "msarjant8@multiply.com",
      password: bcrypt.hashSync("EnGsd45", Number.parseInt(authConfig.rounds)),
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Nevins Keough",
      email: "nkeough9@tmall.com",
      password: bcrypt.hashSync("1vsrm28", Number.parseInt(authConfig.rounds)),
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Rhett Amburgy",
      email: "ramburgyb@sciencedirect.com",
      password: bcrypt.hashSync("loAgk77", Number.parseInt(authConfig.rounds)),
      city: "Alicante",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Addie McCory",
      email: "amccoryc@sciencedirect.com",
      password: bcrypt.hashSync("789ZhVfOx", Number.parseInt(authConfig.rounds)),
      city: "Alicante",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Bette Nelius",
      email: "bneliusf@fema.gov",
      password: bcrypt.hashSync("RCONyOm", Number.parseInt(authConfig.rounds)),
      city: "Alicante",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Valry Brennand",
      email: "vbrennandh@china.com.cn",
      password: bcrypt.hashSync("Nl564eVV", Number.parseInt(authConfig.rounds)),
      city: "Alicante",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Marj Iorns",
      email: "miornsn@mozilla.org",
      password: bcrypt.hashSync("YQ32j78", Number.parseInt(authConfig.rounds)),
      city: "Alicante",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Vonnie Rabl",
      email: "vrablq@csmonitor.com",
      password: bcrypt.hashSync("dsEK77VJc", Number.parseInt(authConfig.rounds)),
      city: "Castellon",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Kelci Scaddon",
      email: "kscaddons@answers.com",
      password: bcrypt.hashSync("9rr3w8mN", Number.parseInt(authConfig.rounds)),
      city: "Castellon",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Noni Bassano",
      email: "nbassanox@xrea.com",
      password: bcrypt.hashSync("4ghHYA", Number.parseInt(authConfig.rounds)),
      city: "Castellon",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('users', null, {});

  }
};
