import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useSearchParams } from 'react-router-dom'
import { backendURL } from './../App'
import { ProductListItem } from './../components/exports'

const ListProducts = () => {

    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get("page");
    const limit = searchParams.get("limit");

    const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${backendURL}/api/v1/products/all?page=${Number(page)}&limit=${Number(limit)}`
                );
                // console.log(response);
                setProducts(response.data.products);
            } catch (error) {
                console.log(error);
            } finally {

            }
        };

    useEffect(() => {
        console.log("fetching products...");
        fetchData();
    }, []);

  return (
    <div className='w-full flex flex-col items-center justify-center px-3'>
      <div className='w-full flex-col items-center'>
        <div className="w-full text-md font-semibold grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] gap-4 items-center">
            <div><p>Image</p></div>
            <div className='bg-red-200'><p>Name</p></div>
            <div><p>Stock</p></div>
            <div><p>Price</p></div>
            <div><p>Discount</p></div>
            <div><p>Action</p></div>
        </div>
        {
            (products.length > 0) ?
            products.map((item, index) => {
                // console.log(item)
                return (
                    <ProductListItem
                    key={index} 
                    id={item._id} 
                    image={item.image} 
                    name={item.name}
                    price = {item.price}
                    discount={item.discount}
                    category = {item.category}
                    brand = {item.brand}
                    stock={item.stock}
                    onModify={fetchData}
                     />
                )
            })
            : (<div>No data</div>)
        }
      </div>
    </div>
  )
}

export default ListProducts
