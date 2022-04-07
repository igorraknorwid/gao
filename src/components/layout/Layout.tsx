import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import { useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";
const Layout = () => {
  let location = useLocation();
  const arr = location.pathname.split("/");
  const in_progress = arr[arr.length - 1] === "in_progress";

  return (
    <>
      <Header isStepsIndecator={in_progress ? false : true} />
      <div className={isMobile ? "mobile_container" : "container"}>
        <Outlet />
      </div>
    </>
  );
};

export { Layout };
