"use client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import style from "./login.module.css";
import Swal from "sweetalert2";
import { useState } from "react";
import { updateuserid } from "@/redux/slice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
const LogIn = () => {
  let [phone, setphone] = useState("");
  let [password, setpassword] = useState("");
  let dispatch = useDispatch();
  let router = useRouter();
  let handleSubmit = async () => {
    if (phone && password) {
      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            phone: phone,
            password: password,
          }),
        });
        let result = await response.json();
        console.log(result);
        if (result.msg == "victory") {
          dispatch(updateuserid(result.data.user_id));
          localStorage.setItem("userid", result.data.user_id);
          router.push("/");
          Swal.fire({
            title: "Success",
            text: "Logged in successfully",
            icon: "success",
          });
        } else if (result.msg == "wrongpass") {
          Swal.fire({
            title: "Error!",
            text: "Wrong password",
            icon: "error",
          });
        } else if (result.msg == "nouser") {
          Swal.fire({
            title: "Error!",
            text: "no account Exist",
            icon: "error",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Something went wrong 1",
            icon: "error",
          });
        }
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong",
          icon: "error",
        });
      }
    } else {
      Swal.fire({
        title: "Error!",
        text: "Fill all fields",
        icon: "error",
      });
    }
  };

  return (
    <div className={style.main}>
      <div className={style.form}>
        <div className={style.title}>{"Login"}</div>
        <div className={style.subtitle}>
          {"Welcome back, Login to continue"}
        </div>
        <div className={style.textcon}>
          <TextField
            required
            id="outlined-required"
            label="Number"
            placeholder="Enter Phone Number.."
            style={{
              width: "80%",
              margin: "10px",
            }}
            value={phone}
            onChange={(e) => setphone(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Password"
            placeholder="Enter Phone Number.."
            type="password"
            style={{
              width: "80%",
              margin: "10px",
            }}
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <dev className={style.butcon}>
            <Button variant="contained" onClick={handleSubmit}>
              Log In
            </Button>
          </dev>
        </div>
        <div className={style.morelinks}>
          <div className={style.forgotpass}>
            Forgot Password? Click <span>Here</span>
          </div>
          <div className={style.noaccount}>
            Don't have account? Click <span>Here</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
