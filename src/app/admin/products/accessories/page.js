"use client";
import style from "./accessories.module.css";
import AdminPassword from "@/components/adminpassword/adminpassword";
import ProductPanel from "@/components/productpanel/productpanel";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Page = () => {
  let [products, setproducts] = useState(null);
  let adminAuth = useSelector((data) => data.reducer1.adminAuth);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/accessories/getproducts/10"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data);
      setproducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
      {adminAuth ? (
        <div className={style.main}>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr style={{ backgroundColor: "#f2f2f2" }}>
                <td
                  style={{
                    border: "1px solid red",
                    textAlign: "left",
                    padding: "8px",
                  }}
                >
                  Product id
                </td>
                <td
                  style={{
                    border: "1px solid red",
                    textAlign: "left",
                    padding: "8px",
                  }}
                >
                  Name
                </td>
                <td
                  style={{
                    border: "1px solid red",
                    textAlign: "left",
                    padding: "8px",
                  }}
                >
                  Description
                </td>
                <td
                  style={{
                    border: "1px solid red",
                    textAlign: "left",
                    padding: "8px",
                  }}
                >
                  Price
                </td>
                <td
                  style={{
                    border: "1px solid red",
                    textAlign: "left",
                    padding: "8px",
                  }}
                >
                  Discount
                </td>
                <td
                  style={{
                    border: "1px solid red",
                    textAlign: "left",
                    padding: "8px",
                  }}
                >
                  Image
                </td>
                <td
                  style={{
                    border: "1px solid red",
                    textAlign: "left",
                    padding: "8px",
                  }}
                >
                  video
                </td>
                <td
                  style={{
                    border: "1px solid red",
                    textAlign: "left",
                    padding: "8px",
                  }}
                >
                  Update
                </td>
                <td
                  style={{
                    border: "1px solid red",
                    textAlign: "left",
                    padding: "8px",
                  }}
                >
                  Delete
                </td>
              </tr>
            </thead>
            <tbody>
              {products
                ? products.map((data) => {
                    return (
                      <tr>
                        <td
                          style={{
                            border: "1px solid red",
                            textAlign: "left",
                            padding: "8px",
                          }}
                        >
                          {data.p_id}
                        </td>
                        <td
                          style={{
                            border: "1px solid red",
                            textAlign: "left",
                            padding: "8px",
                          }}
                        >
                          {data.name}
                        </td>
                        <td
                          style={{
                            border: "1px solid red",
                            textAlign: "left",
                            padding: "8px",
                          }}
                        >
                          {data.description}
                        </td>
                        <td
                          style={{
                            border: "1px solid red",
                            textAlign: "left",
                            padding: "8px",
                          }}
                        >
                          {data.price}
                        </td>
                        <td
                          style={{
                            border: "1px solid red",
                            textAlign: "left",
                            padding: "8px",
                          }}
                        >
                          {data.discount}
                        </td>
                        <td
                          style={{
                            border: "1px solid red",
                            textAlign: "left",
                            padding: "8px",
                          }}
                        >
                          {data.img}
                        </td>
                        <td
                          style={{
                            border: "1px solid red",
                            textAlign: "left",
                            padding: "8px",
                          }}
                        >
                          <Link href={data.video} target="_blank">
                            {"watch"}
                          </Link>
                        </td>

                        <td
                          style={{
                            border: "1px solid red",
                            textAlign: "left",
                            padding: "8px",
                          }}
                        >
                          <button
                            onClick={() => {
                              updateProduct(data);
                            }}
                          >
                            Update
                          </button>
                        </td>
                        <td
                          style={{
                            border: "1px solid red",
                            textAlign: "left",
                            padding: "8px",
                          }}
                        >
                          <button
                            onClick={() => {
                              deleteProduct(data.p_id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          </table>
          <button
            onClick={() => {
              addProduct();
            }}
          >
            Add Product
          </button>
        </div>
      ) : (
        <AdminPassword />
      )}
    </>
  );
};

export default Page;
