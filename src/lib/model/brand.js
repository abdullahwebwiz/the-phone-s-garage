import mongoose from "mongoose";

const brandModel = new mongoose.Schema({
  userId: String,
  time: String,
  status: String,
  products: Array,
});

export const Brand =
  mongoose.models.brands || mongoose.model("brands", brandModel);
