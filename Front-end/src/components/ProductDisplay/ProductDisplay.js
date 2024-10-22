import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext'



const ProductDisplay = ({product}) => {
    
    const {addToCart} = useContext(ShopContext);
  return (
    
        <div className='containerForBoth'>
      <div className='containerForImage'>
        <div className='big-img'><img src={product.image} alt=''/></div>
        <div className='container-img'>
          <img src={product.image} alt=''/>
          <img src={product.image} alt=''/>
          <img src={product.image} alt=''/>
          <img src={product.image} alt=''/>
        </div>
      </div>  
      <div className='containerForValues'>
        <h4>{product.name}</h4><h3>{product.category}</h3>
        <p>Price: <span className='newPrice'>${product.new_price} </span>Price: <span className='oldPrice'>${product.old_price}</span> </p>
      </div>
    <button onClick={()=>{addToCart(product.id)}}> Add To Cart </button>
    </div>
    
  )
}

export default ProductDisplay