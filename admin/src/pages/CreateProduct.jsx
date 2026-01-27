import React, { use, useState } from 'react'
import "./CreateProduct.css"
import { DeleteIcon } from './../components/icons/exports'
import { SpecsForm, ToggleSwitch } from './../components/exports'
import { upload_icon } from '../assets/images/exports'



const CreateProduct = () => {

  const [form1ElementFocused, setForm1ElementFocused] = useState(false);
  
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Smartphone");
  const [stock, setStock] = useState("");
  const [discount, setDiscount] = useState("");
  const [tags, setTags] = useState("");
  const [specialTags, setSpecialTags] = useState("");
  const [bestseller, setBestseller] = useState(false);
  const [specs, setSpecs] = useState({});
  


  

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    alert("e.preventDefault()");
  }

  return (
    <div>
      <div>
        <h1>Create Product</h1>
        <div className='w-full flex flex-col justify-center px-2 py-2 border border-gray-200 rounded-xl'>
          <h1 className='py-4 text-md font-medium'>Product Information*</h1>
        <form onSubmit={onSubmitHandler} className='w-full flex flex-col gap-5 px-9 lg:px-5'>

          <div className='flex justify-center flex-col lg:flex-row gap-4 lg:gap-3'>
          <div className='flex flex-1 flex-col-reverse col'>
            <input onFocus={() => setForm1ElementFocused(true)} onBlur={() => setForm1ElementFocused(false)}
             className='form1-input' type="text" id='name' required/>
          <label className={`form1-label`} htmlFor="name">Product Name</label>
          </div>
          <div className='flex flex-1 flex-col-reverse'>
            <input onFocus={() => setForm1ElementFocused(true)} onBlur={() => setForm1ElementFocused(false)}
             className='form1-input' type="text" id='brand' required/>
          <label className={`form1-label`} htmlFor="brand">Brand</label>
          </div>
          </div>

          <div className='flex justify-center flex-col lg:flex-row gap-4 lg:gap-3'>
          <div className='flex flex-1 flex-col-reverse col'>
            <select className='form1-input px-5' onFocus={() => setForm1ElementFocused(true)} onBlur={() => setForm1ElementFocused(false)}
             name="Select a Category" id="category" required>
              <option value="Smartphone">Smartphone</option>
              <option value="Tablet">Tablet</option>
              <option value="Gaming">Gaming</option>
              <option value="Smartwatch">Smartwatch</option>
              <option value="Speaker">Speaker</option>
              <option value="Headset">Headset</option>
             </select>
          <label className={`form1-label`} htmlFor="category">Category</label>
          </div>
          <div className='flex flex-1 flex-col-reverse'>
            <input onFocus={() => setForm1ElementFocused(true)} onBlur={() => setForm1ElementFocused(false)}
             className='form1-input' type="number" id='stock' required/>
          <label className={`form1-label`} htmlFor="stock">Stock</label>
          </div>
          </div>

          <div className='flex justify-center flex-col lg:flex-row gap-4 lg:gap-3'>
          <div className='flex flex-1 flex-col-reverse col'>
            <input onFocus={() => setForm1ElementFocused(true)} onBlur={() => setForm1ElementFocused(false)}
             className='form1-input' type="number" id='price' required/>
          <label className={`form1-label`} htmlFor="price">Price</label>
          </div>
          <div className='flex flex-1 flex-col-reverse'>
            <input onFocus={() => setForm1ElementFocused(true)} onBlur={() => setForm1ElementFocused(false)}
             className='form1-input' type="number" id='discount' required/>
          <label className={`form1-label`} htmlFor="discount">Discount (in %)</label>
          </div>
          </div>

          <div className='flex justify-center flex-col lg:flex-row gap-4 lg:gap-3'>
          <div className='flex flex-1 flex-col-reverse col'>
            <input onFocus={() => setForm1ElementFocused(true)} onBlur={() => setForm1ElementFocused(false)}
             className='form1-input' type="text" id='tags' required/>
          <label className={`form1-label`} htmlFor="tags">Tags (Seperated by ,) max 7 </label>
          </div>
          <div className='flex flex-1 flex-col-reverse col'>
            <input onFocus={() => setForm1ElementFocused(true)} onBlur={() => setForm1ElementFocused(false)}
             className='form1-input' type="text" id='specialTags' required/>
          <label className={`form1-label`} htmlFor="specialTags">Special Tags (Seperated by ,) max 2 </label>
          </div>
          </div>

          <div className='flex justify-center flex-col lg:flex-row gap-4 lg:gap-3'>
          <div className='flex flex-1 flex-col-reverse col'>
            <textarea onFocus={() => setForm1ElementFocused(true)} onBlur={() => setForm1ElementFocused(false)}
             className='form1-input' rows={5} type="number" id='description' required/>
          <label className={`form1-label`} htmlFor="description">Description</label>
          </div>
          </div>

          <div className='flex justify-start gap-4 lg:gap-3'>
                <label htmlFor="bestseller">Bestseller</label>
              <div id='bestseller' className='cursor-pointer'>
                <ToggleSwitch
                id={'bestsellerToggle'}
                small
                disabled={false}
                checked={bestseller}
                onChange={setBestseller}
              />
              </div>
          </div>

          <div className=' w-full flex justify-center md:justify-start gap-4 lg:gap-3'>
            <div className='flex lg:w-[60%] flex-col md:px-5 px-2 py-3 border border-gray-300 rounded-xl'>
              <label className={`form1-label`} htmlFor="description">Product Specs</label>
                <SpecsForm productSpecs={{}} />
            </div>
          </div>

          <div className=' w-full flex justify-start md:justify-start'>
            <div>
              <h1 className='py-3'>Product Images</h1>
              <div className='flex flex-col sm:flex-row gap-8'>
                {/* dddddd */}
                <div className='flex gap-8 '>
                <div className='border bg-gray-100 px-2 py-2 border-gray-400 rounded-lg'>
          <label htmlFor="image1">
            <img className='w-22 h-22 sm:w-30 sm:h-30 cursor-pointer  object-cover ' src={!image1 ? upload_icon : URL.createObjectURL(image1)} alt="" />
            <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden/>
          </label>
          </div>
                <div className='border bg-gray-100 px-2 py-2 border-gray-400 rounded-lg'>
          <label htmlFor="image2">
            <img className='w-22 h-22 sm:w-30 sm:h-30 cursor-pointer object-cover ' src={!image2 ? upload_icon : URL.createObjectURL(image2)} alt="" />
            <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden/>
          </label>
          </div>
          </div>
                <div className='flex gap-8 '>
                <div className='border bg-gray-100 px-2 py-2 border-gray-400 rounded-lg'>
          <label htmlFor="image3">
            <img className='w-22 h-22 sm:w-30 sm:h-30 cursor-pointer  object-cover ' src={!image3 ? upload_icon : URL.createObjectURL(image3)} alt="" />
            <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden/>
          </label>
          </div>
                <div className='border bg-gray-100 px-2 py-2 border-gray-400 rounded-lg'>
          <label htmlFor="image4">
            <img className='w-22 h-22 sm:w-30 sm:h-30 cursor-pointer object-cover ' src={!image4 ? upload_icon : URL.createObjectURL(image4)} alt="" />
            <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden/>
          </label>
          </div>
          </div>
          
          </div>
          </div>
          </div>
          <button type='submit' className='cursor-pointer self-center w-60 px-4 py-2 text-white bg-[#645cff] hover:bg-[#4d45e2]  rounded-lg'>Create Product</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default CreateProduct
