import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/exports'
import { Home, Login, CreateProduct } from './pages/exports'


const App = () => {
  return (
    <>
      <div>
        <Routes>

          <Route element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/products/create' element={<CreateProduct />} />
          </Route>


          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </>
  )
}

export default App
