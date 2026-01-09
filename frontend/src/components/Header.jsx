import { useState, useEffect } from "react"
import { frontend_assets } from "./../assets/images/exports"
import { NavLink, Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <div>

      {/* Upward Navigation (With Search Bar) */}
      <div className="flex flex-row bg-amber-200 py-2 items-center justify-between px-8">
        <NavLink to={"/"}><img src={frontend_assets.logo_4} className="w-30 h-10 mt-3" /></NavLink>

        {/* Top Search Bar */}
        <div className="flex flex-row">
          <input type="text" className="w-80 h-10 ml-20 px-2 bg-gray-100 shrink-50 rounded-s-md" placeholder="Search GadgetGalaxy Store" />
          <button className="flex cursor-pointer flex-row items-center justify-center gap-2 bg-blue-400 px-2 rounded-e-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" /></svg>
            Search
          </button>
        </div>

        {/* Discount Box Section Start */}
        <div className="flex flex-row items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="40"
            height="40"
            viewBox="0 0 256 256"
            xmlSpace="preserve"
          >
            <g
              transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
              style={{
                stroke: "none",
                strokeWidth: 0,
                fill: "none",
                fillRule: "nonzero",
                opacity: 1,
              }}
            >
              <polygon
                points="45,9 58.91,2.2 66.16,15.88 81.41,18.55 79.24,33.88 90,45 79.24,56.13 81.41,71.45 66.16,74.13 58.91,87.8 45,81 31.09,87.8 23.84,74.13 8.59,71.45 10.76,56.13 0,45 10.76,33.88 8.59,18.55 23.84,15.88 31.09,2.2"
                style={{
                  fill: "rgb(224,40,40)",
                  opacity: 1,
                }}
              />

              <path
                d="M 34.355 43.199 c -4.621 0 -8.379 -3.759 -8.379 -8.379 c 0 -4.62 3.759 -8.379 8.379 -8.379 c 4.62 0 8.379 3.759 8.379 8.379 C 42.734 39.44 38.976 43.199 34.355 43.199 z M 34.355 30.441 c -2.415 0 -4.379 1.964 -4.379 4.379 c 0 2.415 1.964 4.379 4.379 4.379 c 2.415 0 4.379 -1.964 4.379 -4.379 C 38.734 32.405 36.77 30.441 34.355 30.441 z"
                fill="white"
                strokeLinecap="round"
              />

              <rect
                x="22.55"
                y="43"
                width="44.91"
                height="4"
                transform="matrix(0.6753 -0.7375 0.7375 0.6753 -18.5781 47.8016)"
                fill="white"
              />

              <path
                d="M 54.715 63.56 c -4.62 0 -8.379 -3.759 -8.379 -8.38 c 0 -4.62 3.759 -8.379 8.379 -8.379 c 4.621 0 8.38 3.759 8.38 8.379 C 63.095 59.801 59.336 63.56 54.715 63.56 z M 54.715 50.801 c -2.414 0 -4.379 1.965 -4.379 4.379 c 0 2.415 1.965 4.38 4.379 4.38 c 2.415 0 4.38 -1.965 4.38 -4.38 C 59.095 52.766 57.13 50.801 54.715 50.801 z"
                fill="white"
                strokeLinecap="round"
              />
            </g>
          </svg>
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-gray-400 font-medium ">Only this weekend</p>
            <p className="text-xl font-bold">Super Discount</p>
          </div>
        </div>
        {/* Discount Section Ends */}

        {/* Wishlist, Cart, Profile Section Starts */}
      
      <div className="flex flex-row gap-4 items-center justify-center">

        {/*  Wishlist Icon*/}
        <div >

            <svg className="text-gray-600 hover:text-yellow-400"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="28"
    height="28"
    viewBox="0 0 256 256"
    xmlSpace="preserve"
  >
    <g
      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
      style={{
        stroke: "none",
        strokeWidth: "0",
        fill: "none",
        fillRule: "nonzero",
        opacity: 1,
      }}
    >
      <path
        d="M 64.44 12.016 c 5.225 0 10.136 2.035 13.831 5.729 c 7.626 7.626 7.626 20.035 0 27.662 l -19.44 19.44 L 45 78.677 L 31.169 64.846 l -19.44 -19.44 c -7.626 -7.626 -7.626 -20.035 0 -27.662 c 3.694 -3.694 8.606 -5.729 13.831 -5.729 c 5.225 0 10.136 2.035 13.831 5.729 l 1.367 1.367 L 45 23.354 l 4.242 -4.242 l 1.367 -1.367 C 54.304 14.05 59.216 12.016 64.44 12.016 M 64.44 6.016 c -6.541 0 -13.083 2.495 -18.073 7.486 L 45 14.869 l 0 0 l 0 0 l -1.367 -1.367 C 38.642 8.511 32.101 6.016 25.56 6.016 S 12.477 8.511 7.486 13.502 c -9.982 9.982 -9.982 26.165 0 36.147 l 19.44 19.44 c 0 0 0 0 0.001 0 L 45 87.163 l 18.073 -18.073 c 0 0 0 0 0 0 l 19.44 -19.44 c 9.982 -9.982 9.982 -26.165 0 -36.147 C 77.523 8.511 70.982 6.016 64.44 6.016 z"
        fill="currentColor"
        strokeLinecap="round"
      />
    </g>
  </svg>
        </div>
        {/* End of wishlist icon */}

        {/* Cart Icon */}

        <div>
      
  <svg className="text-gray-600 hover:text-yellow-400"
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 256 256"
    role="img"
    aria-hidden="true"
    
  >
    <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
      <path
        d="M 73.713 65.44 H 27.689 c -3.566 0 -6.377 -2.578 -6.686 -6.13 c -0.21 -2.426 0.807 -4.605 2.592 -5.939 L 16.381 21.07 c -0.199 -0.889 0.017 -1.819 0.586 -2.53 s 1.431 -1.124 2.341 -1.124 H 87 c 0.972 0 1.884 0.471 2.446 1.263 c 0.563 0.792 0.706 1.808 0.386 2.725 l -7.798 22.344 c -1.091 3.13 -3.798 5.429 -7.063 5.999 l -47.389 8.281 c -0.011 0.001 -0.021 0.003 -0.032 0.005 c -0.228 0.04 -0.623 0.126 -0.568 0.759 c 0.056 0.648 0.48 0.648 0.708 0.648 h 46.024 c 1.657 0 3 1.343 3 3 S 75.37 65.44 73.713 65.44 z M 23.053 23.416 l 6.301 28.211 l 44.583 -7.79 c 1.124 -0.197 2.057 -0.988 2.432 -2.065 l 6.406 -18.356 H 23.053 z"
        fill="currentColor"
      />

      <circle cx="28.25" cy="75.8" r="6.5" fill="currentColor" />
      <circle cx="68.29" cy="75.8" r="6.5" fill="currentColor" />

      <path
        d="M 19.306 23.417 c -1.374 0 -2.613 -0.95 -2.925 -2.347 l -1.375 -6.155 c -0.554 -2.48 -2.716 -4.212 -5.258 -4.212 H 3 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 h 6.749 c 5.372 0 9.942 3.662 11.113 8.904 l 1.375 6.155 c 0.361 1.617 -0.657 3.221 -2.274 3.582 C 19.742 23.393 19.522 23.417 19.306 23.417 z"
        fill="currentColor"
      />
    </g>
  </svg>
        </div>
        {/* End of cart icon */}

        {/* Profile icon */}
        <div>
           <svg className="text-gray-600 hover:text-yellow-400"
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 256 256"
    role="img"
    aria-hidden="true"
    
  >
    <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
      <path
        d="M 45 53.718 c -10.022 0 -18.175 -8.153 -18.175 -18.175 S 34.978 17.368 45 17.368 c 10.021 0 18.175 8.153 18.175 18.175 S 55.021 53.718 45 53.718 z"
        fill="currentColor"
      />
      <path
        d="M 45 0 C 20.187 0 0 20.187 0 45 c 0 24.813 20.187 45 45 45 c 24.813 0 45 -20.187 45 -45 C 90 20.187 69.813 0 45 0 z M 74.821 70.096 c -3.543 -5.253 -8.457 -9.568 -14.159 -12.333 c -2.261 -1.096 -4.901 -1.08 -7.247 0.047 c -2.638 1.268 -5.47 1.91 -8.415 1.91 c -2.945 0 -5.776 -0.643 -8.415 -1.91 c -2.343 -1.125 -4.984 -1.143 -7.247 -0.047 c -5.702 2.765 -10.616 7.08 -14.16 12.333 C 9.457 63.308 6 54.552 6 45 C 6 23.495 23.495 6 45 6 s 39 17.495 39 39 C 84 54.552 80.543 63.308 74.821 70.096 z"
        fill="currentColor"
      />
    </g>
  </svg>
        </div>
      </div>

      </div>
        {/* Ending of Top Nav Section  */}

        {/* Start Of Main Nav Section */}
      <div className='flex flex-row items-center gap-10 justify-start pr-10'>
        <Link to={"/"}><img className="w-30 h-15" src={frontend_assets.logo_2} /></Link>
        <ul className="hidden sm:flex text-sm flex-row gap-10">

          <NavLink to={"/"} className="flex flex-col items-center gap-1 nav-link py-7">
            <p>Home</p>
            {/* <hr className='w-[120%] border-none h-0.5 bg-gray-700 absolute top-12.5 hidden'/> */}
          </NavLink>

          <NavLink to={"/about"} className="flex flex-col items-center gap-1 nav-link py-7">
            <p>Collections</p>
            {/* <hr className='w-[120%] border-none h-0.5 bg-gray-700 absolute top-12.5 hidden'/> */}
          </NavLink>

          <NavLink to={"/contact"} className="flex flex-col items-center gap-1 nav-link py-7">
            <p>Smartphones</p>
            {/* <hr className='w-[120%] border-none h-0.5 bg-gray-700 absolute top-12.5 hidden'/> */}
          </NavLink>

          <NavLink to={"/about"} className="flex flex-col items-center gap-1 nav-link py-7">
            <p>Accesories</p>
            {/* <hr className='w-[120%] border-none h-0.5 bg-gray-700 absolute top-12.5 hidden'/> */}
          </NavLink>

          <NavLink to={"/about"} className="flex flex-col items-center gap-1 nav-link py-7">
            <p>Gaming</p>
            {/* <hr className='w-[120%] border-none h-0.5 bg-gray-700 absolute top-12.5 hidden'/> */}
          </NavLink>
        </ul>

        <div className="flex flex-row gap-10 justify-self-end ml-auto">
          <div className="active">Store</div>
          <div>Support</div>
          <div>About</div>
          <div>Contact</div>
        </div>

      </div>

      {/* <hr className="border-t border-gray-200" /> */}
    </div>

  )
}

export default Header
