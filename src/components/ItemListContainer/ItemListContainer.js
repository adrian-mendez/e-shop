import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
 
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebase/firebase'
import { collection, getDocs, query, where } from '@firebase/firestore'


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { categoryid } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        
        if(!categoryid) {
            setLoading(true)
            getDocs(collection(db, 'items')).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                setProducts(products)
            }).catch((error) => {
                console.log('Error searching items', error)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            setLoading(true)
            getDocs(query(collection(db, 'items'), where('category', '=', categoryid))).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data()}
                })
                setProducts(products)
            }).catch((error) => {
                console.log('Error searching items', error)
            }).finally(() => {
                setLoading(false)
            })
        }

        return (() => {
            setLoading(true)
            setProducts([])
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