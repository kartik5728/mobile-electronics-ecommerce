import { useContext, useState, useEffect } from "react"
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { ProductItem } from "./exports"
import { Title } from './../components/exports'

    
const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
      const bestProduct = products.filter((item) => (item.bestseller));
      setBestSeller(bestProduct.slice(0, 5));
      // console.log("Bestseller: ", bestSeller);
  }, [products])

  return (
    <div className="mx-4 mt-6">
      <Title text1={"BestSellers"}/>
      <div className="flex mb-2 overflow-x-auto scroll-smooth scrollbar-hide">
        <div className="flex flex-row flex-nowrap min-w-0 gap-3">
          <span className="px-5 py-1 text-blue-950 border rounded-xl border-amber-500 shrink-0">Smartphones</span>
          <span className="px-5 py-1 text-blue-950 border rounded-xl border-amber-500 shrink-0">Gaming</span>
          <span className="px-5 py-1 text-blue-950 border rounded-xl border-amber-500 shrink-0">Speakers</span>
          <span className="px-5 py-1 text-blue-950 border rounded-xl border-amber-500 shrink-0">Tablets</span>
        </div>
      </div>
      <hr className="border border-gray-200 mb-4"/>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6">
          {
            bestSeller.map((item, index) => (
              <ProductItem key={index} brand={item.brand} id={item._id} image={item.image} name={item.name} price={item.price} discount={item.discount} 
                tags={item.tags} rating={item.rating} reviewsCount={item.reviewsCount} />
            ))
          }
        </div>
    </div>
  )
}

export default BestSeller
