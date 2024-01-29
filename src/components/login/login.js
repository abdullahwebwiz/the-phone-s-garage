import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import style from "./login.module.css";
const LogIn = () => {
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
          />
          <dev className={style.butcon}>
            <Button variant="contained">Log In</Button>
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
