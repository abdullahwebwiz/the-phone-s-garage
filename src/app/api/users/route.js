import { mdb_url } from "@/lib/model/db";
import { User } from "@/lib/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await mongoose.connect(mdb_url);
    let data = await User.find();
    console.log(data);
    return NextResponse.json({ msg: "success" });
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    return NextResponse.json({ msg: "error" });
  }
};

export const POST = async (req) => {
  let payload = await req.json();
  console.log(payload);
  try {
    await mongoose.connect(mdb_url);
    let users = new User({
      user_id: "2",
      user_name: "Jaan",
      user_phone: "03334478563",
      user_address: "cantt Goa",
      password: "1qwertyhg455",
      data_joined: "1706438010",
      wishlist: { msg: "success" },
      Object: { msg: "success" },
    });
    let result = await users.save();
    console.log(result);
    return NextResponse.json({ msg: "success" });
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    return NextResponse.json({ msg: "error" });
  }
};
