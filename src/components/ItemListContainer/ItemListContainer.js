import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';



const ItemListContainer = (props) => {
    return <>

        <h1> { props.titulo } </h1>   
         <ItemCount initial={1} stock={6} />

    </>
}

export default ItemListContainer;