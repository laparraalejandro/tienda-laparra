import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const BuyFormSuccess= ({ orderId }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <div className="container">
      <div className="py-5 text-center mt-5">
        <h2 className="mt-5">¡Gracias por elegirnos!</h2>
        <h4 className="my-5">La compra se ha realizado exitosamente.</h4>
        <strong>El ID de tu compra es : {orderId}</strong>
        <p className="danger">Sport Store</p>
        <Link className="btn btn-outline-primary m-3" to={`/`}>
          <strong>Volver a la Tienda</strong>
        </Link>
      </div>
    </div>
  </>
  );
};

export default BuyFormSuccess;

