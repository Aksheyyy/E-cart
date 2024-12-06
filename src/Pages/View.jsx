import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../Redux/slices/wishlistSlice'
import { addToCart } from '../Redux/slices/cartSlice'

const View = () => {
  const myCart = useSelector(state=>state.cartReducer)
 const myWishlist = useSelector(state=>state.wishlistReducer)
 const dispatch = useDispatch()

  const [product,setProducts] = useState({})
  const {id}= useParams()
  // console.log(id);

 useEffect(()=>{
  if(sessionStorage.getItem("allProducts")){
    const allProducts =JSON.parse(sessionStorage.getItem("allProducts"))
    setProducts(allProducts.find(item=>item.id==id))
  }
 },[])
//  console.log(product);
const handleWishlist = (product)=>{
  if(myWishlist?.includes(product)){
    alert("Product already in your wishlist!!")
  }else{
    //add product
    dispatch(addToWishlist(product))
  }
}

 const handleAddToCart = (product)=>{
  const existingProduct = myCart?.find(item=>item.id==product.id)
  if(existingProduct){
    dispatch(addToCart(product))
    alert("Product quantity is incrementing!!!")
  }else{
    dispatch(addToCart(product))
  }
 }
 
  
  return (
    <>
    <Header/>
    <div style={{minHeight:'80vh'}} className='flex justify-center items-center mt-5'>
        <div className='grid grid-cols-2 items-center'>
          <img style={{width:'100%',height:'200px'}} src={product?.thumbnail} alt="" />
          <div>
            <h3>{product?.id}</h3>
            <h1 className='text-3xl font-bold'>{product?.title}</h1>
            <h4 className='font-bold text-red-500 text-xl'>${product?.price}</h4>
            <p><span className='font-bold'>Description: </span>{product?.description}</p>
            <div className='flex justify-around m-5'>
              <button onClick={()=>handleWishlist(product)} className='bg-blue-600 text-white p-2 rounded'>Add To Wishlist</button>
              <button onClick={()=>handleAddToCart(product)} className='bg-green-600 text-white p-2 rounded'>Add To Cart</button>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default View