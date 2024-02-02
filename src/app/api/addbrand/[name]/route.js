import { mdb_url } from "@/lib/db";
import { Brand } from "@/lib/model/brand";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (req, content) => {
  let name = content.params.name;
  console.log(name);
  try {
    await mongoose.connect(mdb_url);
    let users = new Brand({
      b_id:
        Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000,
      name: name,
      models: [],
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
};
