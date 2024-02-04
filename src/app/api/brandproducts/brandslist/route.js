import { mdb_url } from "@/lib/db";
import { Brand } from "@/lib/model/brand";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export const GET = async (req, content) => {
  try {
    await mongoose.connect(mdb_url);
    let data = await Brand.find();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    return NextResponse.json({ msg: "error" });
  }
};
