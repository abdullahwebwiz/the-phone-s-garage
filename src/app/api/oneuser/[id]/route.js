import { mdb_url } from "@/lib/db";
import { User } from "@/lib/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export const GET = async (req, content) => {
  console.log(content.params.id);
  try {
    await mongoose.connect(mdb_url);
    let data = await User.findOne({user_id:'3995'});
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    return NextResponse.json({ msg: "error" });
  }
};
