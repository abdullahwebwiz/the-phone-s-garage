import style from "./signlog.module.css";
import { Button } from "@mui/material";
import Link from "next/link";
const SignLog = () => {
  return (
    <div className={style.main}>
      <Link href={"/login"}>
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
      </Link>
      <Link href={"/signup"}>
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
      </Link>
    </div>
  );
};
export default SignLog;
