import React, { useState } from 'react'
import {assets} from '../assets/assets'
import {Link, NavLink} from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";


const Navbar = () => {
    const [visible, setVisible] = useState(false)
    
  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between font-medium bg-white shadow px-8 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    <Link to={"/"}>
        <img src={assets.logo} className='w-36' alt="logo" />
    </Link>

    <ul className='hidden sm:flex gap-5 test-sm text-gray-700'>
        <NavLink to={'/'} className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to={'/collection'} className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to={'/about'} className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to={'/contact'} className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
    </ul>

    <div className='flex items-center gap-6'>
        <IoSearchOutline className='text-xl cursor-pointer' />
        <div className="group relative">
            <IoPersonCircleOutline className='text-xl cursor-pointer' />
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p className='cursor-pointer hover:text-black'>Orders</p>
                    <p className='cursor-pointer hover:text-black'>Log Out</p>
                </div>
            </div>
        </div>
        <Link to={'/cart'} className='relative'>
            <IoCartOutline className='text-xl' />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
        </Link>
        <IoMenu onClick={()=>setVisible(true)}  className='text-xl sm:hidden cursor-pointer'/>
    </div>
        {/* Sidebar menu for small screen */}
        <div className={`fixed inset-0 z-40 bg-white transition-all duration-300 ease-in-out ${visible ? 'w-full' : 'w-0'} overflow-y-auto`}>
            <div className='flex flex-col text-gray-600 p-3 gap-4'>
                <div onClick={()=> setVisible(false)} className='flex items-center gap-4 cursor-pointer'>
                    <IoArrowBackOutline />
                    <p>Back</p>
                </div>
                <NavLink to={'/'} className='flex flex-col items-center gap-1' onClick={()=>setVisible(false)}>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to={'/collection'} className='flex flex-col items-center gap-1' onClick={()=>setVisible(false)}>
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to={'/about'} className='flex flex-col items-center gap-1' onClick={()=>setVisible(false)}>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to={'/contact'} className='flex flex-col items-center gap-1' onClick={()=>setVisible(false)}>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar
