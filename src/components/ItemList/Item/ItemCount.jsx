import React, { useState, useEffect } from "react";

import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import "./ItemCount.scss";



const ItemCount = ({ initial, stock, count, setCount, unPrice }) => {

  const handleIncrement = () => {
    count < stock ? setCount(count + 1) : console.log("Máximo alcanzado");
  };

  const handleDecrement = () => {
    count > initial ? setCount(count - 1) : console.log("Mínimo alcanzado");
  };

  return (
    <div className="counter" style={{ width: "15rem" }}>
      <div className="counter__content">
        <div className="counter__content-controls d-flex">
            
          <button
            className="btn btn-outline-secondary btn-sm btn__counter"
            onClick = {handleDecrement}
            disabled = {count == initial}
          >
            <RemoveIcon />
          </button>
          <span className="counter__content-controls-value"> &nbsp;{count}&nbsp; </span>
          <button
            className="btn btn-outline-secondary btn-sm  btn__counter" 
            onClick={handleIncrement}
            disabled = {count == stock}
          >
            <AddIcon />
          </button>
          <span className="counter__total"> &nbsp;&nbsp;&nbsp;&nbsp;Pedido:&nbsp; ($ {unPrice*count} )</span>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;