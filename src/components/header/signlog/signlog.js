import style from "./signlog.module.css";
import { Button } from "@mui/material";
const SignLog = () => {
  return (
    <div className={style.main}>
      <Button
        variant="contained"
        style={{
          margin: "5px",
          backgroundColor: "white",
          color: "#25a1ff",
          fontWeight: "bold",
        }}
      >
        LOGIN
      </Button>
      <Button
        variant="outlined"
        style={{
          margin: "5px",
          color: "white",
          border: "1px solid white",
          fontWeight: "bold",
        }}
      >
        SIGNUP
      </Button>
    </div>
  );
};
export default SignLog;
