"use client";
import SignLog from "./signlog/signlog";
import ProfileIcon from "./profileicon/profileicon";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const RightSide = () => {
  let [client, setclient] = useState(false);
  useEffect(() => {
    setclient(true);
  }, []);
  let userid = useSelector((data) => data.reducer1.userid);

  if (userid && client) {
    return (
      <div>
        <ProfileIcon />
      </div>
    );
  } else {
    return <SignLog />;
  }
};

export default RightSide;
