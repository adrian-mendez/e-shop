import { useContext } from 'react';
import CartContext from '../../context/CartContext'
import './CartWidget.css'

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)
    return(
        <button className="Button" >
           <i className="fas fa-shopping-bag margin"></i>
            {getQuantity()}
        </button>
  
    );
}

export default CartWidget
