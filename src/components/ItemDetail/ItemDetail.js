import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import UserContext from '../../context/UserContext'
import './ItemDetail.css'
const ItemDetail = ({ product, productsAdded, addProdFunction }) => {
    const [count, setCount] = useState(0)
    const { user } = useContext(UserContext)

    if (!product) {
        return <h3>{`Ese producto ya no existe`}</h3>
    }

    return (
        <div>
            <h1 className="productos">Producto</h1>
            <div className="card" style={{width: "20rem"}}>
                <div className="col-12 text-center">
                    <img src={product.img} alt={product.name} className="card-img-top" />
                    <div className="card-body">

                        <h3 className="card-title">{product.name}</h3>
                        <p className="card-text">{product.description}</p>
                        
                        <h5 className="card-text">{`Precio: $ ${product.price} `}</h5>
                        <p className="card-text">{`Stock: ${product.stock} `} </p>
                       

                        {
                            count === 0 && user
                                ? <ItemCount product={product} productsAdded={productsAdded} addProdFunction={addProdFunction} setCount={setCount} />
                                : user
                                    ? <Link to='/cart'><button className="Button">Ir al carrito</button></Link>
                                    : <Link to='/login'><button className="Button">Login</button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail