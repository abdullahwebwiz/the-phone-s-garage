import style from "./searchbrands.module.css";
const SearchBrands = () => {
  return (
    <div className={style.main}>
      <input type="text" className={style.brandtext} placeholder="Search here.."/>
      <button className={style.brandbutton}>Search</button>
    </div>
  );
};
export default SearchBrands;
