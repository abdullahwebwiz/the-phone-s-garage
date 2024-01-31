"use client";
import { useState, useEffect } from "react";
import style from "./addbrand.module.css";
import { useSelector } from "react-redux";
import AdminPassword from "@/components/adminpassword/adminpassword";
const Page = () => {
  let adminAuth = useSelector((data) => data.reducer1.adminAuth);

  return <>{adminAuth ? "" : <AdminPassword />}</>;
};

export default Page;
