import mongoose from "mongoose";

const brandModel = new mongoose.Schema({
  b_id: String,
  name: String,
  models: Array,
});

export const Brand =
  mongoose.models.brands || mongoose.model("brands", brandModel);
