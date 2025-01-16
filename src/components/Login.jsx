import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BioContext } from '../contexts/ShowContext'
export default function Login() {
  const {isDark}=useContext(BioContext)
const [showEye,NotShowEye]=useState(false)
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [errorData,setErrorData]=useState({})
 const [data,setData]=useState([])
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 const passwordRegex =
 /^(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const validation=(formaData)=>{
const errorFormData={}



if(!emailRegex.test(email)){
  errorFormData.email="Invalid Email"
}
if(formaData.email===''){
  errorFormData.email='Email is required'
}

if(formaData.password===''){
  errorFormData.password='Password is required'
}
else if(formaData.password.length<8){
    errorFormData.password='Password must include at least 8 characters'
   if(!passwordRegex.test(password)){
      errorFormData.password="Invalid Password"
    }
    
}


setErrorData(errorFormData)
return errorFormData

}


const handleSubmit=(e)=>{
 e.preventDefault()
 
  const data={email:email,password:password}
  const validationResult= validation(data)
   if(Object.keys(validationResult).length) return 
  
  setData((pre)=>[...pre,{email:email,password:password}])
   setEmail('')
  setPassword('')
 


}

useEffect(()=>{
  window.scrollTo(0,0)
},[])

  return (
    <main className={`w-full ${isDark?'dark':''}`} data-aos="fade-up">
         <div className='max-w-[1420px] mx-auto p-5  h-[750px] '>
           <form className={`w-full sm:max-w-[500px]  h-full mx-auto p-3 sm:p-10 rounded-2xl  flex justify-start
            items-center flex-col gap-5 ${isDark?'bg-zinc-800':'bg-gray-200'}`}>
           <h1 className='text-3xl font-bold text-rose-500'>Login</h1>
           <div className='w-full relative'>
            <label htmlFor="" className='text-[17px] sm:text-xl font-bold'>Email</label> <br />
            <input type="email" className='w-full px-3 py-4 rounded-lg mt-1 text-black' placeholder='Type your email'
           name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
           <p className='px-2 text-rose-500 font-semibold absolute top-[100%]'>{errorData.email}</p>
           </div>
           <div className='w-full relative mt-3'>
            <label htmlFor="" className='text-[17px] sm:text-xl font-bold'>Password</label> <br />
            <input type={`${showEye?'text':'password'}`} className='w-full px-3 py-4 text-black rounded-lg mt-1  ' 
           name='password' value={password} onChange={(e)=>setPassword(e.target.value)}
           placeholder='Type your password' />
           <span className='absolute right-3 bottom-4 text-xl cursor-pointer' onClick={()=>NotShowEye(!showEye)}>
           <i className={`fa-solid fa-eye${showEye?'':'-slash'}`}></i></span>
           <p className=' px-2 text-rose-500 font-semibold absolute top-[100%]'>{errorData.password}</p>
            <p className='absolute right-2 -bottom-10'>Forgot Password?</p>
           </div>
          
           <button className='w-full bg-black uppercase  hover:bg-rose-500 hover:text-black
            text-white py-3 mt-[60px] rounded-[20px] text-[17px] sm:text-xl font-bold transition-all
            duration-700 ease-in-out'
            onClick={handleSubmit}  >login</button>
           <p className='font-semibold text-[17px] sm:text-xl'>Or Sign Up Using</p>
           <div className='w-[300px]  flex justify-center items-center gap-5 mt-3'> <Link to="#facebook" className='text-4xl text-[rgb(5,74,140)] cursor-pointer'><i className="fa-brands fa-facebook"></i></Link>
           <Link to="#google" className='text-4xl text-white cursor-pointer'><i className="fa-brands fa-google"></i></Link>
           <Link to="#twitter" className='text-4xl text-[rgb(29,155,240)] cursor-pointer'><i className="fa-brands fa-twitter"></i></Link>
           </div>
           <p className='font-semibold text-[17px] sm:text-xl mt-4'>Or Sign Up Using</p>
           <p className='uppercase text-[17px] sm:text-xl font-bold cursor-pointer
            text-rose-500 hover:text-white'>sign up</p>
           </form>
         </div>

    </main>
  )
}
