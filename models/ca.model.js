module.exports = mongoose => {
    const Ca = mongoose.model(
      "cas",
      mongoose.Schema(
        {
          nombre: String,
          poblacion: Number,
          superficie: Number, 
        },
        { timestamps: true }
      )
    );
  
    return Ca;
  };