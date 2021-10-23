import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../store/StoreProvider";
import Item from "../Shop/subcomponents/Item";

const RandomItems = () => {
  const { items } = useContext(StoreContext);
  const itemsToShow = () => {
    const itemsList = [];
    for (let i = 0; i < 3; i++) {
      if (items.length > 0) {
        const itemIndex = Math.floor(Math.random() * items.length);
        itemsList.push(items[itemIndex]);
      }
    }
    return itemsList;
  };
  return (
    <div>
      <h4 className="text-center m-3">Proponowane produkty</h4>
      <div className="row">
        <div className="col-md-9 mx-auto row">
          <Item searchedItems={itemsToShow()} short={true} />
        </div>
        <div className="col-md-6 mx-auto">
          <Link to="/shop" className="btn btn-success w-100">
            Przejdź do sklepu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RandomItems;
