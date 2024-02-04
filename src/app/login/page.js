"use client";
import Header from "@/components/header/header";
import LogIn from "@/components/login/login";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Page = () => {
  let router = useRouter();
  let userid = useSelector((data) => data.reducer1.userid);

  useEffect(() => {
    console.log(userid);
    if (userid) {
      router.push("/");
    }
  }, [userid]);
  
  return (
    <>
      {userid ? (
        ""
      ) : (
        <>
          <Header />
          <LogIn />
        </>
      )}
    </>
  );
};
export default Page;
