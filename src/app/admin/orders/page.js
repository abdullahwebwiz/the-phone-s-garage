"use client";
import { useState, useEffect } from "react";
import style from "./orders.module.css";
import { useSelector } from "react-redux";
import AdminPassword from "@/components/adminpassword/adminpassword";
import ProductList1 from "@/components/productlist1/productlist1";
import Swal from "sweetalert2";
const Page = () => {
  const [userData, setUserData] = useState([]);
  const [listinc, setlistinc] = useState(10);
  const [productlist, setproductlist] = useState(null);
  let adminAuth = useSelector((data) => data.reducer1.adminAuth);

  const showUpdateStatusDialog = (orderId) => {
    Swal.fire({
      title: "Update Status",
      input: "select",
      inputOptions: {
        pending: "Pending",
        onway: "On the way",
        delivered: "Delivered",
      },
      inputPlaceholder: "Select status",
      showCancelButton: true,
      confirmButtonText: "Update",
      cancelButtonText: "Cancel",
      inputValidator: (value) => {
        if (!value) {
          return "You need to select a status";
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const selectedStatus = result.value;
        console.log("Selected Status:", selectedStatus);

        // Fetch request
        fetch(
          `http://localhost:3000/api/updatestatus/${orderId}/${selectedStatus}`
        )
          .then((response) => {
            if (response.ok) {
              // If API call is successful, show success dialogue
              Swal.fire({
                title: "Success!",
                text: "Status updated successfully",
                icon: "success",
              });
            } else {
              // If API call fails, show error dialogue
              Swal.fire({
                title: "Error!",
                text: "Failed to update status",
                icon: "error",
              });
            }
          })
          .catch((error) => {
            // If there's a network error, show error dialogue
            Swal.fire({
              title: "Error!",
              text: "Network error occurred",
              icon: "error",
            });
            console.error("Error updating status:", error);
          });
      }
    });
  };

  useEffect(() => {
    console.log(productlist);
    console.log(userData);
  }, [productlist]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/orders/" + listinc
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (adminAuth) fetchData();
  }, [listinc, adminAuth]);

  return (
    <>
      {adminAuth ? (
        <>
          <div className={style.main}>
            <table className={style.table}>
              <thead className={style.thead}>
                <tr>
                  <th>
                    <h1>User ID</h1>
                  </th>
                  <th>
                    <h1>Time</h1>
                  </th>
                  <th>
                    <h1>Status</h1>
                  </th>
                  <th>
                    <h1>Products</h1>
                  </th>
                </tr>
              </thead>
              <tbody>
                {userData
                  ? userData.map((data) => {
                      return (
                        <tr key={data._id} className={style.tr}>
                          <td className={style.td}>{data.userId}</td>
                          <td className={style.td}>{data.time}</td>
                          <td
                            className={style.td}
                            onClick={() => showUpdateStatusDialog(data._id)}
                            style={{ cursor: "pointer" }}
                          >
                            {data.status}
                          </td>
                          <td
                            className={style.td}
                            style={{ cursor: "pointer" }}
                            onClick={() => setproductlist(data.products)}
                          >
                            {"Products"}
                          </td>
                          <td
                            style={{
                              backgroundColor: "red",
                              borderRadius: "50%",
                              cursor: "pointer",
                            }}
                            onClick={() => setproductlist(null)}
                          >
                            X
                          </td>
                        </tr>
                      );
                    })
                  : ""}
              </tbody>
            </table>
            <button onClick={() => setlistinc(listinc + 10)}>Load more</button>
          </div>
          {productlist ? <ProductList1 data={productlist} /> : ""}
        </>
      ) : (
        <AdminPassword />
      )}
    </>
  );
};

export default Page;
