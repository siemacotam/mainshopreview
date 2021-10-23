import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import About from "../components/About/About";
import Account from "../components/Account/Account";
import RegisterPanel from "../components/Account/subcomponents/RegisterPanel";
import WelcomePanel from "../components/Account/subcomponents/WelcomePanel";
import Checkout from "../components/Checkout/Checkout";
import Contact from "../components/Contact/Contact";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Favourites from "../components/Favourites/Favourites";
import Home from "../components/Home/Home";
import SearchView from "../components/Search/SearchView";
import Shop from "../components/Shop/Shop";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";

const Main = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/shop" render={() => <Shop />} />
      <Route path="/shopping-cart" render={() => <ShoppingCart />} />
      <Route path="/about" render={() => <About />} />
      <Route path="/contact" render={() => <Contact />} />
      <Route path="/welcome" render={() => <WelcomePanel />} />
      <Route path="/checkout" render={() => <Checkout />} />
      <Route path="/account" render={() => <Account />} />
      <Route path="/search" render={() => <SearchView />} />
      <Route path="/favourites" render={() => <Favourites />} />
      <Route path="/register" render={() => <RegisterPanel />} />
      <Route path="/error" render={() => <ErrorPage />} />
      <Redirect to="/"></Redirect>
    </Switch>
  );
};

export default Main;
