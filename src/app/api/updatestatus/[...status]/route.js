import { mdb_url } from "@/lib/db";
import { Order } from "@/lib/model/order";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export const GET = async (req, content) => {
  console.log(content);
  let orderId = content.params.status[0];
  let status = content.params.status[1];
  try {
    await mongoose.connect(mdb_url);
    let data = await Order.updateOne(
      { _id: orderId },
      { $set: { status: status } }
    );
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    return NextResponse.json({ msg: "error" });
  }
};
