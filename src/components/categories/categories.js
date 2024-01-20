import SubCategory from "./subcategory/subcategory";
import style from "./categories.module.css";
const Categories = () => {
  return (
    <div className={style.main}>
      <SubCategory img={"airpods"} name={"Accessories"} bn={"1"} />
      <SubCategory img={"battery"} name={"Batteries"} bn={"2"} />
      <SubCategory img={"charger"} name={"Chargers"} bn={"3"} />
      <SubCategory img={"display"} name={"Display Screens"} bn={"4"} />
      <SubCategory img={"internal"} name={"Internal Body"} bn={"5"} />
      <SubCategory img={"tools"} name={"Tools"} bn={"6"} />
    </div>
  );
};

export default Categories;
