import { mdb_url } from "@/lib/db";
import { User } from "@/lib/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  console.log("API IS CALLED YES!!!");
  let payload = await req.json();
  try {
    await mongoose.connect(mdb_url);
    let users = new User({
      user_id:
        Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000,
      user_name: payload.user_name,
      user_phone: payload.user_phone,
      user_city: payload.user_city,
      user_address: payload.user_address,
      password: payload.password,
      data_joined: payload.data_joined,
      wishlist: { msg: "success" },
      carts: { msg: "success" },
    });
    let result = await users.save();
    console.log(result);
    if (result) {
      return NextResponse.json({ msg: "success", data: result });
    } else {
      return NextResponse.json({ msg: "failed" });
    }
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    return NextResponse.json({ msg: "failed" });
  }
};
