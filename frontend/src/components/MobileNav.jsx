import {useState, useEffect} from 'react'
import { MobileMenuIcon } from './icons/exports'
import "./MobileNav.css"

const MobileNav = () => {
    const [open, setOpen] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);

    // useEffect(() => {
    //     console.log(open);
    // }, [open])

  return (
    <>
    <button onClick={() => setOpen(true)} className='min-[1280px]:hidden text-gray-800'>
        <MobileMenuIcon width={28} height={28}/>
    </button>
     {/* Dark Overlay */}
    <div onClick={() => setOpen(false)} className={`dark-overlay ${open ? "active" : ""}`} />

    {/* Mobile Navigation */}
        <div className={`slide-panel ${open ? "open" : ""} flex flex-col`}>
            <div className='close-button flex flex-row justify-end items-center px-5 py-3 font-bold text-xl'>
                <button onClick={() => setOpen(false)}>✕</button>
            </div>
            
        <div>
            <div className='flex flex-col '>
                <div className='flex felx-row items-center justify-between px-5 text-md font-medium leading-12'>Smartphones <span>+</span></div>
                <div className=''></div>
            </div>
            <div>
                <div className='flex felx-row items-center justify-between px-5 text-md font-medium leading-12'>Tablets <span>+</span></div>
            </div>
            <div>
                <div className='flex felx-row items-center justify-between px-5 text-md font-medium leading-12'>Accesories <span>+</span></div>
            </div>
            <div>
                <div className='flex felx-row items-center justify-between px-5 text-md font-medium leading-12'>Gaming <span>+</span></div>
            </div>
            <div>
                <div className='flex felx-row items-center justify-between px-5 text-md font-medium leading-12'>About <span>+</span></div>
            </div>
         
        </div>
        </div>
    </>
  )
}

export default MobileNav
