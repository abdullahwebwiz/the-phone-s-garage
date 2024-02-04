"use client";
import style from "./accessories.module.css";
import AdminPassword from "@/components/adminpassword/adminpassword";
import ProductPanel from "@/components/productpanel/productpanel";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Page = () => {
  let [amount, setamount] = useState(10);
  let [products, setproducts] = useState(null);
  let adminAuth = useSelector((data) => data.reducer1.adminAuth);

  const addProduct = async () => {
    const name = prompt("Enter product name:");
    const description = prompt("Enter product description:");
    const price = prompt("Enter product price:");
    const discount = prompt("Enter product discount:");
    const video = prompt("Enter product video link:");

    if (name && price && description && discount && video) {
      try {
        const response = await fetch(
          "http://localhost:3000/api/accessories/addproduct",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name,
              price: price,
              description: description,
              video: video,
              discount: discount,
            }),
          }
        );
        const data = await response.json();
        console.log(data);
        if (data.msg == "success") {
          alert("New product successfully added");
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
  useEffect(() => {
    getData();
  }, [amount]);
  const getData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/accessories/getproducts/" + amount,
        { cache: "no-store" }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setproducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteProduct = async (p_id) => {
    if (p_id) {
      try {
        const response = await fetch(
          "http://localhost:3000/api/accessories/deleteproduct/" + p_id
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

  const updateProduct = async (data) => {
    let confirm = window.confirm("are you sure you want to update the product");
    if (confirm) {
      const name = prompt("Enter product name:", data.name);
      const description = prompt(
        "Enter product description:",
        data.description
      );
      const price = prompt("Enter product price:", data.price);
      const discount = prompt("Enter product discount:", data.discount);
      const video = prompt("Enter product video link:", data.video);

      if (name && price && description && discount && video) {
        try {
          const response = await fetch(
            "http://localhost:3000/api/accessories/updateproduct",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                p_id: data.p_id,
                name: name,
                price: price,
                description: description,
                video: video,
                discount: discount,
              }),
            }
          );
          const result = await response.json();
          console.log(result);
          if (result.msg == "success") {
            alert("product successfully updated");
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
              setamount(amount + 5);
            }}
          >
            Load more
          </button>
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
