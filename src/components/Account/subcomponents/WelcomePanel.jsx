import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../../store/StoreProvider";
import BenefitsPanel from "./BenefitsPanel";
import LoginPanel from "./LoginPanel";

const WelcomePanel = () => {
  const { guest, setGuest } = useContext(StoreContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const registerPanel = (
    <div className="col-md-5 mb-3 mx-1 bg-light p-4">
      <div className="d-flex justify-content-center flex-column m-auto">
        <h3 className="text-center my-5">Nie masz jeszcze konta ?</h3>
        <Link
          to="/register"
          className="btn btn-primary w-50 m-auto"
          onClick={() => {
            setGuest(false);
          }}
        >
          Zarejestruj się
        </Link>
      </div>
    </div>
  );

  const guestPanel = (
    <div className="col-md-10 text-center m-3 p-3 bg-light">
      <h3>Kontynuuj jako gość</h3>
      <Link
        to="/register"
        onClick={() => {
          setGuest(true);
        }}
        className="btn btn-primary w-50 m-auto"
      >
        Dalej
      </Link>
    </div>
  );

  return (
    <div className="container">
      <p className="text-center m-3 display-4">Witaj w MainShop !</p>
      <div className="row justify-content-md-center">
        <LoginPanel />
        {registerPanel}
        {guest && guestPanel}
        <BenefitsPanel />
      </div>
    </div>
  );
};

export default WelcomePanel;
