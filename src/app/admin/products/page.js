"use client";
import { useState, useEffect } from "react";
import style from "./products.module.css";
import { useSelector } from "react-redux";
import AdminPassword from "@/components/adminpassword/adminpassword";
import ProductPanel from "@/components/productpanel/productpanel";

const Page = () => {
  let adminAuth = useSelector((data) => data.reducer1.adminAuth);

  return <>{adminAuth ? <ProductPanel /> : <AdminPassword />}</>;
};

export default Page;
