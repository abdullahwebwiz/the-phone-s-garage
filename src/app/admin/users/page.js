"use client";
import { useState, useEffect } from "react";
import style from "./user.module.css";
import { useSelector } from "react-redux";
import AdminPassword from "@/components/adminpassword/adminpassword";
const Page = () => {
  const [userData, setUserData] = useState([]);
  const [listinc, setlistinc] = useState(10);
  let adminAuth = useSelector((data) => data.reducer1.adminAuth);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: listinc }),
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUserData(data.x);
        setlistnum(data.y);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (adminAuth) fetchData();
  }, [listinc, adminAuth]);

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
              {userData
                ? userData.map((data) => {
                    return (
                      <tr key={data._id} className={style.tr}>
                        <td className={style.td}>{data.user_name}</td>
                        <td className={style.td}>{data.user_phone}</td>
                        <td className={style.td}>{data.user_city}</td>
                        <td className={style.td}>{data.user_address}</td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          </table>
          <button onClick={() => setlistinc(listinc + 10)}>Load more</button>
        </div>
      ) : (
        <AdminPassword />
      )}
    </>
  );
};

export default Page;
