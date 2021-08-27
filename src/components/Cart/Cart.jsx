import React, { useEffect, useState  } from "react";
import ApplyLoader from "../Loader/ApplyLoader";
import CartTable from "./CartTable";
import CartEmpty from "./CartEmpty";
import { useCartContext } from "../../context/CartContext";
import { useGeneralDataContext } from "../../context/GeneralContext";
import { Container} from 'react-bootstrap';

const Cart = ApplyLoader(({ visibility }) => {
  const { showLoader, hideLoader } = useGeneralDataContext();
  const { hasItemsInCart } = useCartContext();

  const delayLoad = () => {
    showLoader();
    setTimeout(() => hideLoader(), 500);
  };

  useEffect(delayLoad, [showLoader, hideLoader]);

  return (
    <Container fluid center className={`container p-4 ${visibility}`}>
      {hasItemsInCart() ? (
        <>
          <CartTable />
        </>
      ) : (
        <>
          <CartEmpty />
        </>
      )}
      </Container>
  );
});

export default Cart;
