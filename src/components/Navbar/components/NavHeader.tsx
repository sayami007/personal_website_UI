import React from "react";
import profile from "../../../assets/profile.png";

const NavHeader = () => {
  console.log(profile);
  return (
    <div className="navbar-content bg-blue-500 w-[100%]">
      <img src={profile} alt="displayImage"></img>
      <div className="relative bg-red-200">
        <span className="absolute text-2xl">Bibesh Manandhar</span>
        <span className="absolute ">Bibesh Manandhar</span>
      </div>
    </div>
  );
};

export default NavHeader;
