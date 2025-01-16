import React, { useState, useContext,useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import blogData from '../NewBlogData.js'
import { BioContext } from "../contexts/ShowContext.jsx";

export default function Manage() {
  const {isDark,setIsDark}=useContext(BioContext)
const [show,setShow]=useState(false)
const navLinksArr=['All','Health','Fintech','Ai','Security','Apps','Work','enterprise']
const [startIndexLink,setStartIndexLink]=useState(0)
const EndLinkIndex=3

const navLinkItems=navLinksArr.slice(startIndexLink,startIndexLink+EndLinkIndex)


  const itemPerPage=15
  const [currentPage,setCurrentPage]=useState(1)
  const startIndex=(currentPage-1)*itemPerPage

  const currentItem=show?blogData:blogData.slice(0,startIndex+itemPerPage)
  // console.log(currentItem);
 

  const [overlay, setOverlay] = useState(null);
  const [Categories, SetCategories] = useState('All');

 
  const filterData = currentItem.filter((item) => {
    if(Categories==='All') return true
    if (Categories) {
      return item.category.toLowerCase() === Categories.toLowerCase();
    }
    return true;
  });
  const handleSave=()=>{
    if(!show&&currentItem.length<blogData.length){
      setCurrentPage(currentPage+1)
      setShow(false)
    }
   
    else{
      setShow(!show)
      if(show){
        setCurrentPage(1)
      }
   
    }
  }
  const handleShowLinksRight=()=>{
    if(startIndexLink+EndLinkIndex<navLinksArr.length){
    setStartIndexLink(startIndexLink+1)
    }
  }
  const handleShowLinksLeft=()=>{
    if(startIndexLink>0){
    setStartIndexLink(startIndexLink-1)

    }

  }
  
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  


  return (
    <main className={`${isDark?"dark":''}`}>
      <div className={`w-full min-h-screen}`}>
        <div className="max-w-[1500px] m-auto pt-10">
          <div className="max-w-[1420px] p-3 lg:p-5 text-[18px] lg:text-xl  z-2 font-bold
           hidden  md:flex justify-between items-center gap-6  m-auto uppercase" data-aos="fade-up">
         
         {
          navLinksArr.map((linkItem,linkIndex)=>(
            <NavLink key={linkIndex} to={`#${linkItem}`}  onClick={() => SetCategories(linkItem)}
             className={` ${Categories === linkItem ? "text-rose-500 font-bold" : ""}`}> {linkItem} </NavLink>
          ))
         }
         </div>


        <div className="max-w-[1500px] m-auto pt-10">
          <div className="max-w-[1420px] p-3 pl-4   text-xl z-2 font-bold
            flex md:hidden justify-start items-center gap-3 uppercase "   data-aos="fade-up">
          <div className="absolute top-3 left-1"><span className="text-xl font-bold " onClick={handleShowLinksLeft}><i className="fa-solid fa-chevron-left"></i></span></div>
          <div className="w-[260px]  flex justify-center items-center gap-3
          transition-transform duration-1000 ease-in-out " >
        {

          navLinkItems.map((linkItem,linkIndex)=>(
            <NavLink key={linkIndex} to={`#${linkItem}`}  onClick={() => SetCategories(linkItem)}
             className={` ${Categories === linkItem ? "text-rose-500 font-bold" : ""}`} >
                 {linkItem} </NavLink>
          ))
       
         }   </div>
         <div className="absolute left-[280px] top-3"><span className="text-xl font-bold " onClick={handleShowLinksRight}><i className="fa-solid fa-chevron-right"></i></span></div>
         </div>
       </div>
            
      
       
          <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  gap-5   p-2" data-aos="fade-up">
            {filterData.length > 0 ?
              (filterData.map((item, index) => 
               
                  ( <Link to={`/${item.id}`} className=" rounded-3xl bg-black  cursor-pointer
                   overflow-hidden h-[300px]" key={index}>
                   <div className="w-full h-[50%]  overflow-hidden"> <img className="w-full h-[100%] object-cover " src={item.image} alt="" /></div>  
                    <h1 className="text-[15px] text-white p-2 pt-4">{item.title}</h1>
                    <p className="pb-3 px-3 text-rose-500 font-semibold"> {item.author}</p>
                  </Link>
            ))): <p className="text-center text-xl font-bold text-rose-500">
                No data found for the selected category.
              </p>
              }
          </div>
          <div className="text-center pt-[50px] pb-[50px]" onClick={handleSave}>
            <button data-aos="fade-up" className="bg-rose-500 text-xl px-3 py-1 rounded-lg font-bold">{show?"Show Less..":"Show More.."}</button></div>
        </div>
      </div>
    </main>
  );
}
