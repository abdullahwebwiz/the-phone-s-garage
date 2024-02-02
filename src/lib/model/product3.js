import mongoose from "mongoose";

const product3Model = new mongoose.Schema({
  p_id: String,
  name: String,
  price: String,
  description: String,
  img: String,
  video: String,
  discount: String,
});

export const Product3 =
  mongoose.models.products3 || mongoose.model("products3", product3Model);
