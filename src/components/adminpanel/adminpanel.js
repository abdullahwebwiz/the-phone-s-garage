import Link from "next/link";
import style from "./adminpanel.module.css";
const AdminPanel = () => {
  return (
    <div className={style.main}>
      <div className={style.con}>
        <Link href={"/admin/products"}>
          {" "}
          <div className={style.card} style={{ backgroundColor: "Red" }}>
            Products
          </div>
        </Link>
        <Link href={"/admin/orders"}>
          {" "}
          <div className={style.card} style={{ backgroundColor: "green" }}>
            Orders
          </div>
        </Link>
        <Link href={"/admin/users"}>
          {" "}
          <div className={style.card} style={{ backgroundColor: "blue" }}>
            users
          </div>
        </Link>
        <Link href={"/admin/oneuser"}>
          {" "}
          <div className={style.card} style={{ backgroundColor: "brown" }}>
            One User
          </div>
        </Link>
        <Link href={"https://www.contentful.com/"} target="_blank">
          {" "}
          <div className={style.card} style={{ backgroundColor: "purple" }}>
            Posts
          </div>
        </Link>
      </div>
    </div>
  );
};
export default AdminPanel;
