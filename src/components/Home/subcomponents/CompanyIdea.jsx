import React from "react";
import luxus from "../../../images/luksus.jpg";

const CompanyIdea = () => {
  return (
    <div className="col-md-12 d-flex bg-light flex-column justify-content-center align-items-center p-3 mx-auto mt-3">
      <blockquote className="blockquote text-center">
        <p className="mb-2 display-4 bptitle">
          „Nie potrafimy podać niezawodnego przepisu na sukces, ale możemy podać
          przepis na porażkę: staraj się wszystkich zadowolić”.
        </p>
        <footer className="blockquote-footer">
          CEO <cite title="Source Title"> of MainShop</cite>
        </footer>
      </blockquote>
      <div className="row justify-content-center align-items-center p-3">
        <div className="col-md-4">
          <img src={luxus} alt="" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
          <p>
            To motto jest filarem naszej filozofii. Dlatego właśnie nasze
            produkty zaprojektowane są by spełnić oczekiwania najbardziej
            wymagających klientów.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyIdea;
