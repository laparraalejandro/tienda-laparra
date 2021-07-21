import React, {useContext}from "react";
import {CartContext} from '../../services/CartContext';

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const CartIcon = () =>{

  const{cart, quantityCart}=useContext(CartContext);

  return (
    <>
      {(cart.length == 0) ? (
        <ShoppingCartIcon fontSize="large" />
      ) : (
        <>
          <ShoppingCartIcon fontSize="large" />
          &nbsp;<Fab size="small" color="secondary" aria-label="add" className="">
            {quantityCart()}
          </Fab>
        </>
      )}
    </>
  )
};

export default CartIcon;