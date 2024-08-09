import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </div>
  );
};
export default Body;
