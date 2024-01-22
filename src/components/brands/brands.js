import BrandList from "./Brandlist/brandlist";
import style from "./brands.module.css";
import SearchBrands from "./searchbrands/searchbrands";
import Title from "./title/title";
const Brands = () => {
  return (
    <div className={style.main}>
      <Title />
      <SearchBrands />
      <BrandList />
    </div>
  );
};
export default Brands;
