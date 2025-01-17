import React, { useContext, useEffect } from 'react'
import blogData from '../NewBlogData.js'
import { useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import image from '/public/ai-generated-8795619_1920.jpg'
import { Link } from 'react-router-dom';
import { BioContext } from '../contexts/ShowContext.jsx';
export default function BlogDetail() {
  const {isDark}=useContext(BioContext)
  const {id}=useParams()
  console.log(id);
  const blogDetailData=blogData.filter((item,index)=>{
    if(item.id==id){
      return item
    }
    
})

useEffect(()=>{
  window.scrollTo(0,0)
},[])
  
  
  return (
    <div className='w-full   mx-auto'>
     
{
  blogDetailData.map((item,index)=>{
    return (
    
     <main className={`w-full  min-h-[800px] ${isDark?"dark":''} `} data-aos="fade-up">
      <div key={item.id} className={`w-full h-[300px] bg-cover bg-center  flex justify-center items-center`}  style={{ backgroundImage: `url(${item.image})` }}>
      <h1 className='text-[25px] sm:text-[30px] p-3 md:text-3xl text-gray-200 font-bold text-center' data-aos="fade-up">{item.title}</h1>
      </div>
     
      <div className='max-w-[1420px] mx-auto flex justify-center items-center md:items-start flex-col md:flex-row ' data-aos="fade-up">
 <div className='w-full md:w-[50%] h-[400px] md:h-[600px]  flex justify-center  items-center 
 gap-2 md:gap-3 flex-col 
 p-3 '>
  <div className='w-[180px] h-[180px] rounded-[50%]  overflow-hidden shadowGive ' data-aos="fade-up"><img className='w-full h-full object-cover' src={image} alt="" /></div>
  <h1 className='text-[23px] font-bold text-rose-500' data-aos="fade-up">{item.author}</h1>
  <p className='text-[19px] sm:text-[23px] text-center font-bold w-full  sm:w-[90%]' data-aos="fade-up">{item.title}</p>
  <div className='flex justify-center items-center gap-5 text-rose-500' data-aos="fade-up">
  <Link to="#facebook" className="text-3xl bg-black  text-rose-500 w-[50px] h-[50px] flex justify-center items-center rounded-[50%] cursor-pointer "><i className="fa-brands fa-facebook-f"></i></Link>
  <Link to="#instagram" className="text-3xl bg-black  text-rose-500 w-[50px] h-[50px] flex justify-center items-center rounded-[50%] 
  cursor-pointer "><i className="fa-brands fa-square-instagram"></i></Link>
  <Link to="#linkdin"   className="text-3xl bg-black text-rose-500 w-[50px] h-[50px] flex justify-center items-center rounded-[50%]  
  cursor-pointer"><i className="fa-brands fa-linkedin-in"></i></Link>
  <Link to="#twitter" className="text-3xl text-rose-500 bg-black w-[50px] h-[50px] flex justify-center items-center 
  cursor-pointer rounded-[50%]"><i className="fa-brands fa-twitter"></i></Link></div>
 </div>

      <div key={item.id} className='max-w-[700px] bg-black m-3 min-h-[800px] p-5 rounded-lg'>
        
         <div data-aos="fade-up"><h1 className='text-xl text-rose-500 font-bold'>{item.publishedDate}</h1>
          
         <p data-aos="fade-up" className='text-[18px] font-semibold text-white text-justify leading-tight py-2'><Markdown>{item.content}</Markdown> </p>
         <div className='w-full h-[300px]  rounded-lg overflow-hidden' data-aos="fade-up"><img className='w-full h-full object-cover' src={item.image} alt="" /></div>
         <h1 className=' text-[20px] sm:text-[25px] lg:text-[30px]  font-bold text-rose-500 leading-tight py-2 text-justify' data-aos="fade-up">{item.title}</h1>
         <p className='text-[18px] text-white font-semibold text-justify leading-tight ' data-aos="fade-up">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore ipsam et accusamus velit nulla aut molestias soluta autem neque illo a ducimus reprehenderit magni alias aspernatur corrupti recusandae eaque repellendus sequi, at quidem porro earum voluptatem. Inventore optio quod quas consequatur, cum hic iste, delectus provident veniam aut animi sint?</p></div>
         <p className='text-[18px] text-white font-semibold text-justify leading-tight py-2 ' data-aos="fade-up"><Markdown>{item.content}</Markdown></p>
          </div>
          </div>
         </main>
    )


  })
}
</div>

        
     
   
  )
}
