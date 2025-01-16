import React, { useContext, useEffect } from "react";
import blogLogo from "../assets/blog_logo-removebg-preview (1).png";
import { useState } from "react";
import HomePage from "./HomePage";
import Manage from "./Manage";
import { Link, NavLink } from "react-router-dom";

import PopUp from "./PopUp";
import blogImage from '../assets/blog-pink-dotes.png'
import { BioContext } from "../contexts/ShowContext";

export default function Header() {
  const {isDark,setIsDark}=useContext(BioContext)
  const [isSideBar, setSideBar] = useState(false);
  const [isScroll,setIsScroll]=useState(false)
 
  useEffect(()=>{
   const handleScroll=()=>{
    if(window.scrollY>0){
      setIsScroll(true)
    }else{
      setIsScroll(false)
    }
   }
   window.addEventListener('scroll',handleScroll)
   return ()=>{
    window.removeEventListener('scroll',handleScroll)
   }
  },[])

 
  
  return (
    <header className={` w-[100%] mx-auto bg-black ${isScroll?'opacity-80':'opacity-100'}
     sticky top-0 z-50 transition-all duration-1000 ease-in-out`}>
      <div className="max-w-[1420px]  py-3 m-auto flex justify-between items-center p-4">
        <Link to="/" className="logo w-[70px] sm:w-24  overflow-hidden">
          <img className="w-full h-full" src={blogImage} alt="" />
        </Link>
        <div className="allLink hidden md:flex text-[18px] font-bold 
          justify-center items-center gap-6 ">
          {" "}
          <NavLink  to="/" className=' text-gray-200'>
            HOME
          </NavLink>
          <NavLink  to="/blog" className=' text-gray-200'>
            BLOG
          </NavLink>
          <NavLink  to="/about" className=' text-gray-200'>
            ABOUT
          </NavLink>
          <NavLink  to="/contact" className=' text-gray-200'>
            CONTACT
          </NavLink>
          <NavLink  to="/create" className=' text-gray-200'>
        CREATE NEW
          
          </NavLink>
          
          <NavLink to='login' className=' text-gray-200 uppercase'>Login</NavLink>
        </div>
       
         <div className="hidden md:block cursor-pointer text-gray-200 bg-rose-500  px-3 
         py-[2px] rounded-md text-2xl" onClick={()=>setIsDark(!isDark)}><i className={`fa-regular fa-${isDark?'moon':'sun'}`}></i></div>

        <div 
          className=" menu text-red-100 bg-rose-500 px-3 py-[2px] rounded-md text-[23px] 
          md:hidden cursor-pointer" onClick={() => setSideBar(true)}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
       
      </div>
      <div
        className={` fixed right-0 top-10  w-[300px]  bg-black opacity-90 text-rose-500
           z-50 flex justify-start items-start flex-col gap-2 text-[20px] rounded-lg overflow-hidden
     font-bold transform ${isSideBar ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 ease-in-out`}
      >
        <div className="self-end cursor-pointer bg-white m-5 text-2xl px-3 py-1 rounded-lg hover:bg-rose-500 hover:text-black
          transition-all duration-1000 ease-in-out  "
          onClick={() => setSideBar(false)}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <NavLink to="/" className="hover:text-white hover:bg-rose-500 w-full px-5 py-2
        transition-all duration-1000 ease-in-out">HOME</NavLink>
        <NavLink to="/blog"  className="hover:text-white hover:bg-rose-500 w-full px-5 py-2
        transition-all duration-1000 ease-in-out">BlOG</NavLink>
        <NavLink to="/about"  className="hover:text-white hover:bg-rose-500 w-full px-5 py-2
        transition-all duration-1000 ease-in-out">ABOUT</NavLink>
        <NavLink to="/contact"  className="hover:text-white hover:bg-rose-500 w-full px-5 py-2
        transition-all duration-1000 ease-in-out">CONTACT</NavLink>
        <NavLink to="/create"  className="hover:text-white hover:bg-rose-500 w-full px-5 py-2
        transition-all duration-1000 ease-in-out">CREATE NEW</NavLink>
        <NavLink to="/login"  className="hover:text-white hover:bg-rose-500 w-full px-5 py-2
        transition-all duration-1000 ease-in-out">LOGIN</NavLink>
      </div>
     
    </header>
  );
}
