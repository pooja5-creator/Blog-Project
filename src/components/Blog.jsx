import React, { useContext, useEffect, useState } from 'react'
import bannerImage from '/public/notebooks-569121_1280.jpg'
 import ImageData from '../SliderImage.jsx'
 export default function Blog() {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoSliding,setAutoSliding]=useState(true)
  const handleNext=()=>{
    setAutoSliding(false)
    setCurrentSlide((prev) => (prev === ImageData.length - 1 ? 0 : prev + 1));

 
  }
  const handlePrev=()=>{
    setAutoSliding(false)
    setCurrentSlide((prev) => (prev === 0 ? ImageData.length - 1 : prev - 1));
  
  
}

useEffect(()=>{
  if(isAutoSliding){
 const interval= setInterval(()=>{
      setCurrentSlide((prev) => (prev === ImageData.length - 1 ? 0 : prev + 1));
    },4000)
    return () => clearInterval(interval);
  }
},[isAutoSliding, currentSlide])


  
return (
     <div className="flex justify-center items-center flex-col">
      
          <div className='w-[100%] h-[500px] overflow-hidden relative'>

     <div className='w-full slides flex transition-transform duration-500 ease-in-out'   
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}   >
          {
         ImageData.map((item,index)=>
             (
              <div
              key={index}
              className="slide w-full h-[450px] flex-shrink-0  sm:h-[500px] relative"
              style={{ width: '100%' }}
            >
            
                 <img className=' w-full h-full opacity-1 object-cover
                 ' src={item.image} alt=""  /> 
                 
                 <h1 className='text-white  font-semibold text-[16px] p-3 sm:text-[18px]
                  lg:text-2xl w-[78%]  md:w-[60%]
                 absolute top-[20%] sm:top-[30%] left-[10%] md:left-[20%]'  >{item.content}</h1>
            
            </div>
               )
             )
          }
          </div>
         

       <span className='text-white absolute top-[35%] sm:top-[45%] right-4 md:right-[11%] text-xl md:text-3xl 
       cursor-pointer' onClick={handleNext}><i className="fa-solid fa-chevron-right"></i></span>
        <span className='text-white absolute top-[35%] sm:top-[45%] left-4 md:left-[11%] text-xl md:text-3xl cursor-pointer' onClick={handlePrev}><i className="fa-solid fa-chevron-left"></i></span></div>
     
      
      </div>
   )
}

    