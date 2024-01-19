import Image from "next/image";
import style from "./logo.module.css";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href="/">
      <div className={style.main}>
        <Image
          src={"/main_logo.svg"}
          height={80}
          width={160}
          className={style.logo}
        />
      </div>
    </Link>
  );
};
export default Logo;
