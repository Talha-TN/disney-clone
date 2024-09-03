import React from "react";
import logo from "../../assets/images/Disney.png";
import userImage from "../../assets/images/user.webp"
import menu from "./HeaderNavData";
import HeaderItem from "./HeaderItem";
const Header = () => {
  return (
    <div className="flex items-center gap-8 justify-between p-4">
      <div className="flex gap-8">
      <img src={logo} alt="logo" className="w-[82px] md:w-[115px] object-cover" />
      <div className="flex gap-8">
      {menu.map((data)=>(
       <HeaderItem name ={data.name} icon={data.icon} />
      ))}
      </div>
      </div>
      <img src={userImage} alt="" className="w-[50px] rounded-full cursor-pointer "/>
    </div>
  );
};

export default Header;
