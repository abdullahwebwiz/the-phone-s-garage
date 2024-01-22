import Image from "next/image";
import style from "./whyusone.module.css";
const WhyUsOne = ({ img, title, subtext, link }) => {
  return (
    <div className={style.main}>
      <Image
        src={"/whyus/" + img + ".svg"}
        width={150}
        height={150}
        className={style.whyusimg}
      />
      <div className={style.textcon}>
        <div className={style.maintext}>{title}</div>
        <div className={style.subtext}>{subtext}</div>
        <div className={style.but}>Learn More</div>
      </div>
    </div>
  );
};
export default WhyUsOne;
