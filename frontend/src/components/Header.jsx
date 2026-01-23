import { useState, useEffect, useContext } from "react"
import { frontend_assets } from "./../assets/images/exports"
import { NavLink, Link, useLocation } from "react-router-dom"
import { MobileNav, CartDesktopComponent, CartMobileComponent } from './exports'
import { HomeIcon, ShopIcon, CartIcon, WishlistIcon, ProfileIcon, SalePercentIcon, MobileMenuIcon, SearchIcon } from "./../components/icons/exports"
import "./Header.css"
import { ShopContext } from "../context/ShopContext"

const Header = () => {

  const [currentPageLocation, setCurrentPageLocation] = useState("");
  const path = useLocation().pathname.slice(1);
  const [showTab, setShowTab] = useState("");
  useEffect(() => {
    // console.log(path);
    setCurrentPageLocation(path);
  }, [path]);
  const { currency, cartItems, getCartCount } = useContext(ShopContext);



  return (
    <div className="min-h-full flex flex-col relative">

      {/* Upward Navigation (With Search Bar) */}
      <div className="flex bg-white flex-row py-2 items-center justify-between px-3 lg:px-8 z-30">

        {/* Menu Icon for small devices hidden on desktop */}
        {/* <div className="min-[1280px]:hidden text-gray-800">
       <MobileMenuIcon width={28} height={28}/>
      </div> */}
        <MobileNav />
        {/* Menu Icon end */}

        <NavLink to={"/"}><img src={frontend_assets.logo_4} className="w-30 h-10 rounded-md" /></NavLink>

        {/* Top Search Bar */}
        <div className="hidden min-[1280px]:flex flex-row w-1/2">
          <input type="text" className="w-full h-10 ml-20 px-2 text-sm bg-gray-100 shrink-50 rounded-s-md" placeholder="Search Gadget Galaxy" />
          <button className="flex cursor-pointer flex-row items-center text-sm justify-center gap-2 bg-blue-400 px-2 rounded-e-md ">
            <SearchIcon width={16} height={16} />
            Search
          </button>
        </div>

        {/* Discount Box Section Start */}
        <div className="hidden min-[1280px]:flex flex-row items-center justify-center gap-2 ff-poppins bg-red-200 px-5 py-2 rounded-md ">
          <SalePercentIcon className="text-gray-600" width={30} height={30} />
          <div className="flex flex-col items-center justify-center">
            <p className="text-[11px] text-gray-500 font-medium leading-4">Only this weekend</p>
            <p className="text-[12px] font-bold">Super Discount</p>
          </div>
        </div>
        {/* Discount Section Ends */}

        {/* Wishlist, Cart, Profile Section Starts */}
        <div className="hidden min-[1280px]:flex flex-row gap-6 bg-amber-100 px-6 py-3 rounded-lg items-center justify-center">

          {/*  Wishlist Icon*/}
          <div className="relative cursor-pointer" >
            <span className="absolute flex items-center justify-center
               bottom-4 left-4 h-5.5 w-5.5 rounded-[50%] bg-yellow-400 text-[10px] text-black font-bold">8</span>
            <WishlistIcon width={28} height={28} initial={"text-gray-600 hover:text-yellow-400"} />
          </div>
          {/* End of wishlist icon */}

          {/* Cart Icon */}

          <div className="relative cursor-pointer">
            <div onClick={() => setShowTab("cart-desktop")}>
              <span className="absolute flex items-center justify-center
               bottom-4 left-4 h-5.5 w-5.5 rounded-[50%] bg-yellow-400 text-[10px] text-black font-bold">{getCartCount() > 12 ? "12+" : getCartCount()}</span>
              <CartIcon width={28} height={28} initial={"text-gray-600 hover:text-yellow-400"} />
            </div>

          </div>
          {/* End of cart icon */}

          {/* Profile icon */}
          <div className="cursor-pointer">
            <ProfileIcon width={28} height={28} initial={"text-gray-600 hover:text-yellow-400"} />
          </div>
        </div>

      </div>
      {/* Ending of Top Nav Section  */}

      {/* Start Of Main Nav Section */}
      <div className='hidden min-[1280px]:flex bg-gray-50 flex-row items-center gap-10 justify-start pr-10 border-b-gray-300 border-b z-30'>
        <Link to={"/"}><img className="w-30 h-15" src={frontend_assets.logo_2} /></Link>
        <ul className="hidden sm:flex text-sm flex-row gap-10">

          <NavLink to={"/"} className="flex flex-col items-center gap-1 nav-link py-1">
            <p>Home</p>
            {/* <hr className='w-[120%] border-none h-0.5 bg-gray-700 absolute top-12.5 hidden'/> */}
          </NavLink>

          <NavLink to={"/shop"} className="flex flex-col items-center gap-1 nav-link py-1">
            <p>Shop</p>
            {/* <hr className='w-[120%] border-none h-0.5 bg-gray-700 absolute top-12.5 hidden'/> */}
          </NavLink>

          <NavLink to={"/contact"} className="flex flex-col items-center gap-1 nav-link py-1">
            <p>Smartphones</p>
            {/* <hr className='w-[120%] border-none h-0.5 bg-gray-700 absolute top-12.5 hidden'/> */}
          </NavLink>

          <NavLink to={"/about"} className="flex flex-col items-center gap-1 nav-link py-1">
            <p>Accessories</p>
            {/* <hr className='w-[120%] border-none h-0.5 bg-gray-700 absolute top-12.5 hidden'/> */}
          </NavLink>

          <NavLink to={"/about"} className="flex flex-col items-center gap-1 nav-link py-1">
            <p>Gaming</p>
            {/* <hr className='w-[120%] border-none h-0.5 bg-gray-700 absolute top-12.5 hidden'/> */}
          </NavLink>
        </ul>

        <div className="flex flex-row gap-10 justify-self-end ml-auto text-sm">
          <div className="">Store</div>
          <div>Support</div>
          <div>About</div>
          <div>Contact</div>
        </div>

      </div>
      {/* End of the main nav section (desktop) */}

      {/* Search bar for medium and small screen (hidden in desktop) */}
      {/* Top Search Bar */}
      <div className="min-[1280px]:hidden flex justify-center w-full px-5">
        <input type="text" className="w-[60%] text-[12px] h-10 px-2 bg-gray-100 shrink-50 rounded-s-md" placeholder="Search Gadget Galaxy" />
        <button className="flex cursor-pointer flex-row text-[12px] items-center justify-center gap-2 bg-blue-400 px-2 rounded-e-md">
          <SearchIcon width={16} height={16} />
          Search
        </button>
      </div>

      {/* Bottom Sticky Menu for Tabs and Phones (Hidden in desktop) */}
      <div className="min-[1280px]:hidden bg-gray-200 fixed bottom-0 left-0 right-0 z-30 flex flex-row items-center gap-5 pt-3 pb-1">
        <NavLink to={"/"} className="mobile-link flex flex-1 items-center justify-center">
          <div className={`flex flex-col items-center justify-center ${path === "" ? "text-blue-950" : ""}`}>
            <HomeIcon width={20} height={20} />
            <span className="text-sm font-verdana">Home</span>
          </div></NavLink>

        <NavLink to={"/about"} className="mobile-link flex flex-1 items-center justify-center">
          <div className={`flex flex-col items-center justify-center ${path === "about" ? "text-blue-950" : ""}`}>
            <ShopIcon width={20} height={20} />
            <span className="text-sm font-verdana">Shop</span>
          </div></NavLink>

        <NavLink to={"/"} className="mobile-link flex flex-1 items-center justify-center">
          <div className={`relative flex flex-col items-center justify-center ${path === "" ? "text-blue-950" : ""}`}>
            <span className="absolute flex items-center justify-center bottom-7 left-7 h-5.5 w-5.5 rounded-[50%] bg-yellow-400 text-[10px] text-black font-bold">
              8</span>
            <WishlistIcon width={20} height={20} />
            <span className="text-sm font-verdana">Wishlist</span>
          </div></NavLink>

        <NavLink onClick={() => setShowTab("cart-mobile")} className="mobile-link flex flex-1 items-center justify-center">
          <div className={`relative flex flex-col items-center justify-center ${path === "contact" ? "text-blue-950" : ""}`}>
            <span className="absolute flex items-center justify-center bottom-7 left-4 h-5.5 w-5.5 rounded-[50%] bg-yellow-400 text-[10px] text-black font-bold">
              {getCartCount() > 12 ? "12+" : getCartCount()}</span>
            <CartIcon width={20} height={20} />
            <span className="text-sm font-verdana">Cart</span>
          </div></NavLink>

        <NavLink to={"/about"} className="mobile-link flex flex-1 items-center justify-center">
          <div className={`flex flex-col items-center justify-center ${path === "about" ? "text-blue-950" : ""}`}>
            <ProfileIcon width={20} height={20} />
            <span className="text-sm font-verdana">Account</span>
          </div></NavLink>
      </div>


      
            {/* Dark Overlay */}
            <div
              onClick={() => setShowTab("")}
              className={`fixed ${showTab !== "" ? 'block' : "hidden"} inset-0 bg-black/10 z-20`} />

            {/* Cart Home Component For Desktop (Hidden in small devices) */}
            {
              showTab === "cart-desktop" ? (
                <div className="hidden bg-transparent xl:block absolute top-20 right-10 z-35">
                    <CartDesktopComponent />
                </div>
              ) : showTab === "cart-mobile" && (
                <div className="w-[80%] md:w-[60%] xl:hidden fixed top-0 right-0 bottom-0 bg-white z-35">
                  <CartMobileComponent />
                </div>
              )
            }
    </div>

  )
}

export default Header
