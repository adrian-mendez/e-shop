import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { getProducts } from '../../products'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { categoryid } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const list = getProducts(categoryid)
        list.then(list => {
            setProducts(list)
            setLoading(false)
        })

        return (() => {
            setProducts([])
            setLoading(true)
        })

    }, [categoryid])


    return (
        <div>
          <h1 className="productos">Productos</h1>

            <div className="itemContainer" >
                {loading ? "Loading.." : <ItemList products={products} />}
            </div>
        </div>
    )

}

export default ItemListContainer