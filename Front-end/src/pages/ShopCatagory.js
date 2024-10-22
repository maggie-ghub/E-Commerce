import React, { useContext } from 'react'
import './Css/ShopCategory.css' 
import { ShopContext } from '../Context/ShopContext'
import Item from '../components/Item/Item'
import dropdown_icon from '../components/Assets/dropdown_icon.png'

const ShopCatagory = (items) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={items.banner} alt='' />
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 products 
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt='' />
        </div>
      </div>
      <div className='shopcategory-products'>
        {all_product.map((item, i) => {
          if(items.category === item.category){
            return <Item item={item} />
          }
          else{
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default ShopCatagory