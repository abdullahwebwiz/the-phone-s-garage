import Image from "next/image";
import style from "./productcard.module.css";
import Link from "next/link";
const ProductCard = ({ title, img, price, discount, folder, link }) => {
  let x = discount / 100;
  let y = x * price;
  let orignalPrice = y + price;
  return (
    <div className={style.main}>
      <Image
        src={"/" + folder + "/" + img + ".png"}
        width={250}
        height={250}
        className={style.productimg}
      />
      <div className={style.title}>{title}</div>
      <div className={style.price}>{"Rs " + price}</div>
      <div className={style.tags}>
        <div className={style.orignalprice}>{orignalPrice}</div>
        <div className={style.percentoff}>{discount + "% OFF"}</div>
      </div>
    </div>
  );
};
export default ProductCard;
