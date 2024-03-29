import { mdb_url } from "@/lib/db";
import { Product2 } from "@/lib/model/product2";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export const GET = async (req, content) => {
  let amount = content.params.amount;
  try {
    await mongoose.connect(mdb_url);
    let data = await Product2.find().limit(amount);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    return NextResponse.json({ msg: "error" });
  }
};
