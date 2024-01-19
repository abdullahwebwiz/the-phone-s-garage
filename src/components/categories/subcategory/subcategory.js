import Image from "next/image";
import style from "./subcategory.module.css";
const SubCategory = ({ img,name }) => {
  return (
    <div className={style.main}>
      <div className={style.imgcon}>
        {" "}
        <Image
          src={"/blob.svg"}
          width={130}
          height={130}
          className={style.blob}
        />
        <Image
          src={"/" + img + ".png"}
          width={100}
          height={100}
          className={style.icon}
        />
      </div>
      <div className={style.text}>{name}</div>
    </div>
  );
};

export default SubCategory;
