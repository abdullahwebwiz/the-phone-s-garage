import style from "./searchicon.module.css";
import Image from "next/image";
const SearchIcon = () => {
  return (
    <div>
      <div className={style.main}>
        <Image src={"/search_icon_white.svg"} width={40} height={40} className={style.search_img}/>
      </div>
    </div>
  );
};
export default SearchIcon;
