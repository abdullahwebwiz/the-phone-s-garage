import { mdb_url } from "@/lib/db";
import { Product1 } from "@/lib/model/product1";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (req, content) => {
  let model = content.params.model;
  console.log(model);
  try {
    await mongoose.connect(mdb_url);
    let data = await Product1.find({ model: model });
    console.log(data);
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    return NextResponse.json({ msg: "error" });
  }
};
