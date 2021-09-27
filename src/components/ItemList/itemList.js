import React from 'react'
import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({products}) => {

  if(products.length === 0) {
    return <h3>No hay productos</h3>
  } 

  return (
    <div className="lista">
      {products.map(product =><Item key={product.id} product={product}/>)}
    </div>
  )
}
export default React.memo(ItemList)