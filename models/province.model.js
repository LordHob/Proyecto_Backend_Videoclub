module.exports = mongoose => {
  const Province = mongoose.model(
    "provinces",
    mongoose.Schema(
      {
        nombre: String,
        cp: Number,
        poblacion: Number,
        superficie: Number,
        caId : Number
      },
      { timestamps: true }
    )
  );

  return Province;
};
