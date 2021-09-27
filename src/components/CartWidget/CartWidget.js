import './CartWidget.css'
const CartWidget = (props) => {
    return(
        <button className="Button" >
           <i className="fas fa-shopping-bag margin"></i>
            {props.quantity}
        </button>
  
    );
}

export default CartWidget
