import { useState, useEffect } from 'react'
import './ItemListContainer.css'

import ItemList from '../ItemList/itemList';
const getProducts = () => {
    return new Promise((resolve, reject) => {
        const ropa = [
            {id: 1, title: "Body de niña", description: "Body para beba super canchero", price: 500, pictureUrl: '../images/body-nena.png'},
            {id: 2, title: "Jardinero de niña", description: "Jardinero para beba super canchero", price: 1500, pictureUrl: '../images/jardinero-nena.png'},
            {id: 3, title: "Pantalón de niña", description: "Pantalón para beba super canchero", price: 1200, pictureUrl: '../images/pantalon-nena.png'},
            {id: 4, title: "Short de niña", description: "Short para beba super canchero", price: 600, pictureUrl: '../images/short-nena.png'},
            {id: 5, title: "Short de niña", description: "Short para beba super canchero", price: 700, pictureUrl: '../images/short-nena2.png'},
            {id: 6, title: "Short de niña", description: "Short para beba super canchero", price: 550, pictureUrl: '../images/short-nena3.png'},
            {id: 7, title: "Vestido", description: "Vestido para beba super canchero", price: 800, pictureUrl: '../images/vestido.png'},
            {id: 8, title: "Vestido", description: "Vestido para beba super canchero", price: 900, pictureUrl: '../images/vestido2.png'},
            {id: 9, title: "Body de niño", description: "Body para bebe super canchero", price: 600, pictureUrl: '../images/body-nene.png'},
            {id: 10, title: "Body de niño", description: "Body para bebe super canchero", price: 700, pictureUrl: '../images/body-nene2.png'},
            {id: 11, title: "Conjunto de niño", description: "Conjunto para bebe super canchero", price: 900, pictureUrl: '../images/conjunto-nene.png'},
            {id: 12, title: "Conjunto de niño", description: "Conjunto para bebe super canchero", price: 600, pictureUrl: '../images/conjunto-nene2.png'},
            {id: 13, title: "Remera de niño", description: "Remera para bebe super canchero", price: 500, pictureUrl: '../images/remera-nene.png'},
            {id: 14, title: "Remera de niño", description: "Remera para bebe super canchero", price: 600, pictureUrl: '../images/remera-nene2.png'},
            {id: 15, title: "Short de niño", description: "Short para bebe super canchero", price: 500, pictureUrl: '../images/short-bebe.png'},
            {id: 16, title: "Short de niño", description: "Short para bebe super canchero", price: 600, pictureUrl: '../images/short-nene.png'},
            {id: 17, title: "Short de niño", description: "Short para bebe super canchero", price: 700, pictureUrl: '../images/short-nene2.png'},
        
        ]
        setTimeout(() => resolve(ropa), 2000)
    })
}

const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
      const listProducts = getProducts()
      listProducts.then(result => setProducts(result))
      return (() => {
        setProducts([])
      })
    }, [])

    if(products.length === 0) {
      return <h1>Cargando</h1>
    }
    
    return (
      <div>
          <h1 className="productos">Productos</h1>
      
        
         <div className="itemContainer">
         <ItemList products={products}/>
         </div>
      </div>
    );
  }
  
  export default Home;
  