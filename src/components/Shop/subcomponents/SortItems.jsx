import React, { useState, useContext } from "react";
import { Accordion, Card } from "react-bootstrap";
import { StoreContext } from "../../../store/StoreProvider";

const SortItems = () => {
  const { sortItems, setSortItems } = useContext(StoreContext);
  const [priceUp, setPriceUp] = useState(false);
  const [priceDown, setPriceDown] = useState(false);
  const [az, setAz] = useState(false);
  const [za, setZa] = useState(false);
  const [rates, setRates] = useState(false);

  const resetSorting = () => {
    setPriceDown(false);
    setPriceUp(false);
    setAz(false);
    setZa(false);
    setRates(false);
  };

  const handlePriceUp = (e) => {
    document.getElementById("panel").scrollIntoView();
    resetSorting();
    const isChecked = e.target.checked;
    setPriceUp(isChecked);
    if (isChecked) {
      setSortItems("priceUp");
    } else {
      setSortItems("");
      setPriceUp(isChecked);
    }
  };
  const handlePriceDown = (e) => {
    document.getElementById("panel").scrollIntoView();
    resetSorting();
    const isChecked = e.target.checked;
    setPriceDown(isChecked);
    if (isChecked) {
      setSortItems("priceDown");
    } else {
      setSortItems("");
      setPriceDown(isChecked);
    }
  };
  const handleLettersUp = (e) => {
    document.getElementById("panel").scrollIntoView();
    resetSorting();
    const isChecked = e.target.checked;
    setAz(isChecked);
    if (isChecked) {
      setSortItems("az");
    } else {
      setSortItems("");
      setAz(isChecked);
    }
  };
  const handleLettersDown = (e) => {
    document.getElementById("panel").scrollIntoView();
    resetSorting();
    const isChecked = e.target.checked;
    setZa(isChecked);
    if (isChecked) {
      setSortItems("za");
    } else {
      setSortItems("");
      setZa(isChecked);
    }
  };
  const handleRates = (e) => {
    document.getElementById("panel").scrollIntoView();
    resetSorting();
    const isChecked = e.target.checked;
    setRates(isChecked);
    if (isChecked) {
      setSortItems("rates");
    } else {
      setSortItems("");
      setRates(isChecked);
    }
  };
  const variant = [
    { text: "Ceny rosnąco", fn: handlePriceUp, value: priceUp },
    { text: "Ceny malejąco", fn: handlePriceDown, value: priceDown },
    { text: "A - Z", fn: handleLettersUp, value: az },
    { text: "Z - A", fn: handleLettersDown, value: za },
    { text: "Wg opini", fn: handleRates, value: rates },
  ];
  const showVariants = () => {
    return variant.map((i) => {
      return (
        <div className="list-group-item list-group-item-action d-flex align-items-center">
          <input
            type="checkbox"
            className="m-2"
            onClick={i.fn}
            checked={i.value}
          />
          <p className="m-1">{i.text}</p>
        </div>
      );
    });
  };

  return (
    <Accordion>
      <Card className="mt-4">
        <Accordion.Toggle
          as={Card.Header}
          eventKey="0"
          className="card-header"
          // className="list-group-item list-group-item-action"
        >
          <a>Sortuj</a>
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="0">
          <Card.Body>{showVariants()}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default SortItems;
