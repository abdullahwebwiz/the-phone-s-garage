import { mdb_url } from "@/lib/db";
import { User } from "@/lib/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (req, content) => {
  let userid = content.params.userid;
  console.log(userid);
  try {
    await mongoose.connect(mdb_url);
    let data = await User.findOne({ user_id: userid });
    console.log(data);
    return NextResponse.json({ userdata: data });
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    return NextResponse.json({ msg: "error" });
  }
};
