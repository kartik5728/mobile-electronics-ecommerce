import { frontend_assets } from "../assets/images/exports"
import './BannerSection.css'
const BannerSection = () => {
  return (
    <div className="flex flex-col items-center justify-center my-3 gap-7 pt-5">
        {/* Top Banner */}
      <div className="hidden md:flex flex-row banner-1-container w-[80vw] h-28 items-center justify-center relative">
        <img className="banner-img-1 w-full h-full z-1" src={frontend_assets.home_banner_1} alt="" />
        <h1 className="absolute z-2 text-blue-950 space-x-0 text-3xl ">Discounts up to <b>30%</b> On <br /> All Smartwatches</h1>
      </div>


      {/* Other Banners */}
      <div className="w-[80vw] grid min-[1280px]:grid-cols-[2fr_1fr] gap-4">
        <div className="w-full bg-amber-100 flex flex-row items-center justify-center gap-15 py-12 px-10">
          <div className="flex flex-col gap-5 px-5">
            <span className="px-0 w-30 rounded-xl py-1 bg-red-500 text-center font-bold text-white spacing-10 text-[10px]">NEW COLLECTIONS</span>
            <h1 className="text-blue-950 text-4xl font-bold ">High-Performance <br /> Gaming Extreme</h1>
            <p className="text-blue-950 text-xl font-medium leading-8">Extreme grade with <span className="text-red-500">high-end 4K </span> and vr gaming experience.</p>
            <button className="bg-yellow-400 text-md font-medium text-blue-950 w-50 py-3 rounded-3xl">Shop Now</button>
          </div>
          <div><img className="w-150 h-100 object-cover" src={frontend_assets.home2_img_slider_1} alt="" /></div>
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
