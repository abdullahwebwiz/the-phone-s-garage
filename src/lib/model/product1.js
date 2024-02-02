import mongoose from "mongoose";

const product1Model = new mongoose.Schema({
  p_id: String,
  name: String,
  price: String,
  description: String,
  img: String,
  video: String,
  discount: String,
  company: String,
  model: String,
  type: String,
});

export const Product1 =
  mongoose.models.products1 || mongoose.model("products1", product1Model());
