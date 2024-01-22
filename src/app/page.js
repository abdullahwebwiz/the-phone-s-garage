import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import Categories from "@/components/categories/categories";
import Banners from "@/components/banners/banners";
import Brands from "@/components/brands/brands";
import ProductSection from "@/components/productsection/productsection";
import { data1, data2, data3 } from "@/data/data1";
import Banner11 from "@/components/banner11/banner11";
import WhyUs from "@/components/whyus/whyus";
console.log(data1);
export default function Home() {
  return (
    <div>
      {" "}
      <Header />
      <Categories />
      <Banners />
      <Brands />
      <ProductSection
        title={"Accessories"}
        data={data1}
        folder={"accessories"}
      />
      <ProductSection title={"Batteries"} data={data2} folder={"batteries"} />
      <Banner11 />
      <ProductSection title={"Tools"} data={data3} folder={"tools"} />
      <WhyUs/>
    </div>
  );
}
