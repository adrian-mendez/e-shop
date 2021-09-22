import { NavLink } from 'react-router-dom';

import './item.css'
const Item = ({ item }) => {

    if (!item) {
        return <h1>Cargando...</h1>
    }

    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={item?.pictureUrl} className="card-img-top"/>
            <div className ="card-body">
            <h5 className ="card-title">{item?.title}</h5>
            <p className ="card-text">Precio: <strong>${item?.price}</strong></p>
            <NavLink to={`/producto/${item.id}`} activeClassName="NavLink" className ="btn btn-primary">Ver detalles</NavLink>
            </div>
        </div>
    )
}

export default Item;