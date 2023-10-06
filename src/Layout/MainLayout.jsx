import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";

const MainLayout = () => {
  return (
    <div
      className="h-screen"
      style={{ backgroundImage: "url('https://i.ibb.co/cL3bGkd/bgimage.jpg')" }}
    >
      <div className="hero-overlay bg-[#000000c0]">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
