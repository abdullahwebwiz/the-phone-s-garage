import { mdb_url } from "@/lib/db";
import { Product3 } from "@/lib/model/product3";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export const GET = async (req, content) => {
  let amount = content.params.amount;
  console.log("hehehehe");
  try {
    await mongoose.connect(mdb_url);
    let data = await Product3.find().limit(amount);
    // console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    return NextResponse.json({ msg: "error" });
  }
};
