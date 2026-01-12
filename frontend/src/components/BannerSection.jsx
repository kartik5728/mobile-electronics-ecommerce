import { frontend_assets } from "../assets/images/exports"
import './BannerSection.css'
const BannerSection = () => {
  return (
    <div className="flex flex-col items-center justify-center my-3">
        {/* Top Banner */}
      <div className="banner-1-container w-[90vw] h-28 flex flex-row items-center justify-center relative">
        <img className="banner-img-1 w-full h-full z-1" src={frontend_assets.home_banner_1} alt="" />
        <h1 className="absolute z-2 text-blue-950 space-x-0 text-3xl ">Discounts up to <b>30%</b> On <br /> All Smartwatches</h1>
      </div>


      {/* Other Banners */}
      <div></div>
    </div>
  )
}

export default BannerSection
