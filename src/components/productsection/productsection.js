import ProductCard from "./productcard/productcard";
import style from "./productsection.module.css";
const ProductSection = ({ data, title, folder, sideimg }) => {
  return (
    <div className={style.main}>
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
