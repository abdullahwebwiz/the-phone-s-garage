import { mdb_url } from "@/lib/db";
import { Product1 } from "@/lib/model/product1";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export const GET = async (req, content) => {
  let p_id = content.params.p_id;
  console.log(p_id);
  try {
    await mongoose.connect(mdb_url);
    let data = await Product1.findOne({ p_id: p_id });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    return NextResponse.json({ msg: "error" });
  }
};
