import { mdb_url } from "@/lib/db";
import { Product1 } from "@/lib/model/product1";
import { Product2 } from "@/lib/model/product2";
import { Product3 } from "@/lib/model/product3";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export const POST = async (req) => {
  let payload = await req.json();
  try {
    await mongoose.connect(mdb_url);
    const wishlist = payload.wishlist;
    const query = { p_id: { $in: wishlist } };
    const result1 = await Product1.find(query);
    const result2 = await Product2.find(query);
    const result3 = await Product3.find(query);
    console.log([...result1, ...result2, ...result3]);
    return NextResponse.json([...result1, ...result2, ...result3]);
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    return NextResponse.json({ msg: "error" });
  }
};
