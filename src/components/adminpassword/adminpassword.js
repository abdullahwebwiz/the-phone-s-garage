"use client";
import { useState } from "react";
import style from "./adminpassword.module.css";
import { updateAdminAuth } from "@/redux/slice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
const AdminPassword = () => {
  let [value, setvalue] = useState("");
  let dispatch = useDispatch();

  let submit = (e) => {
    e.preventDefault();
    if (value == process.env.MAIN_ADMIN_PASSWORD) {
      dispatch(updateAdminAuth());
      
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong password",
      });
    }
  };
  return (
    <div className={style.main}>
      <div className={style.form}>
        <div className={style.title}>Welcome! Dear Admin</div>
        <input
          type={"text"}
          className={style.input}
          placeholder="enter password"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        />
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
};
export default AdminPassword;
