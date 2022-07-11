import React from 'react'

const ItemList = ({itemsCelulares}) => {

    return (
    <>
     { itemsCelulares.map((item)=>(
            <h2>{item.name}</h2>
        ))
        
        }
    
    </>
    
  )
}

export default ItemList;