import React from 'react'
import { cloudfrontURL, backendURL } from '../App'
import { ViewIcon, EditIcon, DeleteIcon } from './icons/exports'
import axios from 'axios'

const ProductListItem = (props) => {
    const { id, image, name, stock, category, brand, price, discount, onModify } = props;
    // console.log(image)
    // console.log(cloudfrontURL)
    const handleDeleteProduct = async (productId) => {
        console.log(productId);
        try {
            const response = await axios.delete(`${backendURL}/api/v1/products/delete?id=${productId}`, {});
            if(response.data.success) {
                console.log("product deleted successfully")
            } else {
                console.error("error in deleting product")
            }
            // To refresh products
            onModify()
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <>
        <div className='w-full grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] gap-4 items-center my-3'>
        <img className='min-w-0 md:w-30  md:h-30' src={`${cloudfrontURL}/${image[0]}`} alt="" />
        <div>
            <p>{name}</p>
        </div>
        <div>
            <p>{stock}</p>
        </div>
        <div>
            <p>{price}</p>
        </div>
        <div>
            <p>{discount}</p>
        </div>
        <div className='flex gap-5'>
            <div className='cursor-pointer text-blue-700 hover:text-blue-900'><ViewIcon size={22}/></div>
            <div className='cursor-pointer text-gray-600 hover:text-orange-500'><EditIcon size={22}/></div>
            <div onClick={() => handleDeleteProduct(props.id)} className='cursor-pointer text-red-500 hover:text-red-600'><DeleteIcon size={22}/></div>
        </div>
    </div>
    <hr className='border-[0.5px] border-gray-300' />
    </>
  )
}

export default ProductListItem
