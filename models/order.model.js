module.exports = mongoose => {
  const Order = mongoose.model(
    "orders",
    mongoose.Schema(
      {
        idUser: Number,
        idMovie: Number,
        rantalDate: Date,
        returnDate: Date,
      },
      { timestamps: true }
    )
  );

  return Order;
};
