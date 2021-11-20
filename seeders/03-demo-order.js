'use strict';
let myDate = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('orders', [{
      userId: 5,
      movieId: 35,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 15,
      movieId: 45,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 25,
      movieId: 55,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 35,
      movieId: 65,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 45,
      movieId: 75,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 55,
      movieId: 85,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 65,
      movieId: 95,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 75,
      movieId: 105,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 85,
      movieId: 115,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 95,
      movieId: 125,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 105,
      movieId: 135,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 115,
      movieId: 145,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 125,
      movieId: 155,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 135,
      movieId: 165,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 145,
      movieId: 175,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 155,
      movieId: 185,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 165,
      movieId: 195,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 175,
      movieId: 205,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 185,
      movieId: 215,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 195,
      movieId: 225,
      rentDate: new Date(),
      returnDate: myDate
    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('orders', null, {});

  }
};
