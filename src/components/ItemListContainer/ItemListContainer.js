import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';



const ItemListContainer = (props) => {
    return <>

        <h1> { props.titulo } </h1>   
         <ItemCount stock="5"/>

    </>
}

export default ItemListContainer;