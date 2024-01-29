"use client";
import Header from "@/components/header/header";
import SignUp from "@/components/signup/signup";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Page = () => {
  let router = useRouter();
  let userid = useSelector((data) => data.reducer1.userid);

  useEffect(() => {
    if (userid) {
      router.push("/");
    }
  }, [userid]);
  return <>{userid ? "" : <SignUp />}</>;
};
export default Page;
