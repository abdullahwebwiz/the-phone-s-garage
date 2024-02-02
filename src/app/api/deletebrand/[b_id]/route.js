import { mdb_url } from "@/lib/db";
import { Brand } from "@/lib/model/brand";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (req, content) => {
  let b_id = content.params.b_id;
  try {
    await mongoose.connect(mdb_url);
    let result = await Brand.deleteOne({ b_id: b_id });
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
};
