import React from "react";
import { useCartContext } from "../../context/CartContext";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Fab from '@material-ui/core/Fab';

const CartWidget = () => {
  const { getItemsCount, hasItemsInCart } = useCartContext();

  return (
    <>
      <ShoppingCartIcon fontSize="large" />
      &nbsp;<Fab 
        size="small" 
        color="secondary" 
        aria-label="add"
        className={
          `tag is-small ${
            hasItemsInCart() ?
            "" :
            "d-none"}`}>
        {getItemsCount()}
      </Fab>
    </>
  );
};

export default CartWidget;
