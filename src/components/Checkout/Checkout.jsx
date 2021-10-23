import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { StoreContext } from "../../store/StoreProvider";
import ErrorPage from "../ErrorPage/ErrorPage";
import Order from "./subcomponents/Order";
import Success from "./subcomponents/Success";
import Summary from "./subcomponents/Summary";

const Checkout = () => {
  const { checkoutStep } = useContext(StoreContext);

  const stepStyles = (numb) => {
    if (checkoutStep === numb) {
      return "font-weight-bold border p-2";
    } else if (checkoutStep > numb) {
      return "font-weight-bold";
    }
  };
  const showIcon = (numb) => {
    if (checkoutStep > numb) {
      return (
        <span className="text-success">
          <i className="fa fa-check"></i>
        </span>
      );
    }
  };
  const stepsMap = (
    <div className="d-flex justify-content-around align-items-center m-4">
      <div className={stepStyles(1)}>Krok 1 {showIcon(1)}</div>
      <div className={stepStyles(2)}>Krok 2 {showIcon(2)}</div>
      <div className={stepStyles(3)}>Krok 3 {showIcon(3)}</div>
      <div className={stepStyles(4)}>Krok 4 {showIcon(4)}</div>
    </div>
  );
  return (
    <div className="container">
      {stepsMap}
      <Switch>
        <Route path="/checkout" exact render={() => <ErrorPage />} />
        <Route path="/checkout/order" render={() => <Order />} />
        <Route path="/checkout/summary" render={() => <Summary />} />
        <Route path="/checkout/success" render={() => <Success />} />
        <Redirect to="/"></Redirect>
      </Switch>
    </div>
  );
};

export default Checkout;
