import { Link } from 'react-router-dom'
import './Item.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const Item = ({ product }) => {
  const { removeProduct } = useContext(CartContext)

  return (
    <div className="card" style={{ width: "18rem" }}>

      <img src={product.img} alt={product.name} className="card-img-top" />
      <div className="card-body">

        <h5 className="card-title">{product.name}</h5>

        
        <p className="card-text">
        <strong>{`Precio: $ ${product.price} `}</strong>
        </p>
        {product.quantity &&
          <h6 className="card-text">
            {`Cantidad a comprar: ${product.quantity} `}
          </h6>
        }
        { product?.quantity
         ? <button onClick={() => removeProduct(product.id)} className="btn btn-primary">Quitar del carrito</button>        
         : <Link to={`/item/${product.id}`} className="btn btn-primary">Comprar</Link>}
      
      </div>
    </div>
  )
}
export default Item;