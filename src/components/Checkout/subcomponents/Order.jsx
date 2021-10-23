import React, { useContext, useEffect, useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { useHistory } from "react-router";
import { StoreContext } from "../../../store/StoreProvider";
import UserInfo from "../../Account/subcomponents/UserInfo";
import SummaryPanel from "./SummaryPanel";

const Order = () => {
  const [rulesCheckbox, setRulesCheckbox] = useState(false);
  const [placeCheckbox, setPlaceCheckbox] = useState(false);
  const [opinionCheckbox, setOpinionCheckbox] = useState(false);
  const [missingInput, setMissingInput] = useState(false);
  const {
    activeUser,
    cartStatus,
    paymentMethod,
    setPaymentMethod,
    guestData,
    setCheckoutStep,
    totalPrice,
  } = useContext(StoreContext);
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
    setCheckoutStep(2);
  }, []);

  const handleRulesCheckboxChange = (e) => {
    const data = e.target.checked;
    setRulesCheckbox(data);
  };
  const handlePlaceCheckboxChange = (e) => {
    const data = e.target.checked;
    setPlaceCheckbox(data);
  };
  const handleOpinionCheckboxChange = (e) => {
    const data = e.target.checked;
    setOpinionCheckbox(data);
  };

  const userData = activeUser;
  const guestInfoData = guestData;

  useEffect(() => {
    if (Boolean(!guestInfoData) && Boolean(!activeUser)) {
      history.push("/error");
    }
  }, []);

  const delivery = (
    <div className="col-md-5 bg-light m-3 p-4">
      <h4 className="mb-3">1.Sposób dostawy</h4>
      <div className="d-flex p-2">
        <Accordion className="flex-grow-1">
          <Card>
            <Accordion.Toggle
              className="d-flex align-items-center"
              as={Card.Header}
            >
              <input type="checkbox" checked className=" m-2" />
              <p className="m-2">Kurier DPD</p>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0" className="show">
              <Card.Body>
                <small className="text-muted">( Bezpłatnie )</small>
                <p>Dostawa do 4 dni roboczych</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );

  const payment = (
    <div className="col-md-5 bg-light m-3 p-4">
      <h4 className="mb-3">2. Metoda płatności</h4>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="0"
            className="d-flex align-items-center"
            onClick={() => setPaymentMethod(1)}
          >
            <input
              type="checkbox"
              checked={paymentMethod === 1}
              className="m-2"
            />
            <p className="m-2">
              BLIK <small className="text-muted"> (bezpłatnie)</small>
            </p>
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>Sfinalizuj tranzakcje używając kodu BLIK.</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="1"
            className="d-flex align-items-center"
            onClick={() => setPaymentMethod(2)}
          >
            <input
              type="checkbox"
              checked={paymentMethod === 2}
              className="m-2"
            />
            <p className="m-2">
              Karta płatnicza online{" "}
              <small className="text-muted"> (bezpłatnie)</small>
            </p>
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>
                Zostaniesz przeniesiony na stronę swojego banku gdzie
                sfinalizujesz tranzakcję.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="2"
            className="d-flex align-items-center"
            onClick={() => setPaymentMethod(3)}
          >
            <input
              type="checkbox"
              checked={paymentMethod === 3}
              className="m-2"
            />
            <p className="m-2">
              Przelew gotówkowy{" "}
              <small className="text-muted"> (bezpłatnie)</small>
            </p>
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <p>Zamówienie wyślemy, kiedy otrzymamy od Ciebie wpłatę.</p>
              <p>Pamiętaj, żeby w tytule przelewu wpisać numer zamówienia</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="3"
            className="d-flex align-items-center"
            onClick={() => setPaymentMethod(4)}
          >
            <input
              type="checkbox"
              checked={paymentMethod === 4}
              className="m-2"
            />
            <p className="m-2">
              Przy odbiorze <small className="text-muted"> (bezpłatnie)</small>
            </p>
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <p>Płatność realizowania przy odbiorze towaru.</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );

  const consents = (
    <div className="col-md-5 bg-light m-3 p-4">
      <h4 className="mb-4">4. Zgody formalne</h4>
      <div>
        <label className="d-flex">
          <input
            type="checkbox"
            className="m-2"
            onClick={handleRulesCheckboxChange}
          />
          <p> Akceptuje regulamin sklepu.* </p>
        </label>
        {missingInput && !rulesCheckbox ? (
          <p>
            <small className="text-danger">Pole wymagane</small>
          </p>
        ) : null}
      </div>
      <div>
        <label className="d-flex">
          <input
            type="checkbox"
            className="m-2"
            onClick={handlePlaceCheckboxChange}
          />
          <p>
            {" "}
            Oświadczam, że posiadam stałe miejsce zamieszkania/ siedziby/ pobytu
            na terytorium RP.*
          </p>
        </label>
        {missingInput && !placeCheckbox ? (
          <p>
            <small className="text-danger">Pole wymagane</small>
          </p>
        ) : null}
      </div>
      <div>
        <label className="d-flex">
          <input
            type="checkbox"
            className="m-2"
            onClick={handleOpinionCheckboxChange}
          />
          <p>Chcę podzielic się opinią o satysfakcji z zakupów.</p>
        </label>
      </div>
      <small className="text-muted">*- zgody wymagane</small>
    </div>
  );

  const handleCompleteOrder = () => {
    if (rulesCheckbox && placeCheckbox) {
      let newOrder = {
        id: Math.random() * 1000000000,
        dateOfOrder: new Date().toLocaleString(),
        items: cartStatus,
        user: userData || guestInfoData,
        price: totalPrice,
        delivery: "Kurier DPD",
        payment: paymentMethod,
        acceptOpinionRequest: opinionCheckbox,
      };
      history.push({
        pathname: "/checkout/summary",
        state: {
          order: newOrder,
        },
      });
    } else {
      setMissingInput(true);
      alert("uzupelnij wszystkie dane oraz checkboxy");
    }
  };

  return (
    <>
      <div>
        <h3 className="bg-light p-3 rounded">Dostawa i płatność</h3>
        <div className="row justify-content-center ">
          {delivery}
          {payment}
          <div className="col-md-5 bg-light m-3 p-4">
            <h4 className="mb-3">3. Dane odbiorcy</h4>
            <UserInfo />
          </div>
          {consents}
        </div>
      </div>
      <SummaryPanel buttonFn={handleCompleteOrder} />
    </>
  );
};

export default Order;
