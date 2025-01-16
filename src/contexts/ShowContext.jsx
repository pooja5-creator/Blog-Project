import { createContext, useEffect, useState } from "react";

 export const BioContext=createContext()
export const BioProvider=({children})=>{
  const [isDark,setIsDark]=useState(()=>{
    return JSON.parse(localStorage.getItem('isDark'||false))
  })

  useEffect(()=>{
    localStorage.setItem("isDark",JSON.stringify(isDark))
  },[isDark])
  return (
   <BioContext.Provider value={{isDark,setIsDark}}>
    {children}
   </BioContext.Provider>
  )
}