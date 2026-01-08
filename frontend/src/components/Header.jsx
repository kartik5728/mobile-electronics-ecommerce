import { useState, useEffect } from "react"
import { frontend_assets } from "./../assets/images/exports"
import { NavLink, Link } from "react-router-dom"

const Header = () => {
  return (
    <div className='flex'>
      <Link to={"/"}><img className="w-30 h-25" src={frontend_assets.logo_1} /></Link>
    </div>
  )
}

export default Header
