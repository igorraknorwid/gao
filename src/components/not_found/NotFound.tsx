import React, { FC } from "react";
import Logo from "../UI/logo/Logo";
import MyBox from "../UI/margins/MyBox";

const NotFound: FC = () => {
  React.useEffect(() => {
    setTimeout(() => {
      document.location.href = "https://gao-iota.vercel.app";
    }, 5000);
  }, []);
  return (
    <div style={{ padding: "0 20px" }}>
      <MyBox marginTop={20}>
        <Logo />
      </MyBox>
      <MyBox marginTop={20}>
        <div>This page is not found</div>
      </MyBox>
    </div>
  );
};

export default NotFound;
