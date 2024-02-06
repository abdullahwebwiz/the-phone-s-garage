import SubCategory from "./subcategory/subcategory";
import style from "./categories.module.css";
import Link from "next/link";
const Categories = () => {
  return (
    <div className={style.main}>
      <Link href={"/accessories"}>
        {" "}
        <SubCategory img={"airpods"} name={"Accessories"} bn={"1"} />
      </Link>
      <Link href={"/spareparts"}>
        {" "}
        <SubCategory img={"battery"} name={"Batteries"} bn={"2"} />
      </Link>
      <Link href={"/"}></Link>
      <Link href={"/spareparts"}>
        {" "}
        <SubCategory img={"charger"} name={"Chargers"} bn={"3"} />
      </Link>
      <Link href={"/spareparts"}>
        {" "}
        <SubCategory img={"display"} name={"Display Screens"} bn={"4"} />
      </Link>
      <Link href={"/spartparts"}>
        {" "}
        <SubCategory img={"internal"} name={"Internal Body"} bn={"5"} />
      </Link>
      <Link href={"/tools"}>
        {" "}
        <SubCategory img={"tools"} name={"Tools"} bn={"6"} />
      </Link>
    </div>
  );
};

export default Categories;
