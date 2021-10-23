import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../store/StoreProvider";
import Item from "../Shop/subcomponents/Item";
import RandomItems from "../ShoppingCart/RandomItems";
import Pagination from "../Shop/subcomponents/Pagination";
import WebMap from "../Shop/subcomponents/WebMap";

const Favourites = () => {
  const { favouritesList } = useContext(StoreContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const showFav = () => {
    if (favouritesList.length > 0) {
      return (
        <div className="row">
          <div className="col-md-9 mx-auto row">
            <Item searchedItems={favouritesList} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="m-5" style={{ minHeight: "30vh" }}>
          <p className="text-center">Twoja lista życzeń jest pusta.</p>
        </div>
      );
    }
  };

  return (
    <div className="container py-3 px-0 mb-3">
      <WebMap position={"Ulubione"} />
      <div className="border bg-light">
        <div className="my-3">
          <p className="font-weight-bold text-center text-uppercase">
            Ulubione ({favouritesList.length})
          </p>
        </div>
        {showFav()}
        <div className="row">
          {favouritesList.length > 0 && (
            <div className="col-md-9 mx-auto row">
              <Pagination itemsArray={favouritesList} />
            </div>
          )}
        </div>
      </div>
      <RandomItems />
    </div>
  );
};

export default Favourites;
