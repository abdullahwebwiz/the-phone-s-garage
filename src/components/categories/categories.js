import SubCategory from "./subcategory/subcategory";
import style from "./categories.module.css";
const Categories = () => {
  return (
    <div className={style.main}>
      <SubCategory img={"airpods"} name={"AirPods"} />
      <SubCategory img={"battery"} name={"Batteries"} />
      <SubCategory img={"charger"} name={"Chargers"} />
      <SubCategory img={"display"} name={"Display Screens"} />
      <SubCategory img={"internal"} name={"Internal Body"} />
      <SubCategory img={"tools"} name={"Tools"} />
    </div>
  );
};

export default Categories;
