import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/hotels-styles/header.css"
import { FaHamburger } from "react-icons/fa";

function Header() {
  const isLogin = localStorage.getItem("token");
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <section className="w-full ">
      <div className=" w-full fixed flex justify-between pt-[20px] pb-[4px] bg-slate-600">
        <div className=" flex ml-[30px]">
          <h2 className="text-[#f5b342] font-bold text-[30px]">Raw -</h2>
          <h2 className="text-[white] text-[30px]">The Explorers</h2>
        </div>
        <nav className="mt-[10px] max-[967px]:hidden">
          <NavLink to="/home" className=" text-white p-[10px] ml-[10px] mr-[10px] hover:border-[black] hover:bg-black list-none text-decoration-none ">Home</NavLink>
          <NavLink to="/flights" className=" text-white p-[10px] ml-[10px] mr-[10px] hover:border-[black] hover:bg-black list-none text-decoration-none ">Flights</NavLink>
          <NavLink to="/buses" className=" text-white p-[10px] ml-[10px] mr-[10px] hover:border-[black] hover:bg-black list-none text-decoration-none ">Buses</NavLink>
          <NavLink to="/hotels" className=" text-white p-[10px] ml-[10px] mr-[10px] hover:border-[black] hover:bg-black list-none text-decoration-none ">Hotels</NavLink>
        </nav>
        <nav className=" mr-[30px] mt-[10px] ">
          <div className="max-[967px]:hidden">
          <Link to="/signup" className=" text-white ml-[10px] mr-[10px] p-[10px] bg-red-700 border-none rounded-md ">Signup</Link>
          <Link to="/login" className=" text-white ml-[10px] mr-[10px] p-[10px] bg-red-700 border-none rounded-md ">Login</Link>
          {/* <button to="/login" className=" text-white ml-[10px] mr-[10px] p-[10px] bg-red-700 border-none rounded-md">Logout</button> */}
          </div>
          <button><FaHamburger className="hamburg text-[30px] mr-[30px] text-[#f5b342]"/></button>
        </nav>
      </div>
    </section>
  );
}

export default Header;
 