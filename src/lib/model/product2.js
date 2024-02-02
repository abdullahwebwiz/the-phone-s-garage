import mongoose from "mongoose";

const product2Model = new mongoose.Schema({
  p_id: String,
  name: String,
  price: String,
  description: String,
  img: String,
  video: String,
  discount: String,
});

export const Product2 =
  mongoose.models.products2 || mongoose.model("products2", product2Model);
