import { frontend_assets } from "../assets/images/exports"
import './BannerSection.css'
const BannerSection = () => {
  return (
    <div className="flex flex-col items-center justify-center my-3 gap-7 pt-5 px-4  md:px-10">
        {/* Top Banner */}
      <div className="hidden md:flex flex-row banner-1-container w-full h-28 items-center justify-center relative">
        <img className="banner-img-1 w-full h-auto z-1" src={frontend_assets.home_banner_1} alt="" />
        <h1 className="absolute z-2 text-blue-950 space-x-0 text-lg min-[1280px]:text-3xl ">Discounts up to <b>30%</b> On <br /> All Smartwatches</h1>
      </div>


      {/* Other Banners */}
      <div className="w-full grid min-[1280px]:grid-cols-[2fr_1fr] gap-4">

        <div className="banner-2-div w-full bg-amber-100 flex flex-1 flex-col sm:flex-row items-center justify-center gap-1 md:gap-5 px-5 md:px-10 py-8">
          <div className="banner-2-div-one w-full h-auto flex flex-col justify-between gap-4 px-5">
            <span className="px-0 w-30 rounded-xl py-1 bg-red-500 text-center font-bold text-white spacing-10 text-[10px]">NEW COLLECTIONS</span>
            <h1 className="break-keep text-blue-950 text-3xl md:text-4xl font-bold " style={{ whiteSpace: "nowrap", overflow: "hidden"}}>High-Performance <br /> Gaming Extreme</h1>
            <p className="text-blue-950 font-md text-md md:text-xl" style={{whiteSpace: "nowrap", overflow: "hidden"}}>Extreme grade with <span className="text-red-500">high-end 4K </span> <br /> and vr gaming experience.</p>
            <button className="cursor-pointer bg-yellow-400 text-[10px] md:text-md font-semibold text-blue-950 w-30 md:w-50 py-2 rounded-xl">Shop Now</button>
          </div>
          <div className="w-[70%] pt-5 sm:w-full"><img className="w-full aspect-auto h-auto object-cover" src={frontend_assets.home2_img_slider_1} alt="" /></div>
        </div>
        <div className="flex flex-col items-center justify-center bg-green-200">
          <div>two</div>
          <div>three</div>
        </div>
      </div>
    </div>
  )
}

export default BannerSection
