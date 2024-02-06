"use client";
import { useSelector } from "react-redux";
import style from "./dashboard.module.css";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import Header from "@/components/header/header";
import Link from "next/link";
import Randomstring from "randomstring";

const Page = () => {
  let [client, setclient] = useState(false);
  let [data, setdata] = useState(null);
  let userid = useSelector((data) => data.reducer1.userid);

  useEffect(() => {
    setclient(true);
    getUserData();
    console.log(Randomstring.generate(20));
  }, []);

  const getUserData = async () => {
    try {
      const response = await fetch(process.env.URL + "/api/getuser/" + userid, {
        cache: "no-store",
      });
      const result = await response.json();
      console.log(result.userdata);
      setdata(result.userdata);
      setwishlist(result.userdata.wishlist);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const updateProduct = async () => {
    let confirm = window.confirm(
      "are you sure you want to update your information"
    );
    if (confirm && data) {
      const name = prompt("Enter New name:", data.user_name);
      const phone = prompt("Enter New Phone:", data.user_phone);
      const city = prompt("Enter New city:", data.user_city);
      const address = prompt("Enter New Address:", data.user_address);

      if (name && phone && city && address) {
        try {
          const response = await fetch(process.env.URL + "/api/updateuser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userid: data.user_id,
              name: name,
              phone: phone,
              city: city,
              address: address,
            }),
          });
          const result = await response.json();
          console.log(result);
          if (result.msg == "success") {
            alert("successfully updated");
          } else {
            alert("Something went wrong. try again later");
          }
        } catch (error) {
          alert("Something went wrong. try again later");
          console.error("Error fetching data:", error);
        }
      } else {
        alert("Plz fill all fields");
      }
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
                onClick={updateProduct}
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
