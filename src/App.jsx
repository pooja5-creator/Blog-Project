import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import './App.css'
import { useContext, useEffect } from 'react';

import Footer from './components/Footer';


import 'aos/dist/aos.css'
import AOS from 'aos';
import { BioProvider } from './contexts/ShowContext';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 100,    
      once: true,     
    });
  }, []);
  

  window.addEventListener('mousemove',(e)=>{
    const posX=e.clientX
   
    const posY=e.clientY
    
  document.querySelector('.cursor-dot').style.left=`${posX}px`
  document.querySelector('.cursor-dot').style.top=`${posY}px`
  document.querySelector('.cursor-outline').style.left=`${posX}px`
  document.querySelector('.cursor-outline').style.top=`${posY}px`

  document.querySelector('.cursor-outline').animate({
    left:`${posX}px`,
    top:`${posY}px`
  },{duration:3000,fill:'forwards'})
  
  })


  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }, []);

  return (
      <>
      <div className='cursor-dot'></div>
     <div className='cursor-outline'></div>


    
  <div>
    <BioProvider>
    <Header style={{ position: 'fixed', top: 0}}></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </BioProvider>
  </div>
</>
  )
}

export default App
