import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../../store/StoreProvider";
import RandomItems from "../../ShoppingCart/RandomItems";

const Success = () => {
  const { setCheckoutStep } = useContext(StoreContext);
  useEffect(() => {
    window.scrollTo(0, 0);
    setCheckoutStep(4);
  }, []);
  return (
    <div>
      <p className="display-4 text-center mb-5">
        Gratulacje! Dokonałeś świetnego wyboru
      </p>
      <div className="alert alert-success mb-5" role="alert">
        Szczegóły zamówienia znajdziesz w zakładce{" "}
        <Link to="/account" className="alert-link">
          Twoje konto
        </Link>
      </div>
      <div className="alert alert-secondary mb-5" role="alert">
        Jeżeli potrzebujesz czegoś jeszcze , zapraszamy do{" "}
        <Link to="/shop" className="alert-link">
          sklepu.
        </Link>
      </div>
      <RandomItems />
    </div>
  );
};

export default Success;
