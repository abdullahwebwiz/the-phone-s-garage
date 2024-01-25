import Header from "@/components/header/header";
import style from "./blog.module.css";
const Page = async () => {
  return (
    <>
      <Header />
      <div className={style.main}>{"No Posts here"}</div>;
    </>
  );
};

export default Page;
