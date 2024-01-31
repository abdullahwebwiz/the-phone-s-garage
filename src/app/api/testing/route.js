import { mdb_url } from "@/lib/db";
import { Order } from "@/lib/model/order";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export const GET = async (req, content) => {
  const userId = "123";
  const newProducts = [
    { product: "Mokia A10 battery", quantity: 5, price: 1000 },
    { product: "Samsung J20 battery", quantity: 6, price: 1200 },
    { product: "Sony F1 battery", quantity: 7, price: 1300 },
  ];
  try {
    await mongoose.connect(mdb_url);
    let data = await Order.updateOne(
      { userId },
      { $set: { products: newProducts } }
    );
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    return NextResponse.json({ msg: "error" });
  }
};
