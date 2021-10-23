import React, { useContext } from "react";
import { StoreContext } from "../../../store/StoreProvider";

const SummaryPanel = ({ buttonFn, blockBtn }) => {
  const { totalPrice } = useContext(StoreContext);
  return (
    <div className="col-md-10 mx-auto bg-light pt-3">
      <div className="row">
        <div className="col-md-9 mx-auto">
          <div className="d-flex">
            <p className="flex-grow-1">Wartośc koszyka</p>
            <p>{totalPrice} $</p>
          </div>
          <div className="d-flex justify-content-around">
            <p className="flex-grow-1">Dostawa</p>
            <p>0.00 $</p>
          </div>
          <div className="d-flex justify-content-around border-bottom border-dark mb-4">
            <p className="flex-grow-1">Płatność</p>
            <p>0.00 $</p>
          </div>
          <div className="d-flex justify-content-around font-weight-bold">
            <p className="flex-grow-1">Do zapłaty</p>
            <p>{totalPrice}$</p>
          </div>
          <div className="text-center m-4">
            <button
              disabled={blockBtn}
              onClick={buttonFn}
              className="btn btn-success w-75"
            >
              Przejdź do podsumowania{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryPanel;
