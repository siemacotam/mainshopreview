import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../../store/StoreProvider";
import Item from "./Item";
import Pagination from "./Pagination";

const ItemsShowList = ({ itemsArray, searchedItems }) => {
  const { setCategory, items } = useContext(StoreContext);

  useEffect(() => {
    return () => {
      setCategory("all");
    };
  }, []);

  return (
    <div className="col-md-9">
      <h2 className="mb-4" id="panel">
        Wybierz coś dla siebie{" "}
      </h2>
      {items.length ? (
        <>
          {" "}
          <div className="row">
            <Item searchedItems={searchedItems} />
          </div>
          <Pagination itemsArray={itemsArray} />
        </>
      ) : (
        <p>Błąd podczas pobierania produktów. Proszę odświeżyć stronę</p>
      )}
    </div>
  );
};

export default ItemsShowList;
