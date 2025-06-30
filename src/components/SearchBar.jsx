import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Context'
import { Search, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();   

    useEffect(()=>{
        if(location.pathname.includes('/collection')) {
            setVisible(true);
        }
    }, [location]);

  return visible && showSearch ? (
    <div className='pt-24 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] -mb-20'>
      <div className='bg-gray-50 text-center border-t border-b border-gray-400'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-4 py-2 mx-2 my-5 rounded-full w-3/4 sm:w-1/2'>
          <input value={search} onChange={(e)=> setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' />
          <Search className='text-gray-400' />
        </div>
        <X onClick={() => setShowSearch(false)} className='inline text-gray-400 cursor-pointer' />
      </div>
    </div>
    
  ) : null
}

export default SearchBar
