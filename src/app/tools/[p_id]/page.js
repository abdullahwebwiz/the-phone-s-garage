"use client";
import { useEffect, useState } from "react";
import Header from "@/components/header/header";
import style from "../tools.module.css";
import Image from "next/image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Button } from "@mui/material";
import ProductSection from "@/components/productsection/productsection";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { copy } from "clipboard";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const [client, setclient] = useState(false);
  let userid = useSelector((data) => data.reducer1.userid);
  let productid = params.p_id;
  let router = useRouter();
  const getProduct = async (p_id) => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/tools/getproduct/" + params.p_id,
        { cache: "no-store" }
      );
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    setclient(true);
    getProduct();
  }, []);

  const handleWishlist = async () => {
    alert(productid);
    alert(userid);
    if (productid && userid) {
      try {
        const response = await fetch(
          "http://localhost:3000/api/testing/" + userid + "/" + productid,
          { cache: "no-store" }
        );
        const result = await response.json();
        console.log(result);
        if (result.msg == "success") {
          Swal.fire({
            title: "Success",
            text: "Product successfully added to wishlist",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "error",
            text: "Something went wrong",
            icon: "success",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Something went wrong",
          icon: "error",
        });
        console.error("Error fetching product:", error);
      }
    }
  };

  return (
    <div>
      <Header />
      {data ? (
        <>
          <div className={style.maincon}>
            <div className={style.navshow}>
              {"Products > tools > "}
              <span style={{ wordSpacing: "0" }}>{data.name}</span>
            </div>
            <div className={style.imgtitle}>
              <div className={style.img}>
                <Image src={"/tools/19.png"} width={250} height={250} />
              </div>
              <div className={style.details}>
                <div className={style.title}>{data.name}</div>
                <div className={style.prices}>{`Rs${
                  parseInt(data.price) -
                  (parseInt(data.price) / 100) * parseInt(data.discount)
                }  Save${data.discount}/-`}</div>
                <div className={style.buttons}>
                  <Button
                    variant="contained"
                    endIcon={<FavoriteBorderIcon />}
                    style={{ backgroundColor: "hotpink", fontWeight: "600" }}
                    onClick={handleWishlist}
                  >
                    WishList
                  </Button>
                  <Button
                    variant="contained"
                    endIcon={<ShareIcon />}
                    style={{
                      backgroundColor: "rgb(153, 255, 0)",
                      fontWeight: "600",
                    }}
                    onClick={() => {
                      if (client) {
                        copy(window.location.href);
                        Swal.fire({
                          title: "Success",
                          text: "Link copied to clipboard!",
                          icon: "success",
                        });
                      }
                    }}
                  >
                    Share
                  </Button>
                  <Link href={data ? data.video : ""} target={"_blank"}>
                    {" "}
                    <Button
                      variant="contained"
                      endIcon={<YouTubeIcon />}
                      style={{
                        backgroundColor: "rgb(245, 67, 67)",
                        fontWeight: "600",
                      }}
                    >
                      Watch Video
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={style.desp}>{data.description}</div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Page;
