"use client";
import { useEffect } from "react";
import style from "./banners.module.css";
import Image from "next/image";
const Banners = () => {
  console.log(window.innerWidth);
  return (
    <div className={style.main}>
      <div className={style.window}>
        <div className={style.arrowleft}>
          <Image src={"/arrowleft.png"} width={40} height={40} />
        </div>
        <div className={style.arrowright}>
          <Image src={"/arrowright.png"} width={40} height={40} />
        </div>
        {window.innerWidth >= 800 ? (
          <div className={style.bar}>
            <Image
              src={"/banners/1.png"}
              width={1200}
              height={300}
              className={style.banner}
            />{" "}
            <Image
              src={"/banners/2.png"}
              width={1200}
              height={300}
              className={style.banner}
            />
            <Image
              src={"/banners/3.png"}
              width={1200}
              height={300}
              className={style.banner}
            />
            <Image
              src={"/banners/4.png"}
              width={1200}
              height={300}
              className={style.banner}
            />
          </div>
        ) : (
          <div className={style.bar}>
            <Image
              src={"/smallbanners/1.png"}
              width={500}
              height={300}
              className={style.banner}
            />{" "}
            <Image
              src={"/smallbanners/2.png"}
              width={500}
              height={300}
              className={style.banner}
            />
            <Image
              src={"/smallbanners/3.png"}
              width={500}
              height={300}
              className={style.banner}
            />
            <Image
              src={"/smallbanners/4.png"}
              width={500}
              height={300}
              className={style.banner}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default Banners;
