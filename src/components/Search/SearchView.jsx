import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../store/StoreProvider";
import ItemsShowList from "../Shop/subcomponents/ItemsShowList";
import { useLocation } from "react-router-dom";
import RandomItems from "../ShoppingCart/RandomItems";

const SearchView = () => {
  const { items } = useContext(StoreContext);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const searchedItem = location.state.searchedItem.search.toLowerCase();

  const itemsToShow = items.filter(
    (i) => !i.title.toLowerCase().indexOf(`${searchedItem}`)
  );
  return (
    <div className="container">
      <div className="row">
        {itemsToShow.length === 0 ? (
          <div className="col-md-12">
            <div className="col-md-10 mx-auto" style={{ minHeight: "30vh" }}>
              <p className="text-center font-weight-bold my-5">
                Brak wyszukiwanych produktów
              </p>{" "}
            </div>
            <RandomItems />
          </div>
        ) : (
          <div className="row justify-content-center">
            <ItemsShowList
              itemsArray={itemsToShow}
              searchedItems={itemsToShow}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchView;
