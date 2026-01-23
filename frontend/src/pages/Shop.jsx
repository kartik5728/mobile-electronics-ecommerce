import React, { useState } from 'react'
import { ListIcon, GridIcon, FilterIcon } from './../components/icons/exports'

const Shop = () => {
  const [layout, setLayout] = useState('grid');

  return (
    <div className='w-full'>

      {/* Top bar for display number of results and select styles and filter */}
      <div className='w-full'>
        {/* For Desktop Hidden in Tablet, Mobile */}
        <div className='hidden xl:flex flex-row justify-between py-5 px-5'>
          <div className='flex-1'>Showing 13-20 of 143 results</div>
          <div className='flex-1 flex flex-row items-center justify-end gap-5'>
          <div className='flex flex-row'>
            <span>Sort By: </span>
            <select className='text-center'>
              <option value="">Default Sorting</option>
              <option value="">Price: Low to High</option>
              <option value="">Price: High to Low</option>
              <option value="">Popularity</option>
              <option value="">Latest</option>
            </select>
          </div>
          <div className='flex flex-row gap-5'>
            <span onClick={() => setLayout('grid')}  className={`${layout === 'grid' ? 'text-amber-500' : 'text-blue-950'} hover:text-amber-500 cursor-pointer`}><GridIcon size={25} /></span>
            <span onClick={() => setLayout('list')} className={`${layout === 'list' ? 'text-amber-500' : 'text-blue-950'} hover:text-amber-500 cursor-pointer`}><ListIcon size={25} /></span>
          </div>
          </div>
        </div>

        {/* For Tablet Mobile Hidden in Desktop */}
        <div className=' xl:hidden'>
          <div className='flex flex-col w-full gap-3 py-4'>
          <div className='flex flex-row justify-between px-2'>

          <div className='flex flex-row items-center justify-center gap-2 text-blue-950'>
            <span><FilterIcon /></span>
            <span>Filter</span>
          </div>

         <div className='flex flex-row items-center justify-center'>
            <span>Sort By: </span>
            <select className='text-center'>
              <option value="">Default Sorting</option>
              <option value="">Price: Low to High</option>
              <option value="">Price: High to Low</option>
              <option value="">Popularity</option>
              <option value="">Latest</option>
            </select>
          </div>
          </div>

          <hr className='border border-gray-200'/>

          <div className='flex flex-row items-center justify-between px-2'>

            <div className='flex-1'>Showing 13-20 of 143 results</div>

            <div className='flex flex-row gap-5'>
            <span onClick={() => setLayout('grid')}  className={`${layout === 'grid' ? 'text-amber-500' : 'text-blue-950'} hover:text-amber-500 cursor-pointer`}><GridIcon size={25} /></span>
            <span onClick={() => setLayout('list')} className={`${layout === 'list' ? 'text-amber-500' : 'text-blue-950'} hover:text-amber-500 cursor-pointer`}><ListIcon size={25} /></span>
          </div>
          </div>

          </div>
        </div>
        <hr className='border border-gray-200'/>
      </div>



      {/* Main Products display and filter bar section */}
      <div>
        <div className='w-full flex flex-row sm:px-5 xl:px-10'>
        <div className='flex-1 h-full bg-red-200'>left</div>
        <div className='flex-4 h-full bg-blue-300'>right</div>
      </div>
      </div>
      <div></div>
    </div>
  )
}

export default Shop
