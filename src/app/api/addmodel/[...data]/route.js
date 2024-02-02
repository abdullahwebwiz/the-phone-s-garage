import { mdb_url } from "@/lib/db";
import { Brand } from "@/lib/model/brand";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (req, content) => {
  console.log('lllllllllllllllllllooooooo');
  let data = content.params.data;
  let b_id = data[0];
  let model = data[1];
  console.log(content);
  try {
    await mongoose.connect(mdb_url);
    let result = await Brand.updateOne(
      { b_id: b_id },
      { $push: { models: model } }
    );
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
