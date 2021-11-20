'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('movies', [{
      title: "Cadena Perpetua",
      genre: "Drama",
      cast: "Tim Robbins",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "El padrino",
      genre: "Crimen",
      cast: "Marlon Brando",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "El padrino 2",
      genre: "Crimen",
      cast: "Al Pacino",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "El caballero oscuro",
      genre: "Accion",
      cast: "Christian Bale",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "12 hombres sin piedad",
      genre: "Crimen",
      cast: "Henry Fonda",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "La lista de Schindler",
      genre: "Drama",
      cast: "Liam Neeson",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "El señor de los anillos, El retorno del rey",
      genre: "Aventuras",
      cast: "Elijah Wood",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Pulp Fiction",
      genre: "Crimen",
      cast: "John Travolta",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "El bueno, el feo y el malo",
      genre: "Western",
      cast: "Clint Eastwood",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "El señor de los anillos, La comunidad del anillo",
      genre: "Aventuras",
      cast: "Elijah Wood",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "El club de la lucha",
      genre: "Drama",
      cast: "Brad Pitt",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Forrest Gump",
      genre: "Drama",
      cast: "Tom Hanks",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Origen",
      genre: "Accion",
      cast: "Leonardo DiCaprio",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "El señor de los anillos, Las dos torres",
      genre: "Aventuras",
      cast: "Elijah Wood",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Star Wars, El Imperio contraataca",
      genre: "Accion",
      cast: "Mark Hamill",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Matrix",
      genre: "Accion",
      cast: "Keanu Reeves",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Uno de los nuestros",
      genre: "Crimen",
      cast: "Robert De Niro",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Alguien voló sobre el nido del cuco",
      genre: "Drama",
      cast: "Jack Nicholson",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Los siete samuráis",
      genre: "Accion",
      cast: "Toshiro Mifune",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Seven",
      genre: "Crimen",
      cast: "Brad Pitt",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "El silencio de los corderos",
      genre: "Crimen",
      cast: "Jodie Foster",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Ciudad de Dios",
      genre: "Crimen",
      cast: "Alexandre Rodrigues",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "La vida es bella",
      genre: "Comedia",
      cast: "Roberto Benigni",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Que bello es vivir",
      genre: "Drama",
      cast: "James Stewart",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Star Wars",
      genre: "Accion",
      cast: "Mark Hamill",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Salvar al soldado Ryan",
      genre: "Guerra",
      cast: "Tom Hanks",
      city: "Alicante",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Interstellar",
      genre: "Aventuras",
      cast: "Matthew McConaughey",
      city: "Alicante",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "El viaje de Chihiro",
      genre: "Animacion",
      cast: "Mayao Miyazaki",
      city: "Alicante",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "La milla verde",
      genre: "Drama",
      cast: "Tom Hanks",
      city: "Alicante",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Parásitos",
      genre: "Comedia",
      cast: "Kang-ho Song",
      city: "Alicante",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Pesadilla antes de Navidad",
      genre: "Animacion",
      cast: "Jack Skellington",
      city: "Alicante",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Coco",
      genre: "Animacion",
      cast: "Lee Unkrich",
      city: "Alicante",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "El show de Truman",
      genre: "Comeida",
      cast: "Jim Carrey",
      city: "Alicante",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Uninvited Guest",
      genre: "Fantasia",
      cast: "Michael Douglas",
      city: "Alicante",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Lost Souls",
      genre: "Crimen",
      cast: "Heath Ledger",
      city: "Alicante",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "El lobo de Wall Street",
      genre: "Comedia",
      cast: "Leonardo DiCaprio",
      city: "Alicante",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Regreso al futuro",
      genre: "Aventura",
      cast: "Michael J Fox",
      city: "Alicante",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "El profesional",
      genre: "Accion",
      cast: "Jean Reno",
      city: "Alicante",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "El pianista",
      genre: "Drama",
      cast: "Adrien Brody",
      city: "Alicante",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Terminator 2",
      genre: "Accion",
      cast: "Arnold Schwarzenegger",
      city: "Castellon",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Sospechosos habituales",
      genre: "Crimen",
      cast: "Kevin Spacey",
      city: "Castellon",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Psicosis",
      genre: "Terror",
      cast: "Anthony Perkins",
      city: "Castellon",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Alien",
      genre: "Terror",
      cast: "Sigourney Weaver",
      city: "Castellon",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "American History X",
      genre: "Drama",
      cast: "Edward Norton",
      city: "Castellon",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Whiplash",
      genre: "Drama",
      cast: "Miles Teller",
      city: "Castellon",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Gladiator",
      genre: "Accion",
      cast: "Russell Crowe",
      city: "Castellon",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Infiltrados",
      genre: "Crimen",
      cast: "Leonardo DiCaprio",
      city: "Castellon",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "El truco final",
      genre: "Drama",
      cast: "Christian Bale",
      city: "Castellon",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Casablanca",
      genre: "Drama",
      cast: "Humphrey Bogart",
      city: "Castellon",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: "La reina de Africa",
      genre: "Adventura",
      cast: "Humphrey Bogart",
      city: "Castellon",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('movies', null, {});

  }
};
