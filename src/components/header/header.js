import style from "./header.module.css";
import Image from "next/image";
import Logo from "./logo/logo";
import SearchBar from "./searchbar/searchbar";
import SignLog from "./signlog/signlog";
import MenuIcon from "./menuicon/menuicon";
import SearchIcon from "./searchicon/searchicon";
const Header = () => {
  return (
    <div className={style.main}>
      <MenuIcon />
      <Logo />
      <SearchBar />
      <SignLog />
      <SearchIcon/>
    </div>
  );
};
export default Header;
