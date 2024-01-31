import Link from "next/link";
import style from "./productpanel.module.css";
const ProductPanel = () => {
  return (
    <div className={style.main}>
      <div className={style.con}>
        <Link href={"/admin/products/brandproducts"}>
          {" "}
          <div className={style.card} style={{ backgroundColor: "Red" }}>
            Brand Products
          </div>
        </Link>
        <Link href={"/admin/tools"}>
          {" "}
          <div className={style.card} style={{ backgroundColor: "Green" }}>
            Tools
          </div>
        </Link>
        <Link href={"/admin/accessories"}>
          {" "}
          <div className={style.card} style={{ backgroundColor: "Blue" }}>
            Accessories
          </div>
        </Link>
        <Link href={"/admin/addbrand"}>
          {" "}
          <div className={style.card} style={{ backgroundColor: "Brown" }}>
            Add brand
          </div>
        </Link>
        <Link href={"/admin/addmodel"}>
          {" "}
          <div className={style.card} style={{ backgroundColor: "gold" }}>
            Add Model
          </div>
        </Link>
      </div>
    </div>
  );
};
export default ProductPanel;
