import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import {Link, NavLink} from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";
import { ShopContext } from '../context/Context';


const Navbar = () => {
    const [visible, setVisible] = useState(false);

    const {showSearch, setShowSearch, getCartCount} = useContext(ShopContext);
    
  return (
    <div className="fixed top-0 left-0 z-40 w-full bg-white/80 backdrop-blur shadow-sm px-4 sm:px-8 lg:px-16">
  <div className="flex justify-between items-center">
    {/* Logo */}
    <Link to="/">
      <img src={assets.logo} alt="logo" className="w-32" />
    </Link>

    {/* Nav Items */}
    <ul className="hidden sm:flex gap-6 text-sm font-semibold text-gray-700">
      {["home", "collection", "about", "contact"].map((item, idx) => (
        <NavLink
          key={idx}
          to={`/${item === "home" ? "" : item}`}
          className={({ isActive }) =>
            `relative group uppercase tracking-wide ${
              isActive ? "text-blue-600" : ""
            }`
          }
        >
          <span>{item}</span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
        </NavLink>
      ))}
    </ul>

    {/* Icons */}
    <div className="flex items-center gap-4 sm:gap-6 text-gray-600 text-xl">
      {/* Search */}
      <IoSearchOutline
        onClick={() => setShowSearch(!showSearch)}
        className="cursor-pointer hover:text-blue-600"
      />

      {/* Profile dropdown */}
      <div className="relative group">
        <IoPersonCircleOutline className="cursor-pointer hover:text-blue-600" />
        <div className="absolute right-0 mt-3 bg-white rounded-xl shadow-lg py-3 px-4 w-40 text-sm text-gray-600 hidden group-hover:block">
          <p className="hover:text-black cursor-pointer mb-2">My Profile</p>
          <p className="hover:text-black cursor-pointer mb-2">Orders</p>
          <p className="hover:text-black cursor-pointer">Log Out</p>
        </div>
      </div>

      {/* Cart */}
      <Link to="/cart" className="relative">
        <IoCartOutline className="hover:text-blue-600" />
        {getCartCount() > 0 && (
          <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center">
            {getCartCount()}
          </span>
        )}
      </Link>

      {/* Mobile Menu */}
      <IoMenu
        onClick={() => setVisible(true)}
        className="sm:hidden cursor-pointer hover:text-blue-600"
      />
    </div>
  </div>

  {/* Sidebar menu for small screen */}
  <div
    className={`fixed top-0 right-0 h-screen w-full z-50 bg-white shadow-2xl transform transition-transform duration-300 ${
      visible ? "translate-x-0" : "translate-x-full"
    }`}
  >
    <div className="p-5 space-y-6 text-gray-700 text-sm">
      <div
        onClick={() => setVisible(false)}
        className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-black"
      >
        <IoArrowBackOutline />
        <span>Close</span>
      </div>

      {["home", "collection", "about", "contact"].map((item, idx) => (
        <NavLink
          key={idx}
          to={`/${item === "home" ? "" : item}`}
          onClick={() => setVisible(false)}
          className={({ isActive }) =>
            `block uppercase font-semibold hover:text-blue-600 ${
              isActive ? "text-blue-600" : ""
            }`}
        >
          {item}
        </NavLink>
      ))}
    </div>
  </div>

  {/* Backdrop */}
  {visible && (
    <div
      onClick={() => setVisible(false)}
      className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 sm:hidden"
    />
  )}
</div>

  )
}

export default Navbar

{/* <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between font-medium bg-white shadow px-8 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
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
        <IoSearchOutline onClick={() => setShowSearch(!showSearch)} className='text-xl cursor-pointer text-gray-500 hover:text-gray-900' />
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
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>
        <IoMenu onClick={()=>setVisible(true)}  className='text-xl sm:hidden cursor-pointer'/>
    </div>
        {/* Sidebar menu for small screen */}
        // <div className={`fixed inset-0 z-40 bg-white transition-all duration-300 ease-in-out ${visible ? 'w-full' : 'w-0'} overflow-y-auto`}>
        //     <div className='flex flex-col text-gray-600 p-3 gap-4'>
        //         <div onClick={()=> setVisible(false)} className='flex items-center gap-4 cursor-pointer'>
        //             <IoArrowBackOutline />
        //             <p>Back</p>
        //         </div>
        //         <NavLink to={'/'} className='flex flex-col items-center gap-1' onClick={()=>setVisible(false)}>
        //             <p>HOME</p>
        //             <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        //         </NavLink>
        //         <NavLink to={'/collection'} className='flex flex-col items-center gap-1' onClick={()=>setVisible(false)}>
        //             <p>COLLECTION</p>
        //             <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        //         </NavLink>
        //         <NavLink to={'/about'} className='flex flex-col items-center gap-1' onClick={()=>setVisible(false)}>
        //             <p>ABOUT</p>
        //             <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        //         </NavLink>
        //         <NavLink to={'/contact'} className='flex flex-col items-center gap-1' onClick={()=>setVisible(false)}>
        //             <p>CONTACT</p>
        //             <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        //         </NavLink>
        //     </div>
        // </div>
    // </div> */}
