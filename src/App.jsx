import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import View from './Pages/View'
import Cart from './Pages/Cart'
import Wishlist from './Pages/Wishlist'
import Pnf from './Pages/Pnf'
import Footer from './Components/Footer'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/:id/view' element={<View/>} />  {/* : indicates a path parameter, path parameter will be stored in the varible "id"*/}
        <Route path='/*' element={<Pnf/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
