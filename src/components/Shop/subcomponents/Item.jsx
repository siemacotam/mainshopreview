import React, { useContext } from "react";
import { StoreContext } from "../../../store/StoreProvider";
import { itemsPerPage } from "../Shop";
import AddToCartButton from "./AddToCartButton";
import FavouritesButton from "./FavouritesButton";
import electronics from "../../../images/electronics.jpg";
import jewelery from "../../../images/jewelery.jpg";
import mensclothing from "../../../images/mensclothing.jpg";
import womensclothing from "../../../images/womensclothing.jpg";
import { useHistory } from "react-router";

const Item = ({ searchedItems, short }) => {
  const { items, category, activePage, sortItems } = useContext(StoreContext);

  const history = useHistory();

  const errorMsg = (
    <p>
      Błąd podczas pobierania przedmiotów. Prosze odświeżyć stronę bądź
      spróbować później
    </p>
  );

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

  const itemToShow = (
    title,
    image,
    rating,
    description,
    type,
    price,
    id,
    kind
  ) =>
    items.length ? (
      <div className="col-md-4 d-flex">
        <div className="card mb-4">
          <img src={kindOfImg(kind)} alt={title} className="card-img-top" />
          {/* <img src={image} alt={title} className="card-img-top" /> */}
          <div className="card-body">
            <h3 className="card-title mb-0">
              {title.slice(0, 60)}
              {type === "new" && <span className="badge-success">New!</span>}
            </h3>
            {!short && (
              <p className="text-special">
                {description.substring(0, description.indexOf(".") + 1)}
              </p>
            )}
          </div>
          <div className="card-footer text-center">
            <div className="d-flex flex-column border-bottom mb-2">
              <p className=" font-weight-bold">Cena : {price.toFixed(2)} $</p>
              <p className=" font-weight-bold">
                Ocena : {rating.rate} ({rating.count})
              </p>
            </div>
            <div className="d-flex justify-content-around">
              {FavouritesButton(id)}
              <button
                className="btn btn-light px-4"
                onClick={() => {
                  history.push({
                    pathname: "/shop/product",
                    search: `?id=${id}`,
                    state: {
                      id: id,
                      itemObject: {
                        title,
                        image,
                        description,
                        type,
                        price,
                        id,
                        kind,
                        rating,
                      },
                    },
                  });
                }}
              >
                <i className="fa fa-search"></i>
              </button>
              {AddToCartButton(id)}
            </div>
          </div>
        </div>
      </div>
    ) : (
      { errorMsg }
    );
  const showItems = (elements = items) => {
    if (searchedItems) {
      elements = searchedItems;
    }
    if (elements) {
      // sorting

      if (sortItems === "priceUp") {
        elements.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      } else if (sortItems === "priceDown") {
        elements.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      } else if (sortItems === "az") {
        elements.sort((a, b) =>
          a.title > b.title ? 1 : b.title > a.title ? -1 : 0
        );
      } else if (sortItems === "za") {
        elements.sort((a, b) =>
          a.title < b.title ? 1 : b.title < a.title ? -1 : 0
        );
      } else if (sortItems === "rates") {
        elements.sort(
          (a, b) => parseFloat(b.rating.rate) - parseFloat(a.rating.rate)
        );
      } else {
        elements.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
      }

      const itemsToShow = elements
        .filter((i) => {
          if (category === "all" || i.category === category) {
            return i;
          }
        })
        .map((item) => {
          let kind = item.category;
          const { title, image, rating, description, type, price, id } = item;
          return itemToShow(
            title,
            image,
            rating,
            description,
            type,
            price,
            id,
            kind
          );
        });

      if (itemsToShow.length < itemsPerPage) {
        return itemsToShow;
      } else if (itemsToShow.length >= itemsPerPage) {
        const smallArray = itemsToShow.filter((i, index) => {
          if (
            index >= itemsPerPage * (activePage - 1) &&
            index < itemsPerPage * activePage
          ) {
            return i;
          }
        });
        return smallArray;
      } else {
        return errorMsg;
      }
    } else {
      return errorMsg;
    }
  };

  return <> {showItems()}</>;
};

export default Item;
