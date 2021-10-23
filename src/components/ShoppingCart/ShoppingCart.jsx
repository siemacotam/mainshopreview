import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../store/StoreProvider";
import RandomItems from "./RandomItems";
import electronics from "../../images/electronics.jpg";
import jewelery from "../../images/jewelery.jpg";
import mensclothing from "../../images/mensclothing.jpg";
import womensclothing from "../../images/womensclothing.jpg";
import WebMap from "../Shop/subcomponents/WebMap";

const ShoppingCart = (ordered) => {
  const {
    cartStatus,
    setCartStatus,
    isLoggedIn,
    setGuest,
    setInCheckout,
    setTotalPrice,
    totalPrice,
  } = useContext(StoreContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const kindOfImg = (kind) => {
    if (kind === "electronics") {
      return electronics;
    } else if (kind === "jewelery") {
      return jewelery;
    } else if (kind === `men's clothing`) {
      return mensclothing;
    } else if (kind === `women's clothing`) {
      return womensclothing;
    }
  };

  const handleRemoveClick = (e) => {
    const itemId = e.target.getAttribute("data-value");
    const itemIndex = cartStatus.findIndex((i) => i.id == itemId);
    let newList = [...cartStatus];
    newList.splice(itemIndex, 1);
    setCartStatus(newList);

    const prices = [];
    newList.map((i) => prices.push(i.price));
    const sumPrices = prices.reduce((a, b) => a + b, 0);
    const orderPrice = (Math.round(sumPrices * 100) / 100).toFixed(2);
    setTotalPrice(orderPrice);
  };

  const cartItems = () => {
    if (cartStatus.length > 0) {
      const itemBodies = cartStatus.map((i) => {
        return (
          <div className="col-md-12">
            <div className="card mb-2 flex-row justify-content-center align-items-center">
              <img
                className="card-img-top p-1"
                style={{ width: "70px" }}
                src={kindOfImg(i.category)}
                alt={i.title}
              />
              <div className="card-body">
                <div className="d-flex ">
                  <p className="card-title mb-0 flex-grow-1 d-flex align-items-center font-weight-bold">
                    {i.title}
                  </p>
                  <div className="d-flex align-items-center justify-content-center flex-column">
                    <p className="mx-0 mb-0 d-flex align-items-center">
                      {i.price.toFixed(2)}$
                    </p>
                    <button
                      className="btn btn-danger m-0 p-1"
                      data-value={i.id}
                      onClick={handleRemoveClick}
                    >
                      Usuń
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
      return itemBodies;
    } else {
      return (
        <div className="m-5" style={{ minHeight: "30vh" }}>
          <p className="text-center">
            {" "}
            Brak produktów w koszyku. Przejdź do sklepu i wybierz coś dla
            siebie.
          </p>
        </div>
      );
    }
  };

  const summaryPanel = (
    <div className="col-md-12 border border-dark mx-auto p-4 bg-light">
      <div className="d-flex align-items-center">
        <p className="card-title font-weight-bold mb-0 flex-grow-1 p-2">
          Łączna kwota <span>{totalPrice}</span> $
        </p>
        <Link
          to={isLoggedIn ? "/checkout/order" : "/welcome"}
          className="btn btn-success"
          onClick={() => {
            !isLoggedIn && setGuest(true);
            setInCheckout(true);
          }}
        >
          Przejdź do dostawy
        </Link>
      </div>
    </div>
  );

  return (
    <div className="container py-3 px-0 mb-3">
      <div className="border bg-light">
        <div className="my-3">
          <p className="font-weight-bold text-center text-uppercase">
            {ordered.ordered
              ? "Wybrane produkty"
              : `Koszyk (${cartStatus.length})`}
          </p>
        </div>
        {cartItems()}
        {!ordered.ordered && cartStatus.length > 0 && summaryPanel}
      </div>
      {!ordered.ordered && <RandomItems />}
    </div>
  );
};

export default ShoppingCart;
