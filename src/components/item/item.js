import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ product }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>

      <img src={product.img} alt={product.name} className="card-img-top" />
      <div className="card-body">

        <h5 className="card-title">{product.name}</h5>

        
        <p className="card-text">
        <strong>{`Precio: ${product.price} `}</strong>
        </p>
        {product.quantity &&
          <h6 className="card-text">
            {`Cantidad a comprar: ${product.quantity} `}
          </h6>
        }
        {!product.quantity && <Link to={`/item/${product.id}`} className="btn btn-primary">Comprar</Link>}
      
      </div>
    </div>
  )
}
export default Item;