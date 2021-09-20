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
            <button className ="btn btn-primary">Ver detalles</button>
            </div>
        </div>
    )
}

export default Item;