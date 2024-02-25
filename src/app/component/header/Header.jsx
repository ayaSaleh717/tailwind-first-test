'use client'
import React, { useRef } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Header() {

  
 
  const element = useRef();
  const btnToggle= ()=>{
    if(element.current){
      element.current.classList.toggle('hidden')
    }
  }


  
  return (
    <nav className=" container  mx-auto p-8">
        <div className="flex item-center justify-between ">
          <div className="font-bold text-2xl">
            <span className="text-orange-500 underline">L</span>ogo
          </div>
          <div className=" hidden md:flex space-x-6 items-center" >
            <a href="#" className="text-slate-900 hover:text-orange-500">
              Portifolio
            </a>
            <a href="#" className="text-slate-900 hover:text-orange-500">
              About
            </a>
            <a href="#" className="text-slate-900 hover:text-orange-500">
              Contact
            </a>
            <a href="#" className="text-slate-900 hover:text-orange-500">
              Social
            </a>
            <a
              href="#"
              className="text-white hover:bg-slate-200 bg-orange-500 py-2 px-6 rounded-full"
            >
              Login
            </a>
          </div>
          <button className="md:hidden" onClick={ btnToggle}>
          <FontAwesomeIcon icon={faBars} className='w-5' />
          </button>

<div className="md:hidden">
          <div id='mobile-menu' ref={element} className='my-10 absolute flex hidden flex-col items-center space-y-4 font-bold left-6 right-6 drop-shadow-lg border-gray-300 bg-gray-50 py-8 px-8'>
          <a href="#" className="text-slate-900 hover:text-orange-500">
              Portifolio
            </a>
            <a href="#" className="text-slate-900 hover:text-orange-500">
              About
            </a>
            <a href="#" className="text-slate-900 hover:text-orange-500">
              Contact
            </a>
            <a href="#" className="text-slate-900 hover:text-orange-500">
              Social
            </a>
            <a
              href="#"
              className="text-white hover:bg-slate-200 bg-orange-500 py-2 px-6 rounded-full"
            >
              Login
            </a>
          </div></div>
        </div>
      </nav>
  )
        }

export default Header
