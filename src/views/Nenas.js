
import { useState, useEffect } from 'react'
import ItemList from '../components/ItemList/itemList';

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
          
      
      ]
      setTimeout(() => resolve(ropa), 2000)
  })
}

const Nenas = () => {

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
          <h1 className="productos">Ropa de niñas</h1>
      
        
         <div className="itemContainer">
         <ItemList products={products}/>
         </div>
      </div>
    );
  }
  
  export default Nenas;