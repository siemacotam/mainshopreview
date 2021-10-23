import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../../store/StoreProvider";

const WebMap = ({ position }) => {
  const { category } = useContext(StoreContext);
  useEffect(() => {
    document.getElementById("okruszki").scrollIntoView();
  }, []);

  const shopBody = (
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      <li className="breadcrumb-item">
        <Link to="/shop">Shop</Link>
      </li>
      <li className="breadcrumb-item active">{category}</li>
    </ol>
  );

  const otherBody = () => {
    return (
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">{position}</li>
      </ol>
    );
  };

  return (
    <div id="okruszki" className="container px-0">
      <nav aria-label="breadcrumb">
        {!position && shopBody}
        {position && otherBody()}
      </nav>
    </div>
  );
};

export default WebMap;
