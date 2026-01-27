import { Outlet } from 'react-router-dom'
import { Sidebar, Header, Footer } from './../components/exports'

const MainLayout = () => {
    return (
        <>
            <div className="flex w-full">
                {/* Left Navbar */}
                <div className='hidden xl:block bg-black w-[18%] min-h-screen'>
                    <Sidebar />
                </div>

                {/* Main Content */}
                <div className='w-full'>
                    <Header />

                    <main className='mx-5 my-3'>
                        <Outlet />
                    </main>

                    <Footer />
                </div>
            </div>


        </>
    )
}

export default MainLayout
