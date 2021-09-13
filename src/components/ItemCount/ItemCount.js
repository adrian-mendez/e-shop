import { useState } from "react";
import "./ItemCount.css";

const ItemCount = () => {
  const [count, setCount] = useState(1);

  const substract = () => {
      if(count <= 1) {
          console.log('nada')
      } else {
          setCount(count - 1)
      }
  }

  return (
    <>
      <div className="ItemCount">
        <button className="buttonCart" onClick={substract}>-</button>
        <p>{count}</p>
        <button className="buttonCart" onClick={() => setCount(count + 1)}>+</button>
      </div>
    </>
  );
};

export default ItemCount;
