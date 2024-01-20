"use client";
import { useState } from "react";
import style from "./banners.module.css";
import Image from "next/image";
const Banners = () => {
  let [noanime, setnoanime] = useState(false);
  let [position, setposition] = useState(0);
  console.log(position);
  const changePosition = (x) => {
    if (x == "in") {
      if (position != -300) {
        setposition(position - 100);
      } else {
        setposition(0);
      }
    } else {
      if (position != 0) {
        setposition(position + 100);
      } else {
        setposition(-300);
      }
    }
  };
  return (
    <div className={style.main}>
      <div className={style.window}>
        <div className={style.arrowleft}>
          <Image
            src={"/arrowleft.png"}
            width={40}
            height={40}
            onClick={() => {
              setnoanime(true);
              changePosition("de");
            }}
          />
        </div>
        <div className={style.arrowright}>
          <Image
            src={"/arrowright.png"}
            width={40}
            height={40}
            onClick={() => {
              setnoanime(true);
              changePosition("in");
            }}
          />
        </div>

        <div
          className={`${style.bar} + " " ${style.x} + " " + ${
            noanime ? style.noanime : ""
          }`}
          style={{ marginLeft: noanime ? position + "%" : "" }}
        >
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
        <div
          className={`${style.bar} + " " ${style.y} + " " + ${
            noanime ? style.noanime : ""
          }`}
          style={{ marginLeft: noanime ? position + "%" : "" }}
        >
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
      </div>
    </div>
  );
};
export default Banners;
