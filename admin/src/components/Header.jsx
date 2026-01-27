import {useState} from 'react'
import { Sidebar } from './exports'
const Header = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='w-full flex items-center py-2 px-3 bg-red-200'>
      <button onClick={() => setToggleMenu(true)} className='xl:hidden text-xl font-bold'>≣</button>

    {
      toggleMenu && (
        <>  
        <div onClick={() => setToggleMenu(false)} className='fixed inset-0 bg-black/50 ' />     
         <div className='fixed bg-black top-0 bottom-0 left-0 w-[70%] px-1 py-1'>
          <div className='flex xl:hidden w-full text-2xl  items-center justify-end px-3 text-white'>
         <button onClick={() => setToggleMenu(false)} className=''>✖</button>
          </div>
          <Sidebar />
        </div>
        </>

      )
    }
    </div>
  )
}

export default Header
