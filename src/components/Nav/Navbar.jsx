import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import {BiBell}  from 'react-icons/bi'
import {VscTriangleDown} from 'react-icons/vsc'
import "./Navbar.css"
function Navbar() {

  const[isscrolled,setIsscrolled]=useState(false);

  const NavBlack=()=>{
    if(window.scrollY>100){
      setIsscrolled(true)
    } else {
      setIsscrolled(false)
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll",NavBlack);
    return ()=> window.removeEventListener("scroll",NavBlack)
  },[])
  // window.onscroll=()=>{
  //   setIsscrolled(window.pageYOffset===0?false:true);
  //   return ()=> (window.onscroll=null)
  // }

  return (
    <>
    <div className={`navbar ${isscrolled && "scroll"}`}>
    <div className="container">
        <div className="left">
            
        <img src="https://pngimg.com/uploads/netflix/small/netflix_PNG32.png" alt="" />
       
            {/* <span>HomePage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My list</span>
            <span>Kids</span> */}
            
        </div>
        {/* <div className="right">
       <BiSearch className='icons'/>
       
       <BiBell className='icons'/>
      
       <img className="account" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" alt="" />
      <div className="profile">
          <VscTriangleDown className='icons'/>
          <div className="options">
              <span>Settings</span>
              <span>Logout</span>
          </div>
          </div>
         
        </div> */}
    </div>
    </div>
    </>
  )
}

export default Navbar