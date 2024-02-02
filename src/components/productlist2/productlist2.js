"use client";
import Swal from "sweetalert2";
import style from "./productlist2.module.css";
const ProductList2 = ({ data, brandId }) => {
  const deletemodel = async (model) => {
    try {
      let response = await fetch(
        "http://localhost:3000/api/deletemodel/" + brandId + "/" + model
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


  return (
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
              Model
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
          {data
            ? data.map((data) => {
                return (
                  <tr>
                    <td
                      style={{
                        border: "1px solid red",
                        textAlign: "left",
                        padding: "8px",
                      }}
                    >
                      {data}
                    </td>
                    <td
                      style={{
                        border: "1px solid red",
                        textAlign: "left",
                        padding: "8px",
                      }}
                    >
                      <button onClick={() => deletemodel(data)}>Delete</button>
                    </td>
                  </tr>
                );
              })
            : ""}
        </tbody>
      </table>
    </div>
  );
};
export default ProductList2;
