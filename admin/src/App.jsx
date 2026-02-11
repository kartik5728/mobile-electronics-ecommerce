import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/exports'
import { Home, Login, CreateProduct, ListProducts } from './pages/exports'
export const backendURL = import.meta.env.VITE_BACKEND_URL;
export const cloudfrontURL = import.meta.env.VITE_AWS_CLOUDFRONT_URL;

const App = () => {
  return (
    <>
      <div>
        <Routes>

          <Route element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/products/create' element={<CreateProduct />} />
            <Route path='/products' element={<ListProducts />} />
          </Route>


          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </>
  )
}

export default App
