import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Card } from "react-bootstrap";
import { StoreContext } from "../../../store/StoreProvider";
import SortItems from "./SortItems";

const ItemsList = () => {
  const { setCategory } = useContext(StoreContext);

  const bodies = [
    {
      linkTo: "mens-clothing",
      category: `men's clothing`,
      name1: "Najnowsze",
      arg1: "new",
      name2: "Bestsellery",
      arg2: "bestsellers",
      name3: "Wyprzedaż",
      arg3: "sale",
    },
    {
      linkTo: "jewelery",
      category: "jewelery",
      name1: "Najnowsze",
      arg1: "new",
      name2: "Bestsellery",
      arg2: "bestsellers",
      name3: "Wyprzedaż",
      arg3: "sale",
    },
    {
      linkTo: "electronics",
      category: "electronics",
      name1: "Najnowsze",
      arg1: "new",
      name2: "Bestsellery",
      arg2: "bestsellers",
      name3: "Wyprzedaż",
      arg3: "sale",
    },
    {
      linkTo: "womens-clothing",
      category: `women's clothing`,
      name1: "Najnowsze",
      arg1: "new",
      name2: "Bestsellery",
      arg2: "bestsellers",
      name3: "Wyprzedaż",
      arg3: "sale",
    },
  ];

  const cardBody = ({
    linkTo,
    category,
    name1,
    arg1,
    name2,
    arg2,
    name3,
    arg3,
  }) => {
    const linkFn = () => {
      setCategory(category);
      document.getElementById("panel").scrollIntoView();
    };
    return (
      <Card.Body>
        <NavLink
          className="list-group-item list-group-item-action"
          to={`/shop/${linkTo}/all`}
          onClick={() => {
            linkFn();
          }}
        >
          Wszystkie
        </NavLink>
        <NavLink
          className="list-group-item list-group-item-action"
          to={`/shop/${linkTo}/${arg1}`}
          onClick={() => {
            linkFn();
          }}
        >
          {name1}
        </NavLink>
        <NavLink
          className="list-group-item list-group-item-action"
          to={`/shop/${linkTo}/${arg2}`}
          onClick={() => {
            linkFn();
          }}
        >
          {name2}
        </NavLink>
        <NavLink
          className="list-group-item list-group-item-action"
          to={`/shop/${linkTo}/${arg3}`}
          onClick={() => {
            linkFn();
          }}
        >
          {name3}
        </NavLink>
      </Card.Body>
    );
  };

  return (
    <div className="col-md-3">
      <h2 className="mb-4">Categories</h2>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header}>
            <div className="card-header">
              <NavLink
                to="/shop"
                exact
                onClick={() => {
                  setCategory("all");
                  document.getElementById("panel").scrollIntoView();
                }}
              >
                Wszystkie produkty
              </NavLink>
            </div>
          </Accordion.Toggle>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <NavLink
              to="/shop/mens-clothing/all"
              onClick={() => {
                setCategory(`men's clothing`);
              }}
            >
              Moda Męska
            </NavLink>
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="0">
            {cardBody(bodies[0])}
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <NavLink
              to="/shop/jewelery/all"
              onClick={() => {
                setCategory(`jewelery`);
              }}
            >
              Biżuteria
            </NavLink>
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="1">
            {cardBody(bodies[1])}
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            <NavLink
              to="/shop/electronics/all"
              onClick={() => {
                setCategory(`electronics`);
              }}
            >
              Elektronika
            </NavLink>
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="2">
            {cardBody(bodies[2])}
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            <NavLink
              to="/shop/womens-clothing/all"
              onClick={() => {
                setCategory(`women's clothing`);
              }}
            >
              Moda damska
            </NavLink>
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="3">
            {cardBody(bodies[3])}
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <SortItems />
    </div>
  );
};

export default ItemsList;
