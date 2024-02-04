"use client";
import Image from "next/image";
import style from "./profileicon.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
const ProfileIcon = () => {
  return (
    <div className={style.main}>
      <Link href={"/dashboard"}>
        <Image src={"/profile.png"} width={50} height={50} />
      </Link>
    </div>
  );
};

export default ProfileIcon;
