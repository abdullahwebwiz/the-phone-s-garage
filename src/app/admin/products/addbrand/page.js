"use client";
import { useState, useEffect } from "react";
import style from "./addbrand.module.css";
import { useSelector } from "react-redux";
import AdminPassword from "@/components/adminpassword/adminpassword";
import ProductList1 from "@/components/productlist1/productlist1";
import ProductList2 from "@/components/productlist2/productlist2";
import Swal from "sweetalert2";
const Page = () => {
  let [brands, setbrands] = useState(null);
  let [models, setmodels] = useState(null);
  let [brandId, setbrandId] = useState("");
  let [brand, setbrand] = useState("");
  let adminAuth = useSelector((data) => data.reducer1.adminAuth);

  const deleteBrand = async (b_id) => {
    try {
      let response = await fetch(
        process.env.URL+"/api/deletebrand/" + b_id
      );
      let result = await response.json();
      if (result.msg == "success") {
        Swal.fire({
          title: "Success!",
          text: "Model Successfully successfully",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Oops",
          text: "Something went wrong",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Erroor: " + error);
      Swal.fire({
        title: "Oops",
        text: "Something went wrong",
        icon: "error",
      });
    }
  };

  // ==================================================
  const addModel = async (b_id) => {
    const { value: newValue } = await Swal.fire({
      title: "Enter Model Name:",
      input: "text",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "You need to enter something!";
        }
      },
    });

    if (newValue) {
      try {
        let response = await fetch(
          process.env.URL+"/api/addmodel/" + b_id + "/" + newValue
        );
        let result = await response.json();
        if (result.msg == "success") {
          Swal.fire({
            title: "Success!",
            text: "Model Successfully successfully",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Oops",
            text: "Something went wrong",
            icon: "error",
          });
        }
      } catch (error) {
        console.error("Erroor: " + error);
        Swal.fire({
          title: "Oops",
          text: "Something went wrong",
          icon: "error",
        });
      }
    }
  };

  const addBrand = async () => {
    if (brand) {
      try {
        let response = await fetch(
          process.env.URL+"/api/addbrand/" + brand
        );
        let result = await response.json();

        if (result.msg == "success") {
          Swal.fire({
            title: "Success!",
            text: "Status updated successfully",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Oops",
            text: "Something went wrong",
            icon: "error",
          });
        }
      } catch (error) {
        console.error("Erroor: " + error);
        Swal.fire({
          title: "Oops",
          text: "Something went wrong",
          icon: "error",
        });
      }
    }
  };

  const getBrands = async () => {
    try {
      let response = await fetch(process.env.URL+"/api/allbrands");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data);
      setbrands(data);
    } catch (error) {
      console.error("Erroor: " + error);
    }
  };

  useEffect(() => {
    getBrands();
  }, []);

  // ___________________________________________________________________

  return (
    <>
      {adminAuth ? (
        <div className={style.main}>
          <input
            type="text"
            value={brand}
            onChange={(e) => setbrand(e.target.value)}
          />
          <button onClick={addBrand}>Add Brand</button>
          {brands ? (
            <table
              style={{ borderCollapse: "collapse", border: "1px solid black" }}
            >
              <thead>
                <tr>
                  <td style={{ border: "1px solid black" }}>Brand ID</td>
                  <td style={{ border: "1px solid black" }}>Brand Names</td>
                  <td style={{ border: "1px solid black" }}>Models</td>
                  <td style={{ border: "1px solid black" }}>Delete</td>
                  <td style={{ border: "1px solid black" }}>Add model</td>
                </tr>
              </thead>
              <tbody>
                {brands.map((data) => {
                  return (
                    <tr key={data._id}>
                      <td style={{ border: "1px solid black" }}>{data.b_id}</td>
                      <td style={{ border: "1px solid black" }}>{data.name}</td>
                      <td style={{ border: "1px solid black" }}>
                        <button
                          onClick={() => {
                            setmodels(data.models);
                            setbrandId(data.b_id);
                          }}
                        >
                          Models
                        </button>
                      </td>
                      <td style={{ border: "1px solid black" }}>
                        <button onClick={() => deleteBrand(data.b_id)}>
                          Delete
                        </button>
                      </td>
                      <td style={{ border: "1px solid black" }}>
                        <button onClick={() => addModel(data.b_id)}>
                          Add model
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            ""
          )}
          {models && brandId ? (
            <ProductList2 data={models} brandId={brandId} />
          ) : (
            ""
          )}
        </div>
      ) : (
        <AdminPassword />
      )}
    </>
  );
};

export default Page;
