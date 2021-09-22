
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({ item }) => {
    if (!item) {
        return <h1>Cargando...</h1>
    }
    return (
        <div>
        <h1 className="productos">Producto</h1>
        
        <div className="d-flex justify-content-center">
            
            <div className="col-6 text-center">
                <img src={item?.pictureUrl} className="card-img-top" />
                <div className="card-body">
                    <h3 className="card-title">{item?.title}</h3>
                    <p className="card-text">{item?.description}</p>
                    <h5 className="card-text">${item?.price}</h5>
                    <div><ItemCount /></div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ItemDetail;