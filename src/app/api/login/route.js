import { mdb_url } from "@/lib/db";
import { User } from "@/lib/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export const POST = async (req) => {
  console.log("API IS CALLED YES!!!");
  let payload = await req.json();
  try {
    await mongoose.connect(mdb_url);
    let data = await User.findOne({ user_phone: payload.phone });
    if (data) {
      if (payload.password == data.password) {
        return NextResponse.json({ msg: "victory", data: data });
      } else {
        return NextResponse.json({ msg: "wrongpass" });
      }
    } else {
      return NextResponse.json({ msg: "nouser" });
    }
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    return NextResponse.json({ msg: "failed" });
  }
};
