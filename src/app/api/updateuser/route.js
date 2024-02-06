import { mdb_url } from "@/lib/db";
import { User } from "@/lib/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  let payload = await req.json();
  console.log("api called");
  console.log(payload);
  if (payload) {
    try {
      await mongoose.connect(mdb_url);
      const newData = {
        user_name: payload.name,
        user_phone: payload.phone,
        user_city: payload.city,
        user_address: payload.address,
      };
      let data = await User.findOneAndUpdate(
        { user_id: payload.userid },
        { $set: newData },
        { new: true }
      );

      console.log(data);
      if (data) {
        return NextResponse.json({ msg: "success" });
      } else {
        return NextResponse.json({ msg: "failed" });
      }
    } catch (error) {
      console.error("Error connecting to MongoDB", error.message);
      return NextResponse.json({ msg: "failed" });
    }
  }
};
