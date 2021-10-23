import React from "react";
import elegant from "../../../images/elegant.jpg";

const HomeHeader = () => {
  return (
    <>
      <div className="col-md-4 d-flex justify-content-center">
        <img src={elegant} alt="" style={{ maxWidth: "100%" }} />
      </div>
      <div className="col-md-8 bg-light d-flex flex-column justify-content-center align-items-center p-3">
        <h3 className="px-3 ">
          MainShop to miejsce gdzie znajdziesz dla siebie{" "}
          <span className="text-success"> najlepszej jakości </span>
          produkty, które uzupełniają twój wizerunek.
        </h3>
        <p className="px-3">
          Wybierając nasze produkty masz pewność, że korzystasz z najbardziej
          zaufanego portalu w roku 2020. Chcesz nas lepiej poznac ? Zapraszamy
        </p>
      </div>
    </>
  );
};

export default HomeHeader;
