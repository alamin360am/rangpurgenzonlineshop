import React, {  useContext, useEffect, useState } from 'react'
import useTitle from '../hooks/useTitle'
import SectionHeading from '../components/SectionHeading'
import { ShopContext } from '../context/Context';
import { MdFilterAlt, MdFilterAltOff } from "react-icons/md";
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';


const Collection = () => {
    useTitle("Collection");
    const [showFilter, setShowFilter] = useState(false);
    const {products, search, showSearch} = useContext(ShopContext);
    const [filterProduct, setFilterProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState("relevant")

    const toggleCategory = (e) => {
      if(category.includes(e.target.value)) {
        setCategory(prev=> prev.filter(item => item !== e.target.value));
      } else {
        setCategory(prev => [...prev, e.target.value]);
      }
    }

    const toggleSubCategory = (e) => {
      if(subCategory.includes(e.target.value)) {
        setSubCategory(prev=> prev.filter(item => item !== e.target.value));
      } else {
        setSubCategory(prev => [...prev, e.target.value]);
      }
    }

    const applyFilter = () => {
      let productCopy = products.slice();

      if(showSearch && search) {
        productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
      }

      if(category.length > 0) {
        productCopy = productCopy.filter(item => category.includes(item.category))
      }

      if(subCategory.length > 0) {
        productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
      }

      setFilterProduct(productCopy);
    }

    const sortProduct = () => {
      let filterProductCopy = filterProduct.slice();

      switch (sortType) {
        case "low-high":
          setFilterProduct(filterProductCopy.sort((a,b) => (a.price - b.price)));
          break;

        case "high-low":
          setFilterProduct(filterProductCopy.sort((a,b) => (b.price - a.price)));
          break;
      
        default:
          applyFilter();
          break;
      }
    }

    useEffect(()=>{
      applyFilter();
    }, [category, subCategory, search, showSearch]);

    useEffect(()=>{
      sortProduct();
    }, [sortType])

  return (
    <div className="bg-gray-50 min-h-screen px-4 sm:px-8">
      <SectionHeading text1={"Our"} text2={"Collection"} subtitle={"Explore our premium collection"} />

      <div className="flex flex-col lg:flex-row gap-6 mt-10">
        {/* Sidebar Filter */}
        <aside className="lg:w-1/4 w-full bg-white rounded-xl shadow p-5">
          <button onClick={() => setShowFilter(!showFilter)} className="w-full flex justify-between items-center cursor-pointer">
            <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
            <div className="text-blue-600 hover:text-blue-800">
              {showFilter ? <MdFilterAlt size={22} /> : <MdFilterAltOff size={22} />}
            </div>
          </button>

          {showFilter && (
            <>
              {/* Category */}
              <div className="my-6">
                <h4 className="text-sm font-semibold mb-2 text-gray-700">Category</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  {["Men", "Women", "Kids"].map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" value={cat} onChange={toggleCategory} className="accent-blue-600" />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Subcategory */}
              <div>
                <h4 className="text-sm font-semibold mb-2 text-gray-700">Type</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  {["Topwear", "Bottomwear", "winterwear"].map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer capitalize">
                      <input type="checkbox" value={type} onChange={toggleSubCategory} className="accent-blue-600" />
                      {type}
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}
        </aside>

        {/* Product Section */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <Title text1="All" text2="Collection" />
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border border-gray-300 rounded-md text-sm px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Low to High</option>
              <option value="high-low">High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterProduct.length > 0 ? (
              filterProduct.map((item, index) => <ProductItem key={index} item={item} />)
            ) : (
              <p className="col-span-full text-center text-gray-500">No products match the selected filters.</p>
            )}
          </div>
        </main>
      </div>
    </div>

  )
}

export default Collection

{/* <div>
      <SectionHeading text1={"Our"} text2={"Collection"} subtitle={"Our all collection here"}></SectionHeading>
      <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 mb-6'>
        {/* Filter Option */}
        // <div className='min-w-60'>
        //   <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center gap-2 cursor-pointer'>FILTER
        //     {showFilter ? <MdFilterAlt /> : <MdFilterAltOff />}            
        //   </p>
        //   {/* Category filter */}
        //   <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
        //     <p className='mb-3 text-sm font-medium'>CATEGORY</p>
        //     <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
        //       <p className='flex gap-2'>
        //         <input className='w-3' type="checkbox" value={"Men"} onChange={toggleCategory} /> Men
        //       </p>
        //       <p className='flex gap-2'>
        //         <input className='w-3' type="checkbox" value={"Women"} onChange={toggleCategory} /> Women
        //       </p>
        //       <p className='flex gap-2'>
        //         <input className='w-3' type="checkbox" value={"Kids"} onChange={toggleCategory} /> Kids
        //       </p>
        //     </div>
        //   </div>
        //   {/* Subcategory filter */}
        //   <div className={`border border-gray-300 pl-5 py-3 my-6 ${showFilter ? "" : "hidden"} sm:block`}>
        //     <p className='mb-3 text-sm font-medium'>TYPE</p>
        //     <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
        //       <p className='flex gap-2'>
        //         <input className='w-3' type="checkbox" value={"Topwear"} onChange={toggleSubCategory} /> Topwear
        //       </p>
        //       <p className='flex gap-2'>
        //         <input className='w-3' type="checkbox" value={"Bottomwear"} onChange={toggleSubCategory} /> Bottomwear
        //       </p>
        //       <p className='flex gap-2'>
        //         <input className='w-3' type="checkbox" value={"winterwear"} onChange={toggleSubCategory} /> winterwear
        //       </p>
        //     </div>
        //   </div>
        // </div>
        {/* Right Side */}
      //   <div className='flex-1'>
      //     <div className='flex justify-between text-base sm:text-xl mb-4'>
      //       <Title text1={"All"} text2={"Collection"} />
      //       <select onChange={(e)=> setSortType(e.target.value)} className='border border-gray-200 text-sm p-2 outline-none'>
      //         <option value="relevant">Sort by: Relevant</option>
      //         <option value="low-high">Sort by: Low to High</option>
      //         <option value="high-low">Sort by: High to Low</option>
      //       </select>
      //     </div>
      //     {/* Map Product */}
      //     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
      //       {
      //         filterProduct.map((item, index) => (
      //           <ProductItem key={index} item={item} />
      //         ))
      //       }
      //     </div>
      // </div>
    //   </div>
    // </div> 
// */}
