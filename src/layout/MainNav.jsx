import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";
import { StoreContext } from "../store/StoreProvider";
import Search from "../components/Search/Search";

const MainNav = () => {
  const { cartStatus, setCategory, isLoggedIn, setGuest, setInCheckout } =
    useContext(StoreContext);

  const shopLi = (
    <li className="nav-item dropdown">
      <NavLink
        className="nav-link dropdown-toggle"
        to="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Sklep
      </NavLink>
      <div
        className="dropdown-menu"
        aria-labelledby="navbarDropdown d-flex flex-column"
      >
        <Link
          className="dropdown-item closeNav"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          to="/shop"
          onClick={() => {
            setCategory("all");
          }}
        >
          Wszystkie produkty
        </Link>
        <div className="dropdown-divider"></div>
        <Link
          className="dropdown-item closeNav"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          to="/shop/mens-clothing/all"
          onClick={() => {
            setCategory(`men's clothing`);
          }}
        >
          Moda męska
        </Link>
        <Link
          className="dropdown-item closeNav"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          to="/shop/jewelery/all"
          onClick={() => {
            setCategory("jewelery");
          }}
        >
          Biżuteria
        </Link>
        <Link
          className="dropdown-item closeNav"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          to="/shop/electronics/all"
          onClick={() => {
            setCategory("electronics");
          }}
        >
          Elektronika
        </Link>
        <Link
          className="dropdown-item closeNav"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          to="/shop/womens-clothing/all"
          onClick={() => {
            setCategory(`women's clothing`);
          }}
        >
          Moda damska
        </Link>
      </div>
    </li>
  );

  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <div className="container fullsize">
        <Link
          className="navbar-brand closeNav"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          to="/"
        >
          MainShop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link closeNav"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                to="/about"
              >
                O nas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link closeNav"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                to="/contact"
              >
                Kontakt
              </NavLink>
            </li>
            {shopLi}
          </ul>
          <Search />
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link closeNav"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                onClick={() => {
                  setGuest(false);
                  setInCheckout(false);
                }}
                to={isLoggedIn ? "/account" : "/welcome"}
              >
                {isLoggedIn ? "Twoje konto" : "Zaloguj"}
              </NavLink>
            </li>
            <li
              className="nav-item closeNav"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <NavLink className="nav-link" to="/favourites">
                Ulubione
              </NavLink>
            </li>
            <li
              className="nav-item closeNav"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <NavLink className="nav-link" to="/shopping-cart">
                Koszyk ({cartStatus.length})
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
