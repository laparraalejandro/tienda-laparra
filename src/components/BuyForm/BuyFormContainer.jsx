import React, { useEffect, useState } from "react";
import BuyForm from "./BuyForm";
import BuyFormSuccess from "./BuyFormSuccess";
import { useCartContext } from "../../context/CartContext";
import { createOrder, updateProductsStock } from "../../scripts/firebaseConfig";
import { Container } from 'react-bootstrap';

const BuyFormContainer = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [isFinished, setIsFinished] = useState(false);
  const [orderId, SetOrderId] = useState(null);

  const { cart, clearCart, calculateTotal, updateCart } = useCartContext();

  const submitHandler = (event) => {
    event.preventDefault();

    const ErrorNotification = (items) => {
        alert("Some of your products are out of stock. Your cart has been updated")
        updateCart(items);
    };

    const submitOrder = (target) => {
      const orderInformation = {
        client: {
          name: target.fullname.value,
          email: target.email.value,
          telephone: target.telephone.value,
        },
        items: cart.map(({ product: { id, title, price }, quantity }) => ({
          id,
          title,
          price,
          quantity,
        })),
        date: new Date().toLocaleString(),
        total: calculateTotal(),
      };

      const successfulBuy = (orderId) => {
         SetOrderId(orderId);
         setIsFinished(true);
         clearCart();
      };

    createOrder(orderInformation, successfulBuy);
    };

    updateProductsStock(cart).then(({ items, hasErrorOnSubmit }) => {
      if (hasErrorOnSubmit) ErrorNotification(items);
      else {
        submitOrder(event.target)
      };
    });
  };

  return (
    <>
      {!(isFinished && orderId) ? (
        <>
          <main className="home">
            <Container
              fluid
              center
              className="p-4">
              <BuyForm submitHandler={submitHandler} />
            </Container>
          </main>
        </>
      ) : (
        <>
          <BuyFormSuccess orderId={orderId} />
        </>
      )}
    </>
  );
};

export default BuyFormContainer;

