import React, { useContext, useEffect, useState } from "react";
import singleImagedata from '../Image'
import { BioContext } from "../contexts/ShowContext";
export default function About() {
  const {isDark,setIsDark}=useContext(BioContext)
  const [show,setNotShow]=useState(false)
  const [show2,setNotShow2]=useState(false)
  const [show3,setNotShow3]=useState(false)

  const [imageQueue,setImgQueue]=useState(singleImagedata)
useEffect(()=>{
  window.scrollTo(0,0)
},[])


  return (
    <main className={`w-full ${isDark?'dark':''}`}>
         <div className="max-w-[1420px]  mx-auto pt-[50px]">
            <h1 className="text-[35px]  sm:text-4xl lg:text-5xl text-rose-500 font-bold text-center" data-aos="fade-up">
                      About Us
             </h1>
        <p className="text-center w-[100%]  md:w-[70%] mx-auto  md:pt-4 font-bold 
 text-[19px]  sm:text-[22px]  xl:text-[25px] p-3 " data-aos="fade-up">
          Hello there! I’m so glad you found your way to Our Blog a little
          corner of the internet where ideas come alive, stories unfold, and
          inspiration knows no bounds.
        </p>
        
        <h1 className="max-w-[1420px] lg:mx-auto mx-3 bg-black text-rose-500 rounded-lg
         text-center text-[18px] md:text-[20px] lg:text-[23px] 
            font-bold p-4 lg:p-10 pt-5 my-[50px]" data-aos="fade-up">"Our team is the backbone of everything we do. Each member brings unique talents, ideas, and passion to make our vision a reality. Here’s a closer look at the incredible people who make it all happen."</h1>

      

        <div className="w-[100%]  mx-auto   
          " data-aos="fade-up">

             <div className="wrapper max-w-[1420px] h-[300px] sm:h-[350px]  mx-auto 
           overflow-hidden  relative  ">
       { 
       imageQueue.map((item,index)=>(
     
       

                <div className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[130px] md:h-[130px]   overflow-hidden
                 rounded-[50%] scrollImage absolute left-[calc(80px*8)] sm:left-[calc(100px*8)] md:left-[calc(150px*8)] lg:left-[100%] "  style={{
                  animationDelay: `${30/8*(8-index)*-1}s`, 
                }} data-aos="fade-up" >
                <img
                  className=" w-full h-full object-cover "
                  src={item.img}
                  alt=""
                />
             </div>
            ))
      }
       { 
       imageQueue.map((item,index)=>(
              <div key={item.id} className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[130px] md:h-[130px] 
               overflow-hidden
                 rounded-[50%] scrollImage2 absolute right-[calc(80px*8)] sm:right-[calc(100px*8)]
                  md:right-[calc(150px*8)] lg:right-[100%] top-[35%] sm:top-[50%] "  style={{
                  animationDelay: `${30/8*(8-index)*-1}s`, 
                }} data-aos="fade-up">
                <img
                  className=" w-full h-full object-cover "
                  src={item.img}
                  alt=""
                />
             </div>
            ))
      }
</div>
</div>
  </div>

      <div className={`w-[90%] min-h-[500px] mx-auto ${isDark?'dark':'bg-gray-200'}   rounded-md pb-[50px] 
        flex justify-center items-center flex-col-reverse lg:flex-row  gap-5 md:gap-3`} data-aos="fade-up">
          <div className="w-full md:w-[100%]    lg:w-[50%]  flex justify-start items-start md:justify-center 
          md:items-center lg:justify-start lg:items-start mt-5 flex-col gap-5">
            <h1 className="font-bold text-[22px] sm:text-2xl">Our Mission –Inspiring Through Purpose and Passion</h1>
            <span className="text-[16px] sm:text-[18px] font-semibold text-white bg-black text-left md:text-center 
            lg:text-left
           rounded-lg w-full md:w-[80%] p-2 ">
              Our mission is to connect with readers through authentic stories, valuable insights,
               and engaging content.</span>

      <div className="w-[90%] lg:w-full  " data-aos="fade-up">   <div className="w-full md:w-[90%] m-3 lg:w-[80%] relative
       p-3  border-b-4 border-black ">  <p className="text-[17px] sm:text-[18px]
        text-rose-500 font-bold ">Our Vision for Blogger</p> 
         <span className={` cursor-pointer absolute right-2 top-2 ${show?'rotate-[180deg]':''}`} onClick={()=>setNotShow(!show)}><i className="fa-solid fa-chevron-down"></i></span>
       {show?  <p className=" text-[16px] font-bold text-black" >Our Mission To Give Information About Technology</p>:''}
         </div>
      <div className="w-full mt-5">   <div className="transition duration-500 w-full md:w-[90%] m-3 lg:w-[80%]   relative p-3 border-b-4 border-black">  <p className="text-[17px] sm:text-[18px] text-rose-500 font-bold">Our Team Focus To Growth</p> 
         <span className={`cursor-pointer absolute right-2 top-2 ${show2?'rotate-[180deg]':''}`} onClick={()=>setNotShow2(!show2)}><i className="fa-solid fa-chevron-down"></i></span>
       {show2?  <p className=" transition duration-1000  text-[16px] font-bold" >We focus on providing scalable and innovative solutions tailored to your business needs.</p>:''}
         </div>
         </div>
      <div className="w-full mt-5">   <div className="transition duration-500 w-full md:w-[90%] m-3 lg:w-[80%]   relative p-3 border-b-4
       border-black">  <p className="text-[17px] sm:text-[18px] text-rose-500 font-bold">Our Team Help</p> 
         <span className={`cursor-pointer absolute right-2 top-2 ${show3?'rotate-[180deg]':''}`} onClick={()=>setNotShow3(!show3)}><i className="fa-solid fa-chevron-down"></i></span>
       {show3?  <p className=" transition duration-1000  text-[16px] font-bold" >Ensuring all processes adhere to marketplace guidelines while maintaining authenticity.</p>:''}
         </div>
         </div>
        
          </div> 
         
          </div>
          <div className="shadowGive w-full sm:w-[80%] md:w-[500px] h-[250px] sm:h-[270px] lg:w-[400px] lg:h-[280px]  rounded-xl overflow-hidden" data-aos="fade-up">
            <img className="w-full h-full object-cover" src="https://revigrow.vercel.app/_next/image?url=%2Fteam1.jpg&w=640&q=75" alt="" />
          </div>
        </div>
      </main>
              
  );
}
