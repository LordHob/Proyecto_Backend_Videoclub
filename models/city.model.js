module.exports = mongoose => {
    const City = mongoose.model(
      "cities",
      mongoose.Schema(
        {
          nombre: String,
          poblacion: Number,
          cp: Number,
          capital_pro: Boolean,
          capital_ca: Boolean,
          provinceId: Number
        },
        { timestamps: true }
      )
    );
  
    return City;
  };