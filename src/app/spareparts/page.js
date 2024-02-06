"use client";
import style from "./spareparts.module.css";
import Header from "@/components/header/header";
import { useEffect, useState } from "react";
import Link from "next/link";
const Page = () => {
  let [data, setdata] = useState(null);

  useEffect(() => {
    getBrands();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const getBrands = async () => {
    try {
      const response = await fetch(process.env.URL + "/api/allbrands/", {
        cache: "no-store",
      });
      const result = await response.json();
      console.log(result);
      setdata(result);
      setwishlist(result.userdata.wishlist);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  return (
    <>
      <Header />
      <div className={style.main}>
        {data
          ? data.map((data) => {
              return (
                <Link
                  href={"/spareparts/" + data.name}
                  key={data.b_id}
                  style={{ color: "rgb(9, 208, 208)" }}
                >
                  <div className={style.one}>{data.name}</div>
                </Link>
              );
            })
          : ""}
      </div>
    </>
  );
};

export default Page;
