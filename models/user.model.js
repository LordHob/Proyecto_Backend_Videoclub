module.exports = mongoose => {
  const User = mongoose.model(
    "users",
    mongoose.Schema(
      {
        name: String,
        email: String,
        password: String
      },
      { timestamps: true }
    )
  );

  return User;
};
