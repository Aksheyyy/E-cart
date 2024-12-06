import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../Redux/slices/productSlice'



const Header = ({insideHome}) => {
  const dispatch = useDispatch()
  const myWishlist = useSelector(state=>state.wishlistReducer)
  const myCart = useSelector(state=>state.cartReducer)
  return (
    <nav className='flex w-full bg-sky-700 fixed top-0 p-3 items-center'>
      <Link className='text-white' to={"/"}><i class="fa-solid fa-truck me-1 text-white"></i>Ecart</Link>
      <ul className='flex-1 text-right'>
       {insideHome && <li className='list-none inline-block px-5'> <input onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} style={{width:"300px"}}  className='rounded p-1' type="text" placeholder='Search Products Here!' /></li> }
        <li className='list-none inline-block text-white px-5'><Link to={'/wishlist'}><i class="fa-solid fa-heart text-red-600 me-1"></i>Wishlist <span   className='bg-white rounded p-1 text-black'>{myWishlist.length}</span> </Link></li>
        <li className='list-none inline-block text-white px-5'><Link to={'/cart'}><i class="fa-solid fa-cart-shopping text-green-500 me-1"></i>Cart <span className='bg-white rounded p-1 text-black'>{myCart.length}</span></Link></li>
      </ul>
    </nav>
  )
}

export default Header