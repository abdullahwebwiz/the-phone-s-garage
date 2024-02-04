import Header from "@/components/header/header";
import style from "./tools.module.css";
import ProductCard from "@/components/productsection/productcard/productcard";
import Link from "next/link";
// title, img, price, discount,folder, link

const getProducts = async () => {
  console.log("he");
  let response = await fetch(
    "http://localhost:3000/api/tools/getproducts/100",
    { cache: "no-store" }
  );
  let result = await response.json();
  //   console.log(result);
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
              href={"/tools/" + data.p_id}
              style={{ color: "black" }}
            >
              <ProductCard
                title={data.name}
                img={"19"}
                folder={"tools"}
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
