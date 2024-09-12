import { Outlet } from "react-router-dom";
import Header from "./header/header";

function coffee() {
  return (
    <div id="page">
      <Header />
      <Outlet />
    </div>
  );
}

export default coffee;