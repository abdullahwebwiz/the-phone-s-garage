"use client";
import Header from "@/components/header/header";
import { useEffect, useState } from "react";
import style from "../../spareparts.module.css";
import ProductCard from "@/components/productsection/productcard/productcard";
import Link from "next/link";
const Page = ({ params }) => {
  let [data, setdata] = useState(null);
  useEffect(() => {
    getModelData();
    console.log(params);
  }, [params]);

  const getModelData = async () => {
    try {
      const response = await fetch(
        process.env.URL + "/api/getphonedetails/" + params.model,
        {
          cache: "no-store",
        }
      );
      const result = await response.json();
      console.log(result.data);
      setdata(result.data);
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
                  href={
                    "/spareparts/" +
                    params.company +
                    "/" +
                    params.model +
                    "/" +
                    data.p_id
                  }
                  key={data.p_id}
                  style={{ color: "black" }}
                >
                  <ProductCard
                    title={
                      data.company +
                      " | " +
                      data.model +
                      " | " +
                      data.type +
                      " | " +
                      data.name
                    }
                    img={data.img}
                    folder={"spareparts"}
                    price={data.price}
                    discount={parseInt(data.discount)}
                    key={data.p_id}
                  />
                </Link>
              );
            })
          : ""}
      </div>
    </>
  );
};
export default Page;
