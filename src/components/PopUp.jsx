import React, { useContext, useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import blogData from '../NewBlogData.js'
import '../index.css'
import { Link, useNavigate } from 'react-router-dom'
import { BioContext } from '../contexts/ShowContext'
export default function PopUp() {
  
  const id=blogData.length+1
 
  const navigate=useNavigate()
  
  const {isDark}=useContext(BioContext)
  const [markdown,setMarkdown]=useState('')
  
  const [title,setTitle]=useState('')
  const [slug,setSlug]=useState('')
  const [image,setImage]=useState('')
  const [PostData,setPostData]=useState([])
  const newPost={title,author:slug,content:markdown,image,id}

    const handleSubmit=(e)=>{
    e.preventDefault()
    setPostData((pre)=>[...pre,newPost])
   blogData.unshift(newPost)
    setTitle('')
    setSlug('')
    setMarkdown('')
    navigate('/blog')
    
   }
   useEffect(()=>{
     window.scrollTo(0,0)
   },[])
   
return (
    <main className={`w-full ${isDark?"dark":''}`} data-aos="fade-up">
<div className='w-[100%] mx-auto  flex justify-center items-center flex-col'>
  <div className='relative w-full  h-[400px] sm:h-[300px] md:h-[400px] lg:h-[500px] Image border-b-[4px]
   border-black  overflow-hidden'>
  <h1 className='text-[22px] sm:text-[34px] lg:text-5xl text-rose-500 font-bold absolute top-[35%] left-[5%] sm:left-[10%]'>Explore the Latest Post <span className='text-2xl sm:text-3xl lg:text-5xl text-yellow-400'><i className="fa-solid fa-face-smile-beam"></i></span>
   </h1>
  <p className='text-[15px] sm:text-[18px] lg:text-xl font-bold w-[95%] sm:w-[90%] lg:w-[70%]  text-white absolute top-[40%] left-[5%] sm:left-[10%] pt-[30px]'>Share your thoughts, ideas, and stories with the world! This is your space to create engaging posts, connect with readers, and inspire conversations. Whether it's about travel, food, technology, or personal growth, your words matter. Write, post, and make an impact!"</p>
  </div>
 


  </div>
  

      <div className='max-w-[1420px] min-h-[700px] sm:min-h-[1000px]  mx-auto pb-[20px] md:pb-[50px] px-4' data-aos="fade-up">
        <form action="" className='w-full   lg:w-[80%] mx-auto flex justify-center items-center 
        flex-col  gap-[30px] pt-[50px]'>
          <div className='w-full '><label htmlFor="" className='font-semibold text-rose-500 text-xl'>Title</label> <br />
          <input placeholder='Write Your Title...' className='w-full py-3 px-2 bg-black text-white rounded-xl
           focus:border-[4px] focus:border-rose-500 border-solid' type="text"
           name='title' value={title} onChange={(e)=>setTitle(e.target.value)} /></div>

          <div className='w-full'>
            <label htmlFor="" className='font-semibold text-rose-500 text-xl'>Author</label> <br />
            <input placeholder='Write Author Name...' className='w-full py-3 px-2 bg-black text-white  rounded-xl  focus:border-[4px] focus:border-rose-500 border-solid' type="text" name='slug' value={slug} onChange={(e)=>setSlug(e.target.value)}  />
          </div>
          <div className='w-full'>
            <label htmlFor="" className='font-semibold text-rose-500 text-xl'>Image</label> <br />
            <input placeholder='Enter Your Image...' className='w-full py-3 px-2 bg-black text-white  rounded-xl  focus:border-[4px] focus:border-rose-500 border-solid' type="text" name='slug' 
            value={image} onChange={(e)=>setImage(e.target.value)}  />
          </div>

          <div className='w-full' data-aos="fade-up" >
            <label htmlFor="" className='font-semibold text-rose-500 text-xl  
           '>Content</label> <br />
            <textarea className='w-full min-h-[150px] sm:min-h-[300px] py-3 px-2 bg-black text-white  rounded-xl  focus:border-[4px] focus:border-rose-500
            focus:border-solid' name="content" placeholder='Write Your Content here...'
             value={markdown} onChange={(e)=>setMarkdown(e.target.value)}></textarea>
          </div>
          <div className='w-full' data-aos="fade-up">
            <label htmlFor="" className='font-semibold text-rose-500 text-xl'>Preview</label> <br />
            <div className=' bg-gray-200 min-h-[150px] sm:min-h-[300px] 
            text-black rounded-xl px-3 py-3 '
            style={{
              // whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
            }}><Markdown className="">{markdown}</Markdown></div>
          </div>
          <div className='w-full' data-aos="fade-up" >
          <button onClick={handleSubmit} className=' bg-black px-6 py-2 rounded-md text-[20px] font-bold 
          text-rose-500 hover:bg-rose-500 hover:text-black transition-all duration-700 
          ease-in-out'>Save</button></div>
        </form>
      </div>
    </main>
  )
}
