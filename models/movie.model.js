module.exports = mongoose => {
    const Movie = mongoose.model(
      "movies",
      mongoose.Schema(
        {
          title: String,
          genre: String,
          cast: String,
          year: Number,
        },
        { timestamps: true }
      )
    );
  
    return Movie;
  };