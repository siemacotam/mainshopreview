import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import electronics from "../../../images/electronics.jpg";
import jewelery from "../../../images/jewelery.jpg";
import mensclothing from "../../../images/mensclothing.jpg";
import womensclothing from "../../../images/womensclothing.jpg";
import AddToCartButton from "./AddToCartButton";
import FavouritesButton from "./FavouritesButton";

const ItemInfo = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { title, rating, image, description, price, id, kind } =
    location.state.itemObject;

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

  const imgCarousel = (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src={kindOfImg(kind)}
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={kindOfImg(kind)}
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={kindOfImg(kind)}
            alt="Third slide"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );

  const amountSelect = (
    <select className="form-select" aria-label="select" disabled>
      <option selected value="1">
        1
      </option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="3">more</option>
    </select>
  );

  return (
    <div className="container">
      <div
        className="row my-3 align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <div className="col-md-10 mx-auto">
          <h4 className="text-center font-weight-bold m-3">{title}</h4>
          <div className="row justify-content-center">
            <div className="col-sm-4 mb-1">{imgCarousel}</div>
            <div className="col-sm-7 mb-1 bg-light d-flex align-items-center">
              <p className="text-center text-special p-3">{description}</p>
            </div>
            <div className="col-md-10 p-3">
              <p className=" font-weight-bold text-center">
                Średnia ocen tego produktu wg. naszych użytkowników to{" "}
                <span className="text-success font-weight-bold">
                  {rating.rate}
                </span>
                . {rating.count} osób wyraziło swoją opinię na jego temat.
              </p>
            </div>
            <div className="col-md-5 py-3 row justify-content-around">
              <p className="m-0 d-flex align-items-center">
                Cena :{" "}
                <span className="font-weight-bold"> {price.toFixed(2)}$</span>
              </p>
              <div className="d-flex">
                <p className="m-0 pr-3 d-flex align-items-center">Ilość: </p>
                {amountSelect}
              </div>
            </div>
            <div className="col-md-5 py-3 d-flex justify-content-around">
              {FavouritesButton(id)}
              {AddToCartButton(id)}
              <button
                className="btn border px-4"
                onClick={() => history.goBack()}
              >
                <i className="fa fa-chevron-left"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
