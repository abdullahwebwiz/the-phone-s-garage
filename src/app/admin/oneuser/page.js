"use client";
import { useState, useEffect } from "react";
import style from "../users/user.module.css";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import AdminPassword from "@/components/adminpassword/adminpassword";
const Page = () => {
  const [userData, setUserData] = useState(null);
  const [userid, setuserid] = useState("");
  let adminAuth = useSelector((data) => data.reducer1.adminAuth);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const fetchData = async () => {
    if (userid) {
      try {
        const response = await fetch("http://localhost:3000/api/oneuser/3995");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: " enter User ID",
      });
    }
  };

  return (
    <>
      {adminAuth ? (
        <div className={style.main}>
          <table className={style.table}>
            <thead className={style.thead}>
              <tr>
                <th>
                  <h1>Names</h1>
                </th>
                <th>
                  <h1>Phone No</h1>
                </th>
                <th>
                  <h1>City</h1>
                </th>
                <th>
                  <h1>Address</h1>
                </th>
              </tr>
            </thead>
            <tbody>
              {userData && userid ? (
                <tr key={userData._id} className={style.tr}>
                  <td className={style.td}>{userData.user_name}</td>
                  <td className={style.td}>{userData.user_phone}</td>
                  <td className={style.td}>{userData.user_city}</td>
                  <td className={style.td}>{userData.user_address}</td>
                </tr>
              ) : (
                ""
              )}
            </tbody>
          </table>
          <input
            type="text"
            value={userid}
            onChange={(e) => setuserid(e.target.value)}
          />
          <button onClick={fetchData}>Get data</button>
        </div>
      ) : (
        <AdminPassword />
      )}
    </>
  );
};

export default Page;
