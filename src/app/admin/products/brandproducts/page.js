"use client";
import style from "./brandproducts.module.css";
import AdminPassword from "@/components/adminpassword/adminpassword";
import ProductPanel from "@/components/productpanel/productpanel";
import Link from "next/link";
import { useEffect, useState } from "react";
import AddProductForm from "@/components/addproductform/addproductform";
import {
  updateProductDescription,
  updateProductName,
  updateProductCompany,
  updateProductModel,
  updateProductType,
  updateProductPrice,
  updateProductDiscount,
  updateProductVideo,
  updateProductallow,
  updateProductId,
  updateProductEventType,
} from "@/redux/slice";
import { useDispatch, useSelector } from "react-redux";
const Page = () => {
  let [amount, setamount] = useState(10);
  let [products, setproducts] = useState(null);
  let [brandlist, setbrandlist] = useState(null);

  let adminAuth = useSelector((data) => data.reducer1.adminAuth);
  let product_data = useSelector((data) => data.reducer1.product_data);
  let dispatch = useDispatch();
  useEffect(() => {
    getData();
    brandList();
  }, [amount]);
  useEffect(() => {
    console.log(product_data);
  }, [product_data]);

  const getData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/brandproducts/getproducts/" + amount,
        { cache: "no-store" }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setproducts(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const brandList = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/brandproducts/brandslist/",
        { cache: "no-store" }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setbrandlist(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteProduct = async (p_id) => {
    if (p_id) {
      try {
        const response = await fetch(
          "http://localhost:3000/api/brandproducts/deleteproduct/" + p_id
        );
        const data = await response.json();
        console.log(data);
        if (data.msg == "success") {
          alert("Product Deleted Successfully");
        } else {
          alert("Something went wrong.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Something went wrong.");
      }
    }
  };

  const addProduct = async () => {
    if (
      product_data.name &&
      product_data.price &&
      product_data.description &&
      product_data.discount &&
      product_data.video &&
      product_data.company &&
      product_data.model &&
      product_data.type
    ) {
      try {
        const response = await fetch(
          "http://localhost:3000/api/brandproducts/addproduct",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product_data),
          }
        );
        const data = await response.json();
        console.log(data);
        if (data.msg == "success") {
          alert("New product successfully added");
          dispatch(updateProductallow());
        } else {
          alert("Something went wrong. try again later");
        }
      } catch (error) {
        alert("Something went wrong. try again later");
        console.error("Error fetching data:", error);
      }
    } else {
      alert("Plz fill all fields");
    }
  };

  const updateProduct = async () => {
    if (
      product_data.name &&
      product_data.price &&
      product_data.description &&
      product_data.discount &&
      product_data.video &&
      product_data.company &&
      product_data.model &&
      product_data.type
    ) {
      try {
        const response = await fetch(
          "http://localhost:3000/api/brandproducts/updateproduct",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product_data),
          }
        );
        const data = await response.json();
        console.log(data);
        if (data.msg == "success") {
          alert("product updated successfully");
          dispatch(updateProductallow());
          dispatch(updateProductEventType("add"));
        } else {
          alert("Something went wrong. try again later");
        }
      } catch (error) {
        alert("Something went wrong. try again later");
        console.error("Error fetching data:", error);
      }
    } else {
      alert("Plz fill all fields");
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
                  Company
                </td>
                <td
                  style={{
                    border: "1px solid red",
                    textAlign: "left",
                    padding: "8px",
                  }}
                >
                  Model
                </td>
                <td
                  style={{
                    border: "1px solid red",
                    textAlign: "left",
                    padding: "8px",
                  }}
                >
                  Type
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
                          {data.company}
                        </td>
                        <td
                          style={{
                            border: "1px solid red",
                            textAlign: "left",
                            padding: "8px",
                          }}
                        >
                          {data.model}
                        </td>
                        <td
                          style={{
                            border: "1px solid red",
                            textAlign: "left",
                            padding: "8px",
                          }}
                        >
                          {data.type}
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
                              dispatch(updateProductallow());
                              dispatch(updateProductName(data.name));
                              dispatch(updateProductPrice(data.price));
                              dispatch(updateProductDiscount(data.discount));
                              dispatch(
                                updateProductDescription(data.description)
                              );
                              dispatch(updateProductVideo(data.video));
                              dispatch(updateProductCompany(data.company));
                              dispatch(updateProductModel(data.model));
                              dispatch(updateProductType(data.type));
                              dispatch(updateProductId(data.p_id));
                              dispatch(updateProductEventType("update"));
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
          {product_data.allow ? (
            <AddProductForm
              submitForm={() => addProduct()}
              updateForm={() => {
                console.log("llllllooooooll");
                updateProduct();
              }}
              brandList={brandlist}
            />
          ) : (
            ""
          )}
          <button
            onClick={() => {
              setamount(amount + 5);
            }}
          >
            Load more
          </button>
          <button
            onClick={() => {
              dispatch(updateProductallow());
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
