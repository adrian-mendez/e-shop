import { useState, useEffect } from 'react'
import React from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const products = [
          
    {id: 9, name: "Body de niño", description: "Body para bebe super canchero", price: '$ 600', stock: 16, img: '../images/body-nene.png'},
    {id: 10, name: "Body de niño", description: "Body para bebe super canchero", price: '$ 700', stock: 15,img: '../images/body-nene2.png'},
    {id: 11, name: "Conjunto de niño", description: "Conjunto para bebe super canchero", price: '$ 900', stock: 20,img: '../images/conjunto-nene.png'},
    {id: 12, name: "Conjunto de niño", description: "Conjunto para bebe super canchero", price: '$ 600', stock: 16,img: '../images/conjunto-nene2.png'},
    {id: 13, name: "Remera de niño", description: "Remera para bebe super canchero", price: '$ 500', stock: 13,img: '../images/remera-nene.png'},
    {id: 14, name: "Remera de niño", description: "Remera para bebe super canchero", price: '$ 600', stock: 18,img: '../images/remera-nene2.png'},
    {id: 15, name: "Short de niño", description: "Short para bebe super canchero", price: '$ 500',stock: 19, img: '../images/short-bebe.png'},
    {id: 16, name: "Short de niño", description: "Short para bebe super canchero", price: '$ 600',stock: 20, img: '../images/short-nene.png'},
    {id: 17, name: "Short de niño", description: "Short para bebe super canchero", price: '$ 700', stock: 17,img: '../images/short-nene2.png'},
]

const getProducts = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            category ? resolve(products.filter(prod =>prod.category === category)) : resolve(products)
        }, 1000)        
    })
}

const Nenes = () => {
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

    if(products.length === 0) {
      return <h1>Cargando</h1>
    }
    
    return (
      <div>
          <h1 className="productos">Ropa de niños</h1>
      
        
         <div className="itemContainer">
         <ItemList products={products}/>
         </div>
      </div>
    );
  }
  
  export default Nenes;