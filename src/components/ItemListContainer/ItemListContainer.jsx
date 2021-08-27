import React, { useEffect, useState } from "react";
import ApplyLoader from "../Loader/ApplyLoader";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useGeneralDataContext } from "../../context/GeneralContext";
import { requestProducts } from "../../scripts/firebaseConfig";
import { Container, CardColumns} from 'react-bootstrap';

const ItemListContainer = ApplyLoader(({ visibility }) => {
  const { categoryName } = useParams();

  const [itemsFiltered, setItemsFiltered] = useState([]);

  const { showLoader, hideLoader } = useGeneralDataContext();

  const getProductsByCategory = () => {
    const onResponse = (response) => setItemsFiltered(response);
    const onFinally = () => hideLoader();
    const applyFilter = Boolean(categoryName);

    showLoader();
    requestProducts(onResponse, onFinally, applyFilter, categoryName);
  };

  useEffect(getProductsByCategory, [categoryName, showLoader, hideLoader]);

  return (
    <>
      <Container
        fluid="sm"
        className={`container p-4 ${visibility}`}>
        <h1
          className="text-center">
          Bienvenid@ a la tienda
        </h1>
        <CardColumns
          className="justify-content-md-center p-4">
            <ItemList items={itemsFiltered} />
        </CardColumns>
      </Container>
    </>
  );
});

export default ItemListContainer;
