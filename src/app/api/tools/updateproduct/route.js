import { mdb_url } from "@/lib/db";
import { Product3 } from "@/lib/model/product3";
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
        name: payload.name,
        price: payload.price,
        description: payload.description,
        video: payload.video,
        discount: payload.discount,
        __v: 0,
      };
      let data = await Product3.findOneAndUpdate(
        { p_id: payload.p_id },
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
