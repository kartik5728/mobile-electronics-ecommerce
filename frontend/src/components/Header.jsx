import { useState, useEffect } from "react"
import { frontend_assets } from "./../assets/images/exports"
import { NavLink, Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <div>
      <div className='flex items-center gap-10 justify-start pr-10'>
      <Link to={"/"}><img className="w-30 h-25" src={frontend_assets.logo_1} /></Link>
      <div className="flex flex-row gap-10">
       <div>Home</div>
       <div>Collections</div>
       <div>Smartphones</div>
       <div>Accesories</div>
       <div>Gaming</div>
      </div>

      <div className="flex flex-row gap-10 justify-self-end ml-auto">
       <div className="active">Store</div>
       <div>Support</div>
       <div>About</div>
       <div>Contact</div>
      </div>

    </div>
      <hr className="border-t border-gray-200" />
    </div>
    
  )
}

export default Header
