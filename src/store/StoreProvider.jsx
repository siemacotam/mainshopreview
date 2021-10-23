import React, { createContext, useEffect, useState } from "react";
import usersList from "./users.json";

export const StoreContext = createContext(null);

export const paymentMethods = [
  "BLIK",
  "Karta płatnicza online",
  "Przelew gotówkowy",
  "Płatność przy odbiorze",
];

const StoreProvider = ({ children }) => {
  // dane o uzytkownikach i produktach
  const [items, setItems] = useState([]);
  const [users, setUsers] = useState();
  const [activeUser, setActiveUser] = useState("");
  const [guest, setGuest] = useState(false);
  const [guestData, setGuestData] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // dane o zakupach i ulubionych
  const [category, setCategory] = useState("all");
  const [cartStatus, setCartStatus] = useState([]);
  const [favouritesList, setFavouritesList] = useState([]);
  const [inCheckout, setInCheckout] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(2);
  const [paymentMethod, setPaymentMethod] = useState(1);
  const [orders, setOrders] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [sortItems, setSortItems] = useState("");
  const [newToast, setNewToast] = useState("");

  // useEffect(() => {
  //   fetch("./db/items.json")
  //     .then((res) => res.json())
  //     .then((data) => setItems(data.itemsData))
  //     .catch((err) =>
  //       console.log("błąd przy pobieraniu danych o produktach", err)
  //     );
  // }, []);

  // problem z fetchem na ghpages- alternatywne rozwiazanie na dole

  // useEffect(() => {
  //   fetch("./db/users.json")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data.usersData))
  //     .catch((err) =>
  //       console.log("błąd przy pobieraniu danych o użytkownikach", err)
  //     );
  // }, []);

  useEffect(() => {
    const listOfUsers = usersList.usersData;
    setUsers(listOfUsers);
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((res) => res.json())
      .then((json) => setItems(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <StoreContext.Provider
      value={{
        items,
        setItems,
        users,
        setUsers,
        cartStatus,
        setCartStatus,
        favouritesList,
        setFavouritesList,
        category,
        setCategory,
        isLoggedIn,
        setIsLoggedIn,
        activeUser,
        setActiveUser,
        guest,
        setGuest,
        guestData,
        setGuestData,
        inCheckout,
        setInCheckout,
        checkoutStep,
        setCheckoutStep,
        paymentMethod,
        setPaymentMethod,
        orders,
        setOrders,
        activePage,
        setActivePage,
        totalPrice,
        setTotalPrice,
        sortItems,
        setSortItems,
        newToast,
        setNewToast,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
