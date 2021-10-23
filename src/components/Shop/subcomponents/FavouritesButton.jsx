import React, { useContext } from "react";
import { StoreContext } from "../../../store/StoreProvider";

const FavouritesButton = (id) => {
  const { items, favouritesList, setFavouritesList, setNewToast } =
    useContext(StoreContext);

  const isAlreadyFavourite = favouritesList.filter((i) => {
    if (i.id == id) return i;
  });

  const handleClick = (e) => {
    const itemId = e.target.getAttribute("data-value");
    const selectedItem = items.filter((i) => (itemId == i.id ? i : null));

    if (isAlreadyFavourite.length > 0) {
      setNewToast({
        name: selectedItem[0].title,
        option: "remove",
        destination: "fav",
      });
      const itemIndex = favouritesList.findIndex((i) => id === i.id);
      let newArray = [...favouritesList];
      newArray.splice(itemIndex, 1);
      setFavouritesList(newArray);
      return;
    } else {
      setFavouritesList(favouritesList.concat(selectedItem));
      setNewToast({
        name: selectedItem[0].title,
        option: "add",
        destination: "fav",
      });
    }
  };
  return (
    <button
      className={
        isAlreadyFavourite.length ? "btn border px-4" : "btn btn-light px-4"
      }
      data-value={id}
      onClick={handleClick}
    >
      {favouritesList.findIndex((i) => id === i.id) === -1 ? (
        <i data-value={id} className="fa fa-heart"></i>
      ) : (
        <i data-value={id} className="fa fa-heart text-danger"></i>
      )}
    </button>
  );
};

export default FavouritesButton;
