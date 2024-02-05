"use client";
import { useSelector } from "react-redux";
import style from "./dashboard.module.css";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import Header from "@/components/header/header";
import Link from "next/link";

const Page = () => {
  let [client, setclient] = useState(false);
  let [data, setdata] = useState(null);
  let [wishlist, setwishlist] = useState(null);
  let userid = useSelector((data) => data.reducer1.userid);
  useEffect(() => {
    setclient(true);
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await fetch("/api/getuser/" + userid, {
        cache: "no-store",
      });
      const result = await response.json();
      console.log(result.userdata);
      setdata(result.userdata);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  return (
    <>
      {client && data && userid ? (
        <>
          <Header />
          <div className={style.main}>
            <div className={style.title}>{"Welcome " + data.user_name}</div>
            <div className={style.userdetails}>
              <div className={style.details}>
                <div>{data.user_name}</div>
                <div>{data.user_phone}</div>
                <div>{data.user_city}</div>
                <div>{data.user_address}</div>
              </div>
              <Button
                variant="contained"
                endIcon={<ManageAccountsOutlinedIcon />}
              >
                Update
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          <Link href={"/"}>Go to home. And make an account first</Link>
        </>
      )}
    </>
  );
};

export default Page;
