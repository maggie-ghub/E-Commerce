import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>New Collections</h1>
        <hr />
        <div className='collections'>
            {new_collection.map((item,i)=>{
                return <Item key={i} item={item} />
            })}
        </div>
    </div>
  )
}

export default NewCollections