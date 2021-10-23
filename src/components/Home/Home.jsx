import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header/Header";
import CompanyIdea from "./subcomponents/CompanyIdea";
import HomeHeader from "./subcomponents/HomeHeader";
import CompanyProducts from "./subcomponents/CompanyProducts";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <HomeHeader />
          <CompanyIdea />
          <CompanyProducts />
          <div className="col-md-12 d-flex flex-column justify-content-center mx-auto my-5 px-0">
            <Link to="/shop" className="btn btn-outline-success my-2 my-sm-0">
              Zapraszamy do sklepu
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
