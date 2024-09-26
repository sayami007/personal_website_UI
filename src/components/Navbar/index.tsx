import NavHeader from "./components/NavHeader";
import NavMain from "./components/NavMain";
import NavFooter from "./components/NavFooter";
import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <main className="navbar">
      <NavHeader></NavHeader>
      <NavMain></NavMain>
      <NavFooter></NavFooter>
    </main>
  );
};

export default Navbar;
