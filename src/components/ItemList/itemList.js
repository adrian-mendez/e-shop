import Item from '../item/item';
import './ItemList.css'

const ItemList = ({ products }) => {

    return (
        <div className="lista">  
        
            {products.map(prod => {
                return <Item key={prod.id} item={prod}/>
            })}
        </div>
    )
}

export default ItemList;