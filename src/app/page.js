import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import Categories from "@/components/categories/categories";
import Banners from "@/components/banners/banners";
export default function Home() {
  return (
    <div>
      {" "}
      <Header />
      <Categories />
      <Banners />
    </div>
  );
}
