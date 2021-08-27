import React from "react";
import { Button } from 'react-bootstrap';

const ItemCount = ({ stock, count, onAdd, price }) => {

  return (
    <>
      <div className="counter" >
        <div className="counter__content">
          <div className="counter__content-controls d-flex">
            <Button
              className={
                `btn ${count == 1 ? 
                "btn-outline-success " :
                "btn-success "} btn-sm`
              }
              type="button"
              value={-1}
              disabled={count <= 1}
              onClick={onAdd}
              title="Decrement Count"
              aria-label="Decrement Count"
            >
              -
            </Button>
            <span className="counter__content-controls-value">
              &nbsp;&nbsp;{count}&nbsp;&nbsp;
            </span>
            <Button
              className={
                `btn ${
                  count >= stock ?
                    "btn-outline-success " :
                    "btn-success "
                  } btn-sm`
              }
              type="button"
              value={1}
              disabled={count >= stock}
              onClick={onAdd}
              title="Increment count"
              aria-label="Increment count"
            >
              +
            </Button>
            <span className="counter__total">
              &nbsp;&nbsp;&nbsp;&nbsp;Total:&nbsp; ($ {price * count} )
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCount;



