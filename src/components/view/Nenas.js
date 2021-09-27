import { useState, useEffect } from 'react'
import React from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const products = [
          
    {id: 1, name: "Body de niña", description: "Body para beba super canchero", price: '$ 500', stock: 20,img: '../images/body-nena.png'},
    {id: 2, name: "Jardinero de niña", description: "Jardinero para beba super canchero", price: '$ 1500',stock: 18, img: '../images/jardinero-nena.png'},
    {id: 3, name: "Pantalón de niña", description: "Pantalón para beba super canchero", price: '$ 1200', stock: 22,img: '../images/pantalon-nena.png'},
    {id: 4, name: "Short de niña", description: "Short para beba super canchero", price: '$ 600', stock: 10,img: '../images/short-nena.png'},
    {id: 5, name: "Short de niña", description: "Short para beba super canchero", price: '$ 700', stock: 12,img: '../images/short-nena2.png'},
    {id: 6, name: "Short de niña", description: "Short para beba super canchero", price: '$ 550', stock: 12,img: '../images/short-nena3.png'},
    {id: 7, name: "Vestido", description: "Vestido para beba super canchero", price: '$ 800', stock: 17,img: '../images/vestido.png'},
    {id: 8, name: "Vestido", description: "Vestido para beba super canchero", price: '$ 900', stock: 18, img: '../images/vestido2.png'},
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
          <h1 className="productos">Ropa de niñas</h1>
      
        
         <div className="itemContainer">
         <ItemList products={products}/>
         </div>
      </div>
    );
  }
  
  export default Nenes;