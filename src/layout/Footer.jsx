import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store/StoreProvider";
import Newsletter from "./subcomponents/Newsletter";

const Footer = () => {
  const { setCategory } = useContext(StoreContext);

  const shopCategories = (
    <div className="col-sm-4">
      <div className="d-flex flex-column footer-a">
        <p className="font-weight-bold my-3">Kategorie</p>
        <Link
          to="/shop/mens-clothing/all"
          onClick={() => {
            setCategory(`men's clothing`);
          }}
          className="my-2"
        >
          Moda męska
        </Link>
        <Link
          to="/shop/womens-clothing/all"
          onClick={() => {
            setCategory(`women's clothing`);
          }}
          className="my-2"
        >
          Moda damska
        </Link>
        <Link
          to="/shop/electronics/all"
          onClick={() => {
            setCategory("electronics");
          }}
          className="my-2"
        >
          Elektronika
        </Link>
        <Link
          to="/shop/jewelery/all"
          onClick={() => {
            setCategory("jewelery");
          }}
          className="my-2"
        >
          Bizuteria
        </Link>
      </div>
    </div>
  );
  const shopSections = (
    <div className="col-sm-4">
      <div className="d-flex flex-column footer-a">
        <Link to="/" className="font-weight-bold my-3">
          MainShop
        </Link>
        <Link to="/" className="my-2">
          Strona główna
        </Link>
        <Link to="/about" className="my-2">
          O nas
        </Link>
      </div>
    </div>
  );
  const shopOthers = (
    <div className="col-sm-4 footer-a">
      <div className="d-flex flex-column footer-a">
        <Link className="font-weight-bold my-3">
          <div></div>
        </Link>
        <Link to="/contact" className="my-2">
          Kontakt
        </Link>
        <Link to="/" className="my-2">
          Polityka prywatności
        </Link>
      </div>
    </div>
  );

  return (
    <footer className="bg-secondary text-white pt-4 mt-4">
      <div className="container pb-5">
        <div className="row">
          <div className="col-md-8">
            <div>
              <h4 className="my-3">MainShop</h4>
              <div
                style={{
                  borderBottom: "1px solid black",
                  lineHeight: "0.5em",
                  position: "relative",
                }}
              ></div>
            </div>
            <div className="row">
              {shopCategories}
              {shopSections}
              {shopOthers}
            </div>
          </div>
          <Newsletter />
        </div>
      </div>
      <div className="second-footer py-4 d-flex justify-content-center align-items-center ">
        <p className="text-white mb-0">Prawa zastrzeżone @ MainShop 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
