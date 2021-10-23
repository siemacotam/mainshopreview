import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { StoreContext } from "../../../store/StoreProvider";

import { paymentMethods } from "../../../store/StoreProvider";
import ShoppingCart from "../../ShoppingCart/ShoppingCart";
import SummaryPanel from "./SummaryPanel";

const Summary = () => {
  const {
    setCheckoutStep,
    guestData,
    activeUser,
    setCartStatus,
    setOrders,
    orders,
    cartStatus,
    totalPrice,
  } = useContext(StoreContext);
  const location = useLocation();
  const history = useHistory();
  const [blockBtn, setBlockBtn] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCheckoutStep(3);
  }, []);

  useEffect(() => {
    if (Boolean(!guestData) && Boolean(!activeUser)) {
      history.push("/error");
      console.log(Boolean(!guestData) && Boolean(!activeUser));
    }
  }, []);
  useEffect(() => {
    if (cartStatus.length === 0) {
      setBlockBtn(true);
    } else {
      setBlockBtn(false);
    }
  }, [cartStatus]);

  const userData = activeUser;
  const guestInfoData = guestData;
  let orderInfo = location.state.order;
  orderInfo.price = totalPrice;
  orderInfo.items = cartStatus;
  orderInfo.dateOfOrder = new Date().toLocaleString();
  const { id, dateOfOrder, items, user, price, delivery, payment } = orderInfo;

  const handleAcceptButton = () => {
    if (cartStatus.length > 0) {
      setCartStatus([]);
      setOrders(orders.concat(orderInfo));
      history.push({
        pathname: "/checkout/success",
        state: {
          order: orderInfo,
        },
      });
    }
  };

  const handleChangeDataButton = () => {
    history.push("/checkout/order");
  };

  const userDataPanel = (
    <div className="col-md-7 my-2 p-3 bg-light">
      <p className="font-weight-bold border-bottom border-dark pb-2">
        Dane osobowe
      </p>
      <div>
        <p className="font-weight-bold m-0 pt-3 border-bottom">
          {userData ? userData.nameAndSurname : guestInfoData.nameAndSurname}
        </p>
        <small className="text-muted">Imię i nazwisko</small>
        <p className="font-weight-bold m-0 pt-3 border-bottom">
          {userData ? userData.adress : guestInfoData.adress}
        </p>
        <small className="text-muted">Adres</small>
        <p className="font-weight-bold m-0 pt-3 border-bottom">
          {userData ? userData.postCodeCity : guestInfoData.postCodeCity}
        </p>
        <small className="text-muted">Adres pocztowy i miejscowość</small>
        <p className="font-weight-bold m-0 pt-3 border-bottom">
          {userData ? userData.phone : guestInfoData.phone}
        </p>
        <small className="text-muted">Numer telefonu dla kuriera</small>
      </div>
    </div>
  );

  const deliveryAndPaymentPanel = (
    <div className="col-md-5 my-2 row ">
      <div className="col-md-12 p-3 bg-light mb-2">
        <p className="font-weight-bold border-bottom border-dark pb-2">
          Dostawa
        </p>
        <p>{delivery}</p>
      </div>
      <div className="col-md-12 p-3 bg-light mt-2">
        <p className="font-weight-bold border-bottom border-dark pb-2">
          Sposób płatności
        </p>
        <p>{paymentMethods[payment - 1]}</p>
      </div>
    </div>
  );

  return (
    <div>
      <h3 className="bg-light p-3 rounded">Podsumowanie</h3>
      <div className="row justify-content-between">
        {userDataPanel}
        {deliveryAndPaymentPanel}
      </div>
      <div className="col-md-10 text-center mx-auto m-2">
        <button
          className="btn btn-success w-50"
          onClick={handleChangeDataButton}
        >
          Edytuj dane
        </button>
      </div>
      <div className="col-md-12 p-0 bg-light">
        <ShoppingCart ordered={true} />
      </div>
      <SummaryPanel buttonFn={handleAcceptButton} blockBtn={blockBtn} />
    </div>
  );
};

export default Summary;
