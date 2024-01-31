import mongoose from "mongoose";

const orderModel = new mongoose.Schema({
  userId: String,
  time: String,
  status: String,
  products: Array,
});

export const Order =
  mongoose.models.orders || mongoose.model("orders", orderModel);
