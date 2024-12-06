import React from 'react'
import Header from '../Components/Header'
import cartImg from '../assets/EmptyCart.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishListItem } from '../Redux/slices/wishlistSlice'
import { addToCart } from '../Redux/slices/cartSlice'


const Wishlist = () => {

  const myCart = useSelector(state=>state.cartReducer)

  const myWishlist = useSelector(state=>state.wishlistReducer)
  const dispatch = useDispatch()

  const handleAddToCart = (product)=>{
    const existingProduct = myCart?.find(item=>item.id==product.id)
    if(existingProduct){
      dispatch(addToCart(product))
      dispatch(removeWishListItem(product.id))
      alert("Product quantity is incrementing!!!")
    }else{
      dispatch(addToCart(product))
      dispatch(removeWishListItem(product.id))
    }
   }
  return (
    <>
    <Header/>
     <div style={{marginTop:'80px'}} className='container mx-auto px-4'>

      {
        myWishlist.length>0?
        
        <>
        <h1 className='text-red-500 text-3xl font-bold mb-5'>Your wishlist</h1>
        {
          myWishlist?.map(product=>(
            <div className='grid grid-cols-4 gap-4'>
              <div key={product.id} className='rounded border p-2 shadow'>
              <img style={{width:'100%'}} src={product?.thumbnail} alt="" />
                  <div className='text-center'>
                    <h3 className='text-xl font-bold'>{product?.title}</h3>
                    <div className='flex justify-evenly mt-3'>
                      <button onClick={()=>dispatch(removeWishListItem(product?.id))} className='text-xl'><i className="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
                      <button onClick={()=>handleAddToCart(product?.id)} className='text-xl'><i className="fa-solid fa-cart-plus text-green-600"></i></button>
                    </div>
                  </div>
                </div>
              </div>
          ))
        }
        </>
        :
        <div style={{height:'100vh'}} className="flex flex-col items-center justify-center w-full">
          <img style={{width:'100%', height:'80%',objectFit:'contain'}} src={cartImg} alt="Empty cart image" />
          <h1 className='font-bold text-xl'>Your wishlist is empty</h1>
        </div>
      }
    </div>
    </>
  )
}

export default Wishlist