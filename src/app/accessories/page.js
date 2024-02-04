import Header from "@/components/header/header";
import style from "./tools.module.css";
import ProductCard from "@/components/productsection/productcard/productcard";
import Link from "next/link";

const getProducts = async () => {
  console.log("he");
  let response = await fetch(
    "http://localhost:3000/api/accessories/getproducts/100",
    { cache: "no-store" }
  );
  let result = await response.json();
  return result;
};

const Page = async () => {
  let data = await getProducts();

  return (
    <>
      <Header />
      <div className={style.main}>
        {data.map((data) => {
          return (
            <Link
              href={"/accessories/" + data.p_id}
              style={{ color: "black" }}
            >
              <ProductCard
                title={data.name}
                img={"6"}
                folder={"accessories"}
                price={data.price}
                discount={parseInt(data.discount)}
                key={data.p_id}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Page;
