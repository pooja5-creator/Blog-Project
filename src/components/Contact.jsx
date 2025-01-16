import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BioContext } from '../contexts/ShowContext'
export default function Contact() {
  const {isDark,setIsDark}=useContext(BioContext)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [msg,setMsg]=useState('')
    const [error,setError]=useState({})
    const [data,setData]=useState([])
    
    const validation=(formData)=>{
      const errorData={}
      if(formData.name===''){
        errorData.name="Please Enter Name Here"
      }
      if(formData.msg===''){
        errorData.msg="Please Enter Message Here"
      }
      if(formData.email===''){
        errorData.email="Please Enter Email Here"
      }
      setError(errorData)
      return errorData
      
    }


const handleSubmit=(e)=>{
 e.preventDefault()
 const data={name:name,msg:msg,email:email}
 const validateResult=validation(data)
 if(Object.keys(validateResult).length) return
setData((pre)=>[...pre,{name:name,email:email,massage:msg}])
console.log(data);
setName('')
setEmail('')
setMsg('')
}
useEffect(()=>{
  window.scrollTo(0,0)
},[])


  return (
    <main className={`w-full min-h-[1000px] ${isDark?"dark":''}`} >
<div className='max-w-[1420px]  min-h-[100vh] mx-auto pt-[50px]' data-aos="fade-up"><h1 className='text-[35px] text-center sm:text-4xl lg:text-5xl
 font-bold text-rose-500'>Contact Us</h1>
<p className="text-center w-[100%]  md:w-[70%] mx-auto  md:pt-4 font-bold 
 text-[19px]  sm:text-[22px]  xl:text-[25px] p-3 ">We’d love to hear from you! Whether you have a question, feedback, or just 
    want to say hello, feel free to get in touch with us.</p>

    <div className='UsingGrid md:w-[700px] lg:w-[100%]   mx-auto gap-5 grid grid-cols-2 
    lg:grid-cols-4 place-items-center mt-[40px] sm:mt-[70px]' data-aos="fade-up">
       <div className='smallDiv bg-black   m-2 p-2 w-[180px] sm:w-[280px]
        lg:w-[220px]  h-[220px] rounded-[20px] overflow-hidden'>
          <div className='text-[40px] sm:text-5xl h-[40%]
          text-rose-500 pt-5 w-[100%]  flex justify-center items-center'>
        <i className="fa-solid fa-location-dot"></i></div>
      <div className='mt-3 text-center  mx-auto h-[50%]'>  <h1 className='uppercase font-bold text-[18px] text-white'>Our Main Office</h1>
        <p className='text-center text-gray-200 text-[14px] sm:text-[18px]'>2SoHo 94 Broadway St New York, NY 1001</p> </div></div>

        <div className='smallDiv bg-black  m-4 p-3  lg:w-[220px] h-[220px] w-[180px]  sm:w-[280px] rounded-[20px] overflow-hidden'><div className='text-[40px] sm:text-5xl h-[40%]
           text-rose-500 pt-5 w-[100%]  flex justify-center items-center'>
           <i className="fa-solid fa-phone"></i></div>
      <div className='mt-3 text-center  mx-auto h-[50%] '>  <h1 className='uppercase font-bold text-[18px] text-white'>phone number</h1>
        <p className='text-center text-gray-200 text-[14px] sm:text-[18px]'>234-9876-5400
        888-0123-4567 (Toll Free)</p> </div></div>


        <div className='smallDiv bg-black  m-4 p-3 w-[180px] sm:w-[280px] lg:w-[220px]  h-[220px] rounded-[20px] 
        overflow-hidden'><div className='text-[40px] sm:text-5xl h-[40%]
           text-rose-500 pt-5 w-[100%]  flex justify-center items-center'>
      <i className="fa-solid fa-tty"></i></div>
      <div className='mt-3 text-center  mx-auto h-[50%] '>  <h1 className='uppercase font-bold text-[18px] text-white'>Fax</h1>
        <p className='text-center text-gray-200 text-[14px] sm:text-[18px]'>1-234-567-8900</p> </div></div>

     


        <div className='smallDiv bg-black w-[180px] sm:w-[280px] lg:w-[220px]  
        m-4 p-3  h-[220px] rounded-[20px] overflow-hidden'><div className='text-[40px] sm:text-5xl h-[40%]
           text-rose-500 pt-5
         w-[100%]  flex justify-center items-center' >
           <i className="fa-solid fa-envelope"></i></div>
      <div className='mt-3 text-center  mx-auto h-[50%] '>  <h1 className='uppercase font-bold text-[18px] text-white'>Email</h1>
        <p className='text-center text-gray-200 text-[14px] sm:text-[18px]'>xyz@gmail.com</p> </div></div>

 </div>
      
    <div className=' w-[100%]  flex justify-center items-start flex-col lg:flex-row gap-[40px] 
    mt-[50px] p-[20px] md:p-[50px]  ' data-aos="fade-up">
    <form action="" className='w-full '>
  <div className='relative'> <label htmlFor="" className='font-semibold text-xl'>Name</label>
    <input className='bg-gray-200 w-full  py-2 px-3 outline-none focus:border-2 
    focus:border-rose-500 border-solid pt-3 rounded-xl text-black
     mt-2  ' type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)} />
     <p className='text-rose-500 font-semibold absolute -bottom-6 '>{error.name}</p>
     </div>  
  <div className=' relative pt-5'><label htmlFor="" className='font-semibold mt-2 text-xl'>Email</label>
    <input className='bg-gray-200 w-full text-black  py-2 px-3 outline-none  pt-3 rounded-xl mt-2 focus:border-2 focus:border-rose-500 border-solid ' type="email" name="email" value={email} 
    onChange={(e)=>setEmail(e.target.value)} />
    <p className='text-rose-500 font-semibold absolute -bottom-6'>{error.email}</p></div> 
  <div className='relative flex justify-start items-start flex-col pt-5'> <label htmlFor="" className='font-semibold text-xl'>Massage</label>
    <textarea  className='w-full outline-none focus:border-2 focus:border-rose-500 
    border-solid  mt-2 px-3 py-2 rounded-xl min-h-[100px]
     bg-gray-200 text-black' name="massage" value={msg} 
     onChange={(e)=>setMsg(e.target.value)}></textarea> 
     <p className='text-rose-500 font-semibold absolute -bottom-6'>{error.msg}</p></div>
    <button onClick={handleSubmit} className='w-full  bg-black hover:bg-rose-500 font-semibold 
    text-xl *:transition-all duration-700 ease-in-out hover:text-black text-white 
    outline-none border-none py-3 rounded-xl mt-10'>Submit</button>
   </form>

   <div>
    <h1 className='text-3xl md:text-4xl font-semibold pt-5' data-aos="fade-up">Get in touch</h1>
    <p className='pt-3 sm:pt-5 text-[17px] font-bold'> <i>Blogging show us our ability to thw world! Browse our upcoming virtual events, 
        register for free to sign up! </i></p>
    <p className='pt-5 leading-tight font-thin'>Etiam sit amet convallis erat – class aptent taciti sociosqu ad litora torquent per conubia! Maecenas gravida lacus. Lorem etiam sit amet convallis erat.</p>
    <div className="flex justify-start items-center gap-10 pt-10"> 
        <Link to='#facebook'><span className="text-rose-500  cursor-pointer text-[28px]
         md:text-[45px]"><i className="fa-brands fa-facebook-f"></i></span></Link>
       <Link to='#twitter'>  <span className="text-rose-500 cursor-pointer md:text-[45px] text-[28px]"><i className="fa-brands fa-twitter"></i></span></Link> 
        <Link to='#instagram'>  <span className="text-rose-500 cursor-pointer md:text-[45px] text-[28px]"><i className="fa-brands fa-square-instagram"></i></span></Link>
      <Link to='#linkdin'> <span className="text-rose-500 cursor-pointer md:text-[45px] text-[28px]"><i className="fa-brands fa-linkedin-in"></i></span></Link></div>
   </div>
    </div>
 
   </div>
    </main>
  )
}
