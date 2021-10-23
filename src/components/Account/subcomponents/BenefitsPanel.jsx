import React from "react";

const BenefitsPanel = () => {
  const benefitsEl = [
    { icon: "fa fa-fighter-jet", text: "Zamawiaj szybciej !" },
    { icon: "fa fa-list-ol", text: "Sprawdzaj poprzednie zamówienia" },
    { icon: "fa fa-car", text: "Śledź status zamówienia" },
    { icon: "fa fa-percent", text: "Korzystaj z rabatów i promocji" },
  ];

  const showBenefits = () => {
    return benefitsEl.map((i) => {
      return (
        <div className="col-md-5 m-2 bg-white p-3">
          <p className="text-center">
            <i className={i.icon}></i>
          </p>
          <p className="text-center"> {i.text}</p>
        </div>
      );
    });
  };

  return (
    <div className="col-md-10 p-4 bg-light">
      <div>
        <h3 className="text-center p-3 ">
          Dlaczego warto mieć konto w MainShop ?
        </h3>
        <div className="row justify-content-center">{showBenefits()}</div>
      </div>
    </div>
  );
};

export default BenefitsPanel;
