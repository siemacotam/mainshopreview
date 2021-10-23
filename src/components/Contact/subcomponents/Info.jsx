import React from "react";

import Mapa from "./Mapa";

const Info = () => {
  return (
    <div className="col-md-6">
      <div className="container bg-light p-3">
        <p className="text-center font-weight-bold">Main Shop</p>
        <p className="text-center font-weight-bold">ul. Migdałowa </p>
        <p className="text-center font-weight-bold">62-800 Kalisz</p>
        <div style={{ position: "relative", height: "400px" }}>
          <Mapa />
        </div>
      </div>
    </div>
  );
};

export default Info;
