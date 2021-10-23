import React, { useContext } from "react";
import { StoreContext } from "../../../store/StoreProvider";

const AddToCartButton = (id) => {
  const { items, cartStatus, setCartStatus, setTotalPrice, setNewToast } =
    useContext(StoreContext);

  const isAlreadyInCart = cartStatus.filter((i) => {
    if (i.id == id) return i;
  });

  const handleClickButton = (e) => {
    const itemId = e.target.getAttribute("data-value");
    const selectedItem = items.filter((i) => (itemId == i.id ? i : null));
    const prices = [];

    if (isAlreadyInCart.length > 0) {
      setNewToast({
        name: selectedItem[0].title,
        option: "remove",
        destination: "cart",
      });

      const itemIndex = cartStatus.findIndex((i) => id === i.id);
      let newArray = [...cartStatus];
      newArray.splice(itemIndex, 1);
      setCartStatus(newArray);
      newArray.map((i) => prices.push(i.price));
      const sumPrices = prices.reduce((a, b) => a + b, 0);
      const orderPrice = (Math.round(sumPrices * 100) / 100).toFixed(2);
      setTotalPrice(orderPrice);
      return;
    } else {
      setNewToast({
        name: selectedItem[0].title,
        option: "add",
        destination: "cart",
      });
      const newArray = cartStatus.concat(selectedItem);
      setCartStatus(newArray);

      newArray.map((i) => prices.push(i.price));
      const sumPrices = prices.reduce((a, b) => a + b, 0);
      const orderPrice = (Math.round(sumPrices * 100) / 100).toFixed(2);
      setTotalPrice(orderPrice);
    }
  };

  return (
    <button
      className={
        isAlreadyInCart.length
          ? "btn btn-light border px-4"
          : "btn btn-success px-4"
      }
      data-value={id}
      onClick={handleClickButton}
    >
      {cartStatus.findIndex((i) => id === i.id) === -1 ? (
        <i data-value={id} className="fa fa-cart-plus"></i>
      ) : (
        <i data-value={id} className="fa fa-minus-square"></i>
      )}
    </button>
  );
};

export default AddToCartButton;
