"use client";
import { useRouter } from "next/navigation";
import ProductCard from "./productcard/productcard";
import style from "./productsection.module.css";
const ProductSection = ({ data, title, folder, sideimg, link }) => {
  let router = useRouter();
  return (
    <div
      style={{ cursor: "pointer" }}
      className={style.main}
      onClick={() => {
        router.push("/" + link);
      }}
    >
      <div className={style.title}>{title}</div>
      {data.map((data, index) => {
        return (
          <ProductCard
            key={index}
            title={data.title}
            img={!sideimg ? data.img : sideimg}
            price={data.price}
            discount={data.discount}
            folder={folder}
          />
        );
      })}
      <div className={style.more}>See More..</div>
    </div>
  );
};
export default ProductSection;
