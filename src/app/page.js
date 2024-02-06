import React from "react";
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
import ReviewSection from "@/components/reviewsection/reviewsection";
import NewsLetter from "@/components/newsletter/newsletter";
import BlogSection from "@/components/blogsection/blogsection";
import Footer from "@/components/footer/footer";

export default function Home() {
  console.log(process.env);
  console.log(
    "DO NOT EDIT OR ADD ANYTHING HERE. IF YOU DID WEBSITE WILL NOT WORK PROPERLY!!"
  );

  return (
    <div>
      {" "}
      <Header />
      <Categories />
      <Banners />
      <Brands />
      <ProductSection
        title={"Accessories 🎧"}
        data={data1}
        folder={"accessories"}
        link={"accessories"}
      />
      <ProductSection
        title={"Batteries 🔋"}
        data={data2}
        folder={"batteries"}
        link={"spareparts"}
      />
      <Banner11 />
      <ProductSection
        title={"Tools 🛠️"}
        data={data3}
        folder={"tools"}
        link={"tools"}
      />
      <WhyUs />
      <ReviewSection />
      <NewsLetter />
      <BlogSection />
      <Footer />
    </div>
  );
}
