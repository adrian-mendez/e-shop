import { useState } from "react";
import "./ItemCount.css";


const ItemCount = ({stock}) => {
  const [count, setCount] = useState(1);

  const substract = () => {
      if(count <= 1) {
          console.log('nada')
      } else {
          setCount(count - 1)
      }
  }

  const sumar = () => {
    if(count < stock) {
      setCount(count + 1)
    } 
  }

  return (
    <>
      <div className="ItemCount">
        <button className="buttonCart" onClick={substract}>-</button>
        <p>{count}</p>
        <button className="buttonCart" onClick={sumar}>+</button>
      </div>
    </>
  );
};

export default ItemCount;
