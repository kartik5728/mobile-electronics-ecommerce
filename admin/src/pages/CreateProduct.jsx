import React, { use, useState } from 'react'
import axios from 'axios'
import "./CreateProduct.css"
import { DeleteIcon } from './../components/icons/exports'
import { SpecsForm, ToggleSwitch } from './../components/exports'
import { upload_icon } from '../assets/images/exports'
import { backendURL } from '../App'



const CreateProduct = () => {

  const [form1ElementFocused, setForm1ElementFocused] = useState(false);
  
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("Smartphone");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [tags, setTags] = useState("");
  const [specialTags, setSpecialTags] = useState("");
  const [description, setDescription] = useState("");
  const [bestseller, setBestseller] = useState(false);
  const [specsArray, setSpecsArray] = useState([]);

  const handleImageUpload = async (images) => {
    if(!images?.length) 
      return [];

    const uploadSingleImage = async (file, index) => {
        try {
        console.log("UPLOADING: ", index, file.name);

      if(!(file.type.startsWith("image/"))) {
        throw new Error(`File ${index} is not an image`);
      }

      // get mime
      const mime = file.type.split('/')[1];

      const response = await axios.post(
        `${backendURL}/api/v1/s3/get-presigned-url`, //passing url
        {
          mime            //passing object
        },
        {
          headers: {
            'Content-Type': 'application/json' //passing headers
          }
        }
      );

      if(!response.data?.success) {
        throw new Error("Error in generating presigned url");
      }

      // upload image to s3 bucket via presigned url
      const res = await axios.put(
        response.data.url, //passing url
        file, //passing file to upload
        {
          headers: {
            'Content-Type': file.type //passing headers
          }
        }
      );

      if (res.status === 200) {
        console.log(`Image ${index} uploaded successfully. \n............................`);
        return response.data.finalName;
      } else {
        throw new Error(`Error in uploading image ${1}. \n..............................`);
      }

    } catch (error) {
     console.log(error.message);
     return null;
   }
    };

    // Upload all at once
    const results = await Promise.all(
      images.map((file, index) => uploadSingleImage(file, index))
    );
    console.log("final image urls: ", results);
  
    return results.filter(image => image !== null);
};
  

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const image = [image1, image2, image3, image4].filter(image => image !== false || image !== undefined);
    try {
      const imagesURL = await handleImageUpload(image);
      if(!imagesURL.length) {
        alert("upload at least one image");
        return;
      }
      // const formData = new FormData();
      // formData.append("name", name);
      // formData.append("image", JSON.stringify(imagesURL));
      // formData.append("brand", brand);
      // formData.append("category", category);
      // formData.append("stock", stock);
      // formData.append("price", price);
      // formData.append("discount", discount);
      // formData.append("tags", JSON.stringify(tags.split(",")));
      // formData.append("specialTags", JSON.stringify(specialTags.split(",")));
      // formData.append("description", description);
      // formData.append("bestseller", String(bestseller));
      // formData.append("specs", JSON.stringify(specsArray.reduce((accumulator, currentPair) => {
      //   currentPair[0].trim() && currentPair[1].trim() && (accumulator[currentPair[0]] = currentPair[1]);
      //   return accumulator;
      // }, {})));

      //  console.log([...formData.entries()]);
      const productData = {
        name,
        image: JSON.stringify(imagesURL),
        brand,
        category,
        stock,
        price,
        discount,
        tags: JSON.stringify(tags.split(",")),
        specialTags: JSON.stringify(specialTags.split(",")),
        description,
        bestseller,
        specs: JSON.stringify(specsArray.reduce((accumulator, currentPair) => {
          currentPair[0].trim() && currentPair[1].trim() && (accumulator[currentPair[0]] = currentPair[1]);
          return accumulator;
        }, {}))
      };

      console.log(productData);
       const response = await axios.post(
        `${backendURL}/api/v1/products/add`,  //url
          productData,   //object body 
          {}   //headers
       );

       console.log(response);
    } catch (error) {
      console.log(error);
    } 
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
            value={name} onChange={(e) => setName(e.target.value)}
             className='form1-input' type="text" id='name' required/>
          <label className={`form1-label`} htmlFor="name">Product Name</label>
          </div>
          <div className='flex flex-1 flex-col-reverse'>
            <input onFocus={() => setForm1ElementFocused(true)} onBlur={() => setForm1ElementFocused(false)}
            value={brand} onChange={(e) => setBrand(e.target.value)}
             className='form1-input' type="text" id='brand' required/>
          <label className={`form1-label`} htmlFor="brand">Brand</label>
          </div>
          </div>

          <div className='flex justify-center flex-col lg:flex-row gap-4 lg:gap-3'>
          <div className='flex flex-1 flex-col-reverse col'>
            <select className='form1-input px-5' onFocus={() => setForm1ElementFocused(true)} onBlur={() => setForm1ElementFocused(false)}
            value={category} onChange={(e) => setCategory(e.target.value)}
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
            value={stock} onChange={(e) => setStock(e.target.value)}
             className='form1-input' type="number" id='stock' required/>
          <label className={`form1-label`} htmlFor="stock">Stock</label>
          </div>
          </div>

          <div className='flex justify-center flex-col lg:flex-row gap-4 lg:gap-3'>
          <div className='flex flex-1 flex-col-reverse col'>
            <input onFocus={() => setForm1ElementFocused(true)} onBlur={() => setForm1ElementFocused(false)}
            value={price} onChange={(e) => setPrice(e.target.value)}
             className='form1-input' type="number" id='price' required/>
          <label className={`form1-label`} htmlFor="price">Price</label>
          </div>
          <div className='flex flex-1 flex-col-reverse'>
            <input onFocus={() => setForm1ElementFocused(true)} onBlur={() => setForm1ElementFocused(false)}
            value={discount} onChange={(e) => setDiscount(e.target.value)}
             className='form1-input' type="number" id='discount' required/>
          <label className={`form1-label`} htmlFor="discount">Discount (in %)</label>
          </div>
          </div>

          <div className='flex justify-center flex-col lg:flex-row gap-4 lg:gap-3'>
          <div className='flex flex-1 flex-col-reverse col'>
            <input onFocus={() => setForm1ElementFocused(true)} onBlur={() => setForm1ElementFocused(false)}
            value={tags} onChange={(e) => setTags(e.target.value)}
             className='form1-input' type="text" id='tags' required/>
          <label className={`form1-label`} htmlFor="tags">Tags (Seperated by ,) max 7 </label>
          </div>
          <div className='flex flex-1 flex-col-reverse col'>
            <input onFocus={() => setForm1ElementFocused(true)} onBlur={() => setForm1ElementFocused(false)}
             value={specialTags} onChange={(e) => setSpecialTags(e.target.value)}
             className='form1-input' type="text" id='specialTags' required/>
          <label className={`form1-label`} htmlFor="specialTags">Special Tags (Seperated by ,) max 2 </label>
          </div>
          </div>

          <div className='flex justify-center flex-col lg:flex-row gap-4 lg:gap-3'>
          <div className='flex flex-1 flex-col-reverse col'>
            <textarea onFocus={() => setForm1ElementFocused(true)} onBlur={() => setForm1ElementFocused(false)}
             value={description} onChange={(e) => setDescription(e.target.value)}
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
                <SpecsForm onSpecsArrayChange={setSpecsArray}/>
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
