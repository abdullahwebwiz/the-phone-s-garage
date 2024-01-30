"use client";
import AdminPassword from "@/components/adminpassword/adminpassword";
import style from "./admin.module.css";
import { useSelector } from "react-redux";
import AdminPanel from "@/components/adminpanel/adminpanel";
const Page = () => {
  let adminAuth = useSelector((data) => data.reducer1.adminAuth);
  return <>{adminAuth ? <AdminPanel /> : <AdminPassword />}</>;
};
export default Page;
