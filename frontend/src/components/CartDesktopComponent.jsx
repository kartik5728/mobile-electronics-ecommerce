import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { DeleteIcon } from './icons/exports'

const CartDesktopComponent = () => {
  const { products, cartItems, currency, removeFromCart, addToCart, subtractFromCart } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          tempData.push({
            _id: items,
            quantity: cartItems[items][item]
          })
        }
      }

      setCartData(tempData);
      setLength(tempData.length);
      console.log(tempData);
    }
  }, [cartItems, products])
 
  return (
    <div className='bg-white rounded-2xl'>
    {
      (length > 0) ? (
        <div className='relative px-3 py-6'>
      <div>Your Cart</div>
      {/* Main Products Section (Scrollable) */}
      <div className='flex flex-col gap-6 max-h-80 overflow-y-auto'>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id)
            return(
              <div key={index} className='flex flex-row gap-3'>
                <div className='cart-dektop-img-cover flex-2'>
                  <img src={productData.image[0]} className='w-25 h-25 object-contain'  alt="" />
                </div>
                <div className='flex-4 flex flex-col gap-2 min-w-0'>
                  <p className='text-blue-950 font-medium line-clamp-2'>
                    {productData.name}
                  </p>
                  <div className='flex flex-row gap-6 items-center'>
                    <p className='flex flex-row font-semibold gap-2 bg-white rounded-lg px-3 py-2 border border-gray-300'>
                    <span onClick={() => subtractFromCart(item._id, "quantity")}  className='hover:text-amber-400 cursor-pointer'>-</span>
                    <input type="text" className='w-8 text-center text-sm' value={item.quantity} readOnly />
                    <span onClick={() => addToCart(item._id, "quantity")} className='hover:text-amber-400 cursor-pointer'>+</span>
                    </p>
                    <p className='text-red-600 text-lg'>
                      {currency}{productData.price}.00
                    </p>
                  </div>
                </div>
                <div className='flex-1 flex justify-center items-center '>
                  <span onClick={() => removeFromCart(item._id)} className='text-gray-500 hover:text-red-500 cursor-pointer'>
                    <DeleteIcon />
                  </span>
                </div>
              </div>
            )
          })
        }
      </div>
      {/* Cart Footer */}
      <div className='flex flex-col gap-2'>
        <div>
          <p>Subtotal: {currency}5223.00</p>
        </div>

        <div className='flex flex-row gap-2'>
          <button>View Cart</button>
          <button>Checkout</button>
        </div>
      </div>
    </div>
      ) : <div className='px-3 py-4'>
        Cart Is empty
      </div>
    }
    </div>
  )
}

export default CartDesktopComponent
