import style from "./menuicon.module.css";
import Image from "next/image";
const MenuIcon = () => {
  return (
    <div className={style.menu}>
      <Image src={"/menuicon.png"} height={40} width={40} />
    </div>
  );
};
export default MenuIcon;
