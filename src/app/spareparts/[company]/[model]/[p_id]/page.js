"use client";
import { useEffect, useState } from "react";
import Header from "@/components/header/header";
import style from "@/app/tools/tools.module.css";
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
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const [client, setclient] = useState(false);

  const getProduct = async () => {
    if (params) {
      try {
        const response = await fetch(
          process.env.URL + "/api/getsparepartdata/" + params.p_id,
          { cache: "no-store" }
        );
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
  };

  useEffect(() => {
    setclient(true);
    getProduct();
  }, []);

  return (
    <div>
      <Header />
      {data ? (
        <>
          <div className={style.maincon}>
            <div className={style.navshow}>
              {"Products > spareparts > "}
              <span style={{ wordSpacing: "0" }}>{data.name}</span>
            </div>
            <div className={style.imgtitle}>
              <div className={style.img}>
                <Image
                  src={"/tools/" + data.img + ".png"}
                  width={250}
                  height={250}
                />
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
                    endIcon={<WhatsAppIcon />}
                    style={{ backgroundColor: "	#25D366", fontWeight: "600" }}
                    onClick={() => {
                      if (client) {
                        window.open("https://www/web.whatsapp.com", "_blank");
                      }
                    }}
                  >
                    Buy Now
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
