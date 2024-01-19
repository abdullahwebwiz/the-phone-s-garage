import Image from "next/image";
import style from "./searchbar.module.css";
const SearchBar = () => {
  return (
    <div className={style.main}>
      <div className={style.search}>
        {" "}
        <input type="text" className={style.search_text} placeholder="Search By Keyword"/>
        <Image
          src={"/search_icon.svg"}
          width={30}
          height={30}
          className={style.search_img}
        />
      </div>
    </div>
  );
};

export default SearchBar;
