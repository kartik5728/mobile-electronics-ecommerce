import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import './ProductItem.css'
import { Rating, CartPlusIcon, WishlistPlusIcon, EyeIcon, CompareIcon } from './../components/icons/exports'
import { ShopContext } from '../context/ShopContext'


const ProductItem = ({ id, image, name, brand, price, discount, tags, rating, reviewsCount}) => {
const { currency, addToCart } = useContext(ShopContext);


  return (
    <div
      className='product-component rounded-sm relative flex flex-col h-full border-2 border-gray-200'>
      <Link to={`/product/${id}`} className='pitem-cover relative cursor-pointer py-0 md:py-0 px-3 md:px-0 h-65 sm:h-70 md:h-80 overflow-hidden flex items-center justify-center'>
        <img src={image[0]} className=' max-h-full max-w-full object-contain' alt="" />

        <div className='absolute flex flex-col items-start pl-2 pt-3 gap-1.5 inset-0 pointer-events-none'>
          <span className='bg-red-600 text-[9px] sm:text-[10px] px-3.5 py-0.5 rounded-md font-bold text-white'>-{discount}%</span>
          <span className='bg-lime-600 text-[9px] sm:text-[10px] px-3 py-0.5 rounded-md font-bold text-white'>{tags[0].toUpperCase()}</span>
        </div>

        <div className={`product-overlay absolute hidden items-center max-w-10 top-5 right-5 gap-2`}>
            <span className='px-3 py-3 rounded-[50%] border-2 bg-white border-gray-300 hover:bg-amber-600 hover:text-white hover:border-amber-600'><WishlistPlusIcon size={18} initial={""}/></span>
            <span className='px-3 py-3 rounded-[50%] border-2 bg-white border-gray-300 hover:bg-amber-600 hover:text-white hover:border-amber-600'><CompareIcon size={18} initial={""}/></span>
            <span className='px-3 py-3 rounded-[50%] border-2 bg-white border-gray-300 hover:bg-amber-600 hover:text-white hover:border-amber-600'><EyeIcon size={18} initial={""}/></span>
          </div>

      </Link>
      <div className='flex flex-col items-start text-sm px-2 py-2'>
        <Link to={"/"} className='text-[12px] text-blue-400 font-semibold'>{brand}</Link>
        <p className='text-blue-950 font-medium text-[14px] sm:text-lg line-clamp-2'
         style={{}}><Link to={`/product/${id}`}>{name}</Link></p>
        <p className='flex flex-row gap-3 text-gray-800 text-[11px] font-semibold'><Rating rating={rating} />{rating}</p>
        <strike className="text-gray-300 text-sm">{currency}{price * discount * 0.01 + price}</strike>
        <div className='flex flex-col sm:flex-row justify-between w-full'>
          <p className='text-red-600 text-lg'>{currency}{price}</p>
          <button onClick={() => addToCart(id, "quantity")} className='px-2 bg-blue-950 hover:bg-amber-600 hover:text-gray-950 flex gap-3 py-2 rounded-sm items-center text-white text-[11px] font-bold cursor-pointer'>ADD TO CART <CartPlusIcon /></button>
        </div>
        
      </div>
    </div>
  )
}

export default ProductItem
