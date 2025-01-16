import React, { useContext } from 'react'
import { useState } from 'react'
import Blog from './Blog'
import '../App.css'
import HomePage from './HomePage'



export default function Home() {

  return (
    <main className={``}>
    <div className='w-full'>
  
    <Blog/>
   
    <HomePage/>
   
   </div>
   </main>
  )
}
