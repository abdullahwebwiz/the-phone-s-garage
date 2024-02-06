"use client";
import style from "../spareparts.module.css";
import Header from "@/components/header/header";
import { useEffect, useState } from "react";
import Link from "next/link";
const Page = ({ params }) => {
  let [data, setdata] = useState(null);

  useEffect(() => {
    getModels();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const getModels = async () => {
    try {
      const response = await fetch(
        process.env.URL + "/api/allmodels/" + params.company,
        {
          cache: "no-store",
        }
      );
      const result = await response.json();
      console.log(result);
      setdata(result);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  return (
    <>
      <Header />
      <div className={style.main}>
        
        {data
          ? data.models.map((data, index) => {
              return (
                <Link
                  href={"/spareparts/" + params.company + "/" + data}
                  key={index}
                  style={{ color: "rgb(9, 208, 208)" }}
                >
                  <div className={style.one}>{data}</div>
                </Link>
              );
            })
          : ""}
      </div>
    </>
  );
};

export default Page;
