import { mdb_url } from "@/lib/db";
import { Product1 } from "@/lib/model/product1";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  let payload = await req.json();
  console.log("api called");
  console.log(payload);
  if (payload) {
    try {
      await mongoose.connect(mdb_url);
      let users = new Product3({
        p_id:
          Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) +
          1000000000,
        name: payload.name,
        price: payload.price,
        description: payload.description,
        img: Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000,
        video: payload.video,
        discount: payload.discount,
      });
      let result = await users.save();
      console.log(result);
      if (result) {
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
