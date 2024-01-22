import Image from "next/image";
import style from "./brandlist.module.css";
import BrandOne from "./brandone/brandone";
const BrandList = () => {
  return (
    <div className={style.main}>
      <BrandOne img={"1"} color={"#689EB8"} />
      <BrandOne img={"2"} color={"pink"} />
      <BrandOne img={"3"} color={"#8BC064"} />
      <BrandOne img={"4"} color={"#F2E3BA"} />
      <BrandOne img={"5"} color={"#007EE4"} />
      <BrandOne img={"6"} color={"#853B92"} />
    </div>
  );
};
export default BrandList;
