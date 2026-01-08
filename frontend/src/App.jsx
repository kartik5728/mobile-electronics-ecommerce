import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/exports'
import { Home, About, Login, Contact } from './pages/exports'

const App = () => {
  return (
    <>
      <div>
        <Routes>

        {/* Pages with Header and Footer */}
        <Route element={<MainLayout />}>
            <Route path='/' element={<Home />}/> 
            <Route path='/about' element={<About />} /> 
            <Route path='/contact' element={<Contact />} />
        </Route>

        {/* Pages without header and footer */}
        <Route path='/login' element={<Login />} />

      </Routes>
      </div>
    </>
  )
}

export default App
