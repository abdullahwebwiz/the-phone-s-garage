import style from "./header.module.css";
import Image from "next/image";
import Logo from "./logo/logo";
import SearchBar from "./searchbar/searchbar";
import SignLog from "./rightside/signlog/signlog";
import MenuIcon from "./menuicon/menuicon";
import SearchIcon from "./searchicon/searchicon";
import ProfileIcon from "./rightside/profileicon/profileicon";
import { useSelector } from "react-redux";
import RightSide from "./rightside/rightside";
const Header = () => {
  return (
    <div className={style.main}>
      <MenuIcon />
      <Logo />
      <SearchBar />
      {/* <ProfileIcon />
      <SignLog /> */}
      <RightSide />
      <SearchIcon />
    </div>
  );
};
export default Header;
