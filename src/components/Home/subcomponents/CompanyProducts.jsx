import React from "react";
import electronics from "../../../images/electronics.jpg";
import jewelery from "../../../images/jewelery.jpg";
import mensclothing from "../../../images/mensclothing.jpg";
import womensclothing from "../../../images/womensclothing.jpg";

const CompanyProducts = () => {
  return (
    <div className="col-md-12 mx-auto row p-0 justify-content-between">
      <p className="text-center m-4">
        Przez ponad 10 lat działalności zaufało nam już tysiące klientów. W
        bogatym asortymencie każdy znajdzie coś dla siebie i może zadbać o swój
        wizerunek już dziś. <strong>Przekonaj sie o tym sam !</strong>
      </p>
      <div className="col-md-2 p-0">
        <img src={mensclothing} alt="" className="w-100" />
        <p className="text-muted text-center">Moda męska</p>
      </div>
      <div className="col-md-2 p-0">
        <img src={womensclothing} alt="" className="w-100" />
        <p className="text-muted text-center">Moda damska</p>
      </div>
      <div className="col-md-2 p-0">
        <img src={jewelery} alt="" className="w-100" />
        <p className="text-muted text-center">Biżuteria</p>
      </div>
      <div className="col-md-2 p-0">
        <img src={electronics} alt="" className="w-100" />
        <p className="text-muted text-center">Elektronika</p>
      </div>
    </div>
  );
};

export default CompanyProducts;
