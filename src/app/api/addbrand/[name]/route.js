import { mdb_url } from "@/lib/db";
import { Brand } from "@/lib/model/brand";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Randomstring from "randomstring";
export const GET = async (req, content) => {
  let name = content.params.name;
  console.log(name);
  try {
    await mongoose.connect(mdb_url);
    let users = new Brand({
      b_id:
      Randomstring.generate(20),
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
