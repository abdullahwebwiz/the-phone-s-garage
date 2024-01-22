import Image from "next/image";
import style from "./brandone.module.css";

const BrandOne = ({ img, color }) => {
  return (
    <div className={style.one} style={{ backgroundColor: color }}>
      <Image
        src={"/brands/" + img + ".svg"}
        width={80}
        height={80}
        className={style.oneimg}
      />
    </div>
  );
};

export default BrandOne;
