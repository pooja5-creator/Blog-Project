import React, { useState } from "react";
import blogData from '../NewBlogData.js'
import  { useContext } from 'react';
import { useEffect } from "react";
import PeopleData from '../Contributes.js'
import '../index.css'
import { Link, useParams } from "react-router-dom";
import blogImage from '/public/blog-pink-dotes.png'
import { BioContext } from "../contexts/ShowContext.jsx";


export default function HomePage() {
  const {isDark,setIsDark}=useContext(BioContext)
  
  const {id}=useParams()
 const FirstBlogData=blogData.slice(0,1)
 const SecondBlogData=blogData.slice(1,2)
 const ThirdBlogData=blogData.slice(2,3)
  

useEffect(()=>{
  window.scrollTo(0,0)
},[])


  return (
    <main className={`w-full h-full ${isDark?'dark':''}`}>
     <div className={`max-w-[1420px] mx-auto pt-[10px] sm:pt-[80px] `} >
    <div className=" text-center " ><h1 className="font-bold text-2xl md:text-3xl xl:text-4xl
     text-rose-500" data-aos="fade-up" >Empowering Connections Through Social Tech</h1>
    <p className="text-[16px] p-3 xl:text-[18px] font-semibold w-[100%] mx-auto pt-5 text-justify md:text-center" data-aos="fade-up">"In today’s digital age, social technology has revolutionized the way 
      we connect, communicate, and collaborate. From social media platforms bridging global 
      communities to innovative tools enhancing workplace collaboration, technology has become 
      an integral part of our social fabric. It enables us to share ideas, build relationships, 
      and solve problems like never before. As we embrace these advancements, it's important to
       understand the impact they have on our lives, both online and offline. This blog explores
        the latest trends, tools, and transformations in the world of social technology."</p></div>  
       
      <div className="w-full p-5 flex justify-center items-center flex-col gap-[50px]
        sm:gap-[80px] mt-[80px] xl:mt-[120px]">
     {
     FirstBlogData.map((item,index)=>{
      return(
       <div key={item.id} className=" max-w-[1420px] flex justify-center gap-8 items-center lg:items-start flex-col lg:flex-row">
         <div className=" shadowGive w-[100%] sm:w-[500px] lg:w-[50%] h-[200px] sm:h-[260px] lg:h-[300px] xl:h-[350px] overflow-hidden object-contain rounded-lg " data-aos="fade-up">
           <img className="w-full h-full  object-cover" src={item.image} alt="" />
         </div>
 
         <div className="w-full  md:p-5 lg:w-[50%]  " data-aos="fade-up">
         <h1 className="text-[18px]  sm:text-2xl md:text-3xl font-bold  text-justify tracking-tight">{item.title}</h1>
         <p className="text-[14px] text-justify sm:text-[18px] pt-3  font-semibold leading-snug tracking-tight
           text-rose-500">{item.content}</p>
   <Link to={`/${item.id}`}> <button className="bg-black px-5 sm:px-[30px] py-2 font-semibold text-white mt-5 rounded-md
          hover:bg-rose-500 hover:text-black text-[14px] sm:text-[18px]">Read More...</button></Link>  
        </div>
        </div>
         )})}
     {
     SecondBlogData.map((item,index)=>{
      return(
        
        <div key={item.id} className=" max-w-[1420px] flex justify-center gap-8 items-center 
        lg:items-start flex-col lg:flex-row-reverse ">

<div className="shadowGive w-full sm:w-[500px] lg:w-[50%] h-[200px] sm:h-[260px] lg:h-[300px] xl:h-[350px] rounded-lg overflow-hidden " data-aos="fade-up">
  <img className="w-full h-full object-cover" src={item.image} alt="" />
</div>

<div className="w-full md:p-5 lg:w-[50%] " data-aos="fade-up">
<h1 className="text-[18px] sm:text-2xl md:text-3xl font-bold text-justify tracking-tight">{item.title}</h1>
<p className=" text-[14px] sm:text-[18px] leading-snug pt-3 text-rose-500 font-semibold 
text-justify tracking-tight">{item.content}</p>

<Link to={`/${item.id}`}><button className="bg-black px-5 sm:px-[30px] font-semibold py-2
 text-white mt-5 rounded-md text-[14px] sm:text-[18px]
 hover:bg-rose-500 hover:text-black">Read More...</button></Link>
</div>
</div>
)})}
     {
     ThirdBlogData.map((item,index)=>{
      return(
      
       <div key={item.id} className=" max-w-[1420px] flex justify-center gap-8 items-center lg:items-start
        flex-col lg:flex-row">
 
         <div className=" shadowGive w-[100%] sm:w-[500px] lg:w-[50%] h-[200px] sm:h-[260px] lg:h-[300px] xl:h-[350px] overflow-hidden object-contain rounded-lg " data-aos="fade-up">
           <img className="w-full h-full  object-cover" src={item.image} alt="" />
         </div>
 
         <div className="w-full  md:p-5 lg:w-[50%]  " data-aos="fade-up">
         <h1 className="text-[18px]  sm:text-2xl md:text-3xl font-bold  text-justify tracking-tight">{item.title}</h1>
         <p className="text-[14px] text-justify sm:text-[18px] pt-3  font-semibold leading-snug tracking-tight
           text-rose-500">{item.content}</p>
   <Link to={`${item.id}`}> <button className="bg-black px-5 sm:px-[30px] py-2 font-semibold text-white mt-5 rounded-md
          hover:bg-rose-500 hover:text-black text-[14px] sm:text-[18px]">Read More...</button></Link>  
        </div>
        </div>
         )
     })
    }
     <Link to='/blog'><button data-aos="fade-up" className="bg-black text-rose-500 
mt-6 sm:mt-4 lg:mt-10 px-[20px] sm:px-[50px] py-2 sm:py-4 rounded-lg text-[16px] sm:text-[20px] font-bold border-2 border-rose-500
 hover:text-black hover:bg-white hover:border-black">Explore All Blogs!</button></Link>
     </div>

      
 
     <div className=" w-full xl:mt-[100px] mt-[20px] sm:mt-[50px] pb-[50px] sm:pb-[80px] px-3" data-aos="fade-up"> 
      <h1 className=" text-2xl sm:text-4xl text-rose-500 font-bold text-center pt-5 mb-[50px]">Meet Our Amazing Contributors!</h1>
      <div className="contributecontainer max-w-[1420px] mx-auto grid grid-cols-2 
      md:grid-cols-4 gap-5  place-items-center">
       {
          PeopleData.map((item,index)=>{
            return (
            <div key={item.id} className="w-[80%] sm:w-full shadowGive container bg-gray-200 hover:text-white 
            flex justify-center items-center flex-col rounded-xl p-3 xl:w-[280px]">
             <div className="w-[150px] xl:w-[200px] h-[150px] xl:h-[200px] overflow-hidden
              rounded-[50%] mt-3">
               <img className="w-full h-full object-cover" src={item.image} alt="" />
             </div>
             <div><h1 className="text-center text-[18px] lg:text-xl uppercase text-rose-500 pt-6 font-bold"> {item.name}</h1>
             <p className=" font-semibold text-[14px] lg:text-[17px] lg:mt-2 text-center text-black">{item.des}</p></div>
             <div className="flex justify-center items-center gap-3  mt-1"> <Link to='#facebook'>
             <span className=" hover:cursor-pointer text-xl hover:text-rose-500 "><i className="fa-brands fa-facebook-f"></i></span></Link>
             <Link to='#twitter'>  <span className=" hover:text-rose-500 cursor-pointer
              text-xl  "><i className="fa-brands fa-twitter"></i></span></Link>
             <Link to='#instagram'> <span className=" hover:text-rose-500 cursor-pointer 
             text-xl  "><i className="fa-brands fa-square-instagram"></i></span></Link></div>
        
   
           </div>
            )
          })
        }
      </div>
     </div>
    
      </div>
      </main>
  );
}
