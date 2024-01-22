import Image from "next/image";
import style from "./banner11.module.css";
const Banner11 = () => {
  return (
    <div className={style.main}>
      <Image
        src={"/banner11.png"}
        width={1200}
        height={300}
        className={style.banner11}
      />
    </div>
  );
};

export default Banner11;
