module.exports = mongoose => {
  const Order = mongoose.model(
    "orders",
    mongoose.Schema(
      {
        idUser: String,
        idMovie: String,
        rantalDate: Date,
        returnDate: Date,
      },
      { timestamps: true }
    )
  );

  return Order;
};
