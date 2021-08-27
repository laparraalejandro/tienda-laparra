import React, { useEffect, useState } from "react";
import ApplyLoader from "../Loader/ApplyLoader";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";
import { useGeneralDataContext } from "../../context/GeneralContext";
import { requestProduct } from "../../scripts/firebaseConfig";
import { Container, Row, Col } from 'react-bootstrap';
import "./ItemDetail.css";

const ItemDetailContainer = ApplyLoader(({ visibility }) => {
  const { productID } = useParams();

  const [product, setProduct] = useState({ attributes: {} });

  const { showLoader, hideLoader } = useGeneralDataContext();

  const getProductById = () => {
    const onResponse = (response) => setProduct({ attributes: response });
    const onFinally = () => hideLoader();

    showLoader();
    requestProduct(onResponse, onFinally, productID);
  };

  useEffect(getProductById, [productID, showLoader, hideLoader]);

  return (
    <>
      <div className={`section ${visibility} Container-card`}>
        <Container fluid center>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <div>
                <ItemDetail item={product.attributes} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
});

export default ItemDetailContainer;

