import Image from "next/image";
import style from "./brandlist.module.css";
import BrandOne from "./brandone/brandone";
import Link from "next/link";
const BrandList = () => {
  return (
    <div className={style.main}>
      <Link href={"/spareparts"}>
        <BrandOne img={"1"} color={"#689EB8"} />
      </Link>
      <Link href={"/spareparts"}>
        <BrandOne img={"2"} color={"pink"} />
      </Link>
      <Link href={"/spareparts"}>
        <BrandOne img={"3"} color={"#8BC064"} />
      </Link>
      <Link href={"/spareparts"}>
        <BrandOne img={"4"} color={"#F2E3BA"} />
      </Link>
      <Link href={"/spareparts"}>
        <BrandOne img={"5"} color={"#007EE4"} />
      </Link>
      <Link href={"/spareparts"}>
        <BrandOne img={"6"} color={"#853B92"} />
      </Link>
    </div>
  );
};
export default BrandList;
