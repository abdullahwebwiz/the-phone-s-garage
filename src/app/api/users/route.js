import { mdb_url } from "@/lib/db";
import { User } from "@/lib/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  let { amount } = await req.json();
  try {
    await mongoose.connect(mdb_url);
    let data = await User.find().limit(amount);
    let data2 = await User.countDocuments();
    console.log(data2);
    return NextResponse.json({ x: data, y: data2 });
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    return NextResponse.json({ msg: "error" });
  }
};
