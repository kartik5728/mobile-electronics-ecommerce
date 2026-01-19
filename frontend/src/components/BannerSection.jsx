import { frontend_assets } from "../assets/images/exports"
import './BannerSection.css'
const BannerSection = () => {
  return (
    <div className="my-3 gap-7 pt-5 px-4 h-full md:px-10">
        {/* Top Banner */}
      <div className="hidden md:flex flex-row banner-1-container w-full h-28 items-center justify-center relative">
        <img className="banner-img-1 w-full h-auto z-1" src={frontend_assets.home_banner_1} alt="" />
        <h1 className="absolute z-2 text-blue-950 space-x-0 text-lg min-[1280px]:text-3xl ">Discounts up to <b>30%</b> On <br /> All Smartwatches</h1>
      </div>


      {/* Other Banners */}
    <div className="flex flex-col flex-1 lg:flex-row">
      {/* Left Banner */}
      <div className="bg-amber-200 flex flex-1"></div>

      {/* Right 2 Banners */}
      <div className="flex flex-1">
        <div className="bg-blue-200"></div>
        <div className="bg-green-200"></div>
      </div>
    </div>

    </div>
  )
}

export default BannerSection
