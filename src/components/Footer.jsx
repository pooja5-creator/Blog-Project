import React from 'react'
import blogImage from '../assets/blog-pink-dotes.png'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    // data-aos="fade-up"
    <div className='w-full bg-black'>
 <div className="max-w-[1420px] mx-auto flex justify-center md:justify-start lg:justify-center
 items-start sm:item-center md:items-start  flex-wrap md:flex-nowrap gap-2 lg:gap-5" >
      <div className=" w-[230px] lg:w-[300px]  mt-[50px] flex justify-center  
      items-center flex-col "  data-aos="fade-up"> <h1 className="text-center font-bold text-[18px] lg:text-xl text-white -mt-2 sm:mt-0">Reading our Blog</h1>
      <div className="w-[70px] h-[70px] mt-2 cursor-pointer"><img className="w-full h-full" src={blogImage} alt="" /></div></div>

      <div className=" w-[230px] lg:w-[300px]  mt-[50px] "  data-aos="fade-up"> <h1 className="text-center font-bold text-[18px] lg:text-xl text-white">Quick Links</h1>
      <div className="flex justify-center items-center flex-col pt-3 ">
        <Link to='/' className="text-rose-500 hover:text-white  text-[15px] lg:text-[18px] font-semibold">Home</Link>
      <Link to='/about' className="text-rose-500 hover:text-white text-[15px] lg:text-[18px] font-semibold">About</Link>
      <Link to='/contact' className="text-rose-500 hover:text-white text-[15px] lg:text-[18px] font-semibold">Contact</Link>
      <Link to='/create' className="text-rose-500 hover:text-white text-[15px] lg:text-[18px] font-semibold">Create New</Link>
      <Link to='/blog' className="text-rose-500 hover:text-white text-[15px] lg:text-[18px] font-semibold">Blog</Link>
     
      </div></div>
     
      <div className="w-[230px] lg:w-[300px]   pt-[50px] text-center"  data-aos="fade-up">
        <h1 className="text-center font-bold text-[18px] lg:text-xl text-white pb-2">Contact Information
        </h1>
        <h1 className="text-rose-500 text-[14px] lg:text-[16px]"><span className="text-white cursor-pointer hover:text-rose-500"><i className="fa-solid fa-envelope"></i></span> contact@yourwebsite.com</h1>
        <h1 className="text-rose-500 text-[14px] lg:text-[16px]"><span className="text-white cursor-pointer  hover:text-rose-500"><i className="fa-solid fa-phone"></i></span> +1 234 567 890</h1>
        <h1 className="text-rose-500 text-[14px] lg:text-[16px]"><span className="text-white cursor-pointer  hover:text-rose-500"><i className="fa-solid fa-address-book"></i></span> Your Company Address</h1>
      </div>
      <div className="w-[230px] lg:w-[300px] pt-[50px] "  data-aos="fade-up">
        <h1 className="text-center font-bold text-[18px] lg:text-xl text-white">Connect with Us</h1>
        <div className="flex justify-center items-center gap-3 pt-5"> <Link to="#facebook" className="text-rose-500 hover:text-white cursor-pointer text-2xl"><i className="fa-brands fa-facebook-f"></i></Link>
          <Link to="#twitter" className="text-rose-500  hover:text-white  cursor-pointer text-2xl"><i className="fa-brands fa-twitter"></i></Link>
          <Link to="#instagram" className="text-rose-500  hover:text-white  cursor-pointer text-2xl"><i className="fa-brands fa-square-instagram"></i></Link></div>
      </div>
     
     </div>
     <div className="text-white  sm:pl-2 text-center bg-black mt-3 text-[18px] 
     font-semibold pb-[50px] pt-[50px]"  ><h1 className='text-[18px]'>Copyright Reserved Here</h1></div>
     

    </div>
  )
}
