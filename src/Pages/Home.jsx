import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../Redux/slices/productSlice'

const Home = () => {
  const dispatch = useDispatch()
  const {allProducts,loading,error} = useSelector(state=>state.productReducer)
  // console.log(allProducts);
  const [CurrentPage,setCurrentPage] = useState(1)
  const productPerPage = 8
  const totalPages = Math.ceil(allProducts?.length/productPerPage)
  const currentPageLastProductIndex = CurrentPage * productPerPage
  const currentPageStartProductIndex = currentPageLastProductIndex - productPerPage
  const visibleProductsCards = allProducts?.slice(currentPageStartProductIndex,currentPageLastProductIndex) 
  
  useEffect(()=>{
    dispatch(fetchAllProducts())
  },[])

  const navigateToNextPage = ()=>{
    if(CurrentPage!=totalPages){
      setCurrentPage(CurrentPage+1)
    }
  }

  const navigateToPreviousPage = ()=>{
    if(CurrentPage!=1){
      setCurrentPage(CurrentPage-1)
    }
  }
  return (
    <>
    <Header insideHome={true}/>
     <div style={{marginTop:'80px'}} className='container mx-auto px-4'>
      {
        loading ?
        <div className="flex justify-center items-center font-bold">
          <img width={"100px"} height={'100px'} className='me-4' src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1260.gif" alt="" />
        </div>
        :
        <div className='grid grid-cols-4 gap-4'>
        {
          allProducts.length>0?
            visibleProductsCards?.map(product=>(
              <div key={product.id} className='rounded border p-2 shadow'>
                <img style={{width:'100%'}} src={product?.thumbnail} alt="" />
                <div className='text-center'>
                  <h3 className='text-xl font-bold'>{product?.title}</h3>
                  <Link className='bg-blue-500 text-white p-1 inline-block rounded' to={`/${product?.id}/view`}>View More</Link>
                </div>
              </div>
            ))
          :
          <div className="font-bold text-center mt-5 mb-5 text-red-600">
            Product not found
          </div>
        }
      </div>

      }
    </div>

    <div className='flex justify-center items-center mt-5 mb-5'>
      <span onClick={navigateToPreviousPage} style={{cursor:'pointer'}} className='fa-solid fa-backward me-3'> </span>
      <span className='font bold'>{CurrentPage} of {totalPages}</span>
      <span onClick={navigateToNextPage} style={{cursor:'pointer'}}><i className='fa-solid fa-forward ms-5'></i></span>
    </div>
    </>
   
  )
}

export default Home