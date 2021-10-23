import React, { useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { StoreContext } from "../../store/StoreProvider";
import ItemInfo from "./subcomponents/ItemInfo";
import ItemsList from "./subcomponents/ItemsList";
import ItemsShowList from "./subcomponents/ItemsShowList";
import WebMap from "./subcomponents/WebMap";

export const itemsPerPage = 9;

const Shop = () => {
  const { items, category } = useContext(StoreContext);
  const [itemsArray, setItemsArray] = useState("");

  useEffect(() => {
    const correctItems = [];
    items &&
      items.filter((i) => {
        if (i.category === category || category === "all") {
          correctItems.push(i);
        }
      });
    setItemsArray(correctItems);
  }, [category]);

  const shopBody = (whatKind = category) => {
    return (
      <div className="container">
        <WebMap />
        <main className="row">
          <ItemsList />
          <ItemsShowList itemsArray={itemsArray} />
        </main>
      </div>
    );
  };

  return (
    <Switch>
      <Route path="/shop" exact render={() => shopBody("all")} />
      <Route
        path={[
          "/shop/mens-clothing/all",
          "/shop/mens-clothing/new",
          "/shop/mens-clothing/bestsellers",
          "/shop/mens-clothing/sale",
        ]}
        render={() => shopBody("men's clothing")}
      />
      <Route
        path={[
          "/shop/jewelery/all",
          "/shop/jewelery/new",
          "/shop/jewelery/bestsellers",
          "/shop/jewelery/sale",
        ]}
        render={() => shopBody("jewelery")}
      />
      <Route
        path={[
          "/shop/electronics/all",
          "/shop/electronics/new",
          "/shop/electronics/bestsellers",
          "/shop/electronics/sale",
        ]}
        render={() => shopBody("electronics")}
      />
      <Route
        path={[
          "/shop/womens-clothing/all",
          "/shop/womens-clothing/new",
          "/shop/womens-clothing/bestsellers",
          "/shop/womens-clothing/sale",
        ]}
        render={() => shopBody("women's clothing")}
      />
      <Route path="/shop/product" render={() => <ItemInfo />} />
    </Switch>
  );
};

export default Shop;
