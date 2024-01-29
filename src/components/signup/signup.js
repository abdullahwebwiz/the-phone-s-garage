"use client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import style from "./signup.module.css";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { UseDispatch } from "react-redux";
import { updateuserid } from "@/redux/slice";
import { useRouter } from "next/navigation";
import {
  updatePassword,
  updateUserAddress,
  updateUserCity,
  updateUserName,
  updateUserPhone,
} from "@/redux/slice";
import { fetchApi } from "@/data/data3";
import { redirect } from "next/navigation";
const SignUp = () => {
  let router = useRouter();
  let dispatch = useDispatch();
  let user_data = useSelector((data) => data.reducer1.user_data);

  let SubmitForm = async (e) => {
    e.preventDefault();
    if (
      user_data.user_name &&
      user_data.user_phone &&
      user_data.user_city &&
      user_data.user_address &&
      user_data.password
    ) {
      const response = await fetchApi({
        body: user_data,
        route: "/api/adduser",
      });
      if (response.msg == "success") {
        dispatch(updateuserid(response.data.data.user_id));
        localStorage.setItem("userid", response.data.data.user_id);
        router.push("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Plz try again later",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields!",
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
            label="Full Name"
            placeholder="Enter Full Name.."
            style={{
              width: "80%",
              margin: "10px",
            }}
            value={user_data.user_name}
            onChange={(e) => dispatch(updateUserName(e.target.value))}
          />
          <TextField
            required
            id="outlined-required"
            label="Number"
            placeholder=" +912212345678"
            style={{
              width: "80%",
              margin: "10px",
            }}
            value={user_data.user_phone}
            onChange={(e) => dispatch(updateUserPhone(e.target.value))}
          />
          <TextField
            required
            id="outlined-required"
            label="City"
            placeholder="Enter City.."
            style={{
              width: "80%",
              margin: "10px",
            }}
            value={user_data.user_city}
            onChange={(e) => dispatch(updateUserCity(e.target.value))}
          />
          <TextField
            required
            id="outlined-required"
            label="Address"
            placeholder="Enter Address"
            style={{
              width: "80%",
              margin: "10px",
            }}
            value={user_data.user_address}
            onChange={(e) => dispatch(updateUserAddress(e.target.value))}
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
            value={user_data.password}
            onChange={(e) => dispatch(updatePassword(e.target.value))}
          />
          <dev className={style.butcon}>
            <Button variant="contained" onClick={SubmitForm}>
              Sign Up
            </Button>
          </dev>
        </div>
        <div className={style.morelinks}>
          <div className={style.noaccount}>
            Already have account? Click <span>Here</span>
          </div>
          <div className={style.noaccount}>
            <span> Back to Home</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
