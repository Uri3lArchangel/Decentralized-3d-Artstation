import Image from 'next/image'
import React from 'react'
import img1  from '../../imgs/temp/s1.jpeg'

function Category(props) {
    let theme = props.theme
  return (
    <div className={theme.categoryContainer}>
    <ul className={theme.outerCategoryList}>
      <li>
        
        <ul className={theme.innerCategoryList}>
        Furniture
        <div>
          <li className={theme.categoryMain}>
            
         <Image alt='temp1' src={img1} layout='intrinsic' />
          <div className={theme.innerListDetails}>
         <h1>Product Name</h1>
          <h5>Price</h5>
          <p>Categories</p>
          <p>Item Rating</p>
          <progress id='rating' className={theme.ratingProgressBar} value="3.6" max="5">
            
          </progress>
          <span className='ml-2'>3.6</span>
          </div>
         </li>
         </div>
        </ul>
        </li> 
        <li>
          <ul className={theme.innerCategoryList}>
          Vehicles
          <div>
          <li className={theme.categoryMain}>
           <Image alt='temp1' src={img1} layout='intrinsic' />
           <div className={theme.innerListDetails}>
            <h1>Product Name</h1>
             <h5>Price</h5>
             <p>Categories</p>
             <p>Item Rating</p>
              <progress id='rating' className={theme.ratingProgressBar} value="3.6" max="5"></progress>
          <span className='ml-2'>3.6</span>
          </div>
         </li>
        </div>
        </ul>
        </li>
        
    </ul>
  </div>
  )
}

export default Category