import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  user_id: String,
  user_name: String,
  user_phone: String,
  user_city: String,
  user_address: String,
  password: String,
  data_joined: String,
  wishlist: Array,
  carts: Array,
});

export const User = mongoose.models.users || mongoose.model("users", userModel);
