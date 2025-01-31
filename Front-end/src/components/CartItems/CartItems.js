import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import './CartItems.css'

const CartItems = () => {

    const {all_product, cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className='cartitems-format-main' >
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return(
                      <div> 
                        <div className='cartitems-format cartitems-format-main'>
                            <img src={e.image}  alt='' className='carticon-product-icon' />
                            <p className='forPara'>{e.name}</p>
                            <p className='forPara'>${e.new_price}</p>
                            <button className='cartitems-quantity' >{cartItems[e.id]}</button>
                            <p>{e.new_price * cartItems[e.id]}</p>
                            <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=''  />
                        </div>
               
                      </div>)
            }
            return null;
        })}
        
    </div>
  )
}

export default CartItems