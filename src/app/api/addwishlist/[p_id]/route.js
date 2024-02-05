import { mdb_url } from "@/lib/db";
import { User } from "@/lib/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export const GET = async (req, content) => {
  let userid = content.params.data[0];
  let p_id = content.params.data[1];
  try {
    await mongoose.connect(mdb_url);
    let response = await User.findOneAndUpdate(
      { user_id: userid },
      { $push: { wishlist: p_id } }
    );
    console.log(response);
    return NextResponse.json({ msg: "success" });
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    return NextResponse.json({ msg: "error" });
  }
};
