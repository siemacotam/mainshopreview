import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <div className="jumbotron-bg"></div>
        <h1 className="display-4">Witamy w MainShop</h1>
        <p className="lead">Znajdziesz tu wszystko, czego potrzebujesz ...</p>
        <Link className="btn btn-lg btn-primary" to="/shop">
          Przejdź do sklepu
        </Link>
      </div>
    </div>
  );
};

export default Header;
