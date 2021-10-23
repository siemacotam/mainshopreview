import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { StoreContext } from "../../../store/StoreProvider";
import { validateEmail } from "../../../utils/validateEmail";

const RegisterPanel = () => {
  const [allValues, setAllValues] = useState({
    userEmail: "",
    userPassword: "",
    userNameAndSurname: "",
    userAdress: "",
    userPostcodeCity: "",
    userPhone: "",
  });
  const [validateMessage, setValidateMessage] = useState(false);

  const {
    users,
    inCheckout,
    setUsers,
    setActiveUser,
    setIsLoggedIn,
    guest,
    setGuestData,
  } = useContext(StoreContext);
  const history = useHistory();

  const changeHandler = (e) => {
    setAllValues((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };
  const {
    userEmail,
    userPassword,
    userNameAndSurname,
    userAdress,
    userPostcodeCity,
    userPhone,
  } = allValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userAdress && userPostcodeCity && userPhone && userNameAndSurname) {
      if (!guest && userEmail && userPassword) {
        if (validateEmail(userEmail)) {
          const newUser = {
            nameAndSurname: userNameAndSurname,
            email: userEmail,
            phone: userPhone,
            adress: userAdress,
            postCodeCity: userPostcodeCity,
            password: userPassword,
          };
          // alternatywa przy problemie z fetchem users
          setUsers([...users, newUser]);
          setActiveUser(newUser);
          setIsLoggedIn(true);
          !inCheckout && history.push("/account");
          inCheckout && history.push("/checkout/order");
        } else {
          alert("niepoprawny adres email");
        }
      } else if (guest) {
        const temporaryUser = {
          nameAndSurname: userNameAndSurname,
          phone: userPhone,
          adress: userAdress,
          postCodeCity: userPostcodeCity,
          items: [],
          orders: [],
        };
        setGuestData(temporaryUser);
        history.push({
          pathname: "/checkout/order",
          state: {
            userData: temporaryUser,
          },
        });
      } else {
        alert("uzupelnij wszystkie dane");
      }
    } else {
      setValidateMessage(true);
    }
  };

  const headInfo = (
    <h3 className="text-center m-3">
      {guest
        ? "Wpisz swoje dane potrzebne do wysyłki i przejdź dalej do zamówienia "
        : "Zarejestruj się i zacznij korzystać z przywilejów już dzisiaj !"}
    </h3>
  );

  const loginInfoPanel = !guest && (
    <div className="col-md-5 bg-light m-2 p-4">
      <p className="text-center font-weight-bold">Dane do logowania</p>
      <div className="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input
          placeholder="Wpisz swój adres email"
          onChange={changeHandler}
          name="userEmail"
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
        />
        {!userEmail && validateMessage ? (
          <small id="emailHelp" className="form-text text-danger">
            Nie podano adresu Email
          </small>
        ) : null}
      </div>
      <div className="form-group">
        <label>Hasło</label>
        <input
          placeholder="Podaj swoje hasło"
          onChange={changeHandler}
          name="userPassword"
          type="password"
          className="form-control"
        />
        {!userPassword && validateMessage ? (
          <small id="emailHelp" className="form-text text-danger">
            Nie wpisano hasła!
          </small>
        ) : null}
      </div>
    </div>
  );

  const adressInfoPanel = (
    <div className="col-md-5 bg-light m-2 p-4">
      <p className="text-center font-weight-bold">Dane adresowe</p>
      <div className="form-group">
        <label>Ulica i numer</label>
        <input
          placeholder="Podaj nazwę ulicy i numer domu/mieszkania"
          onChange={changeHandler}
          name="userAdress"
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
        />
        {!userAdress && validateMessage ? (
          <small id="emailHelp" className="form-text text-danger">
            Nie podano adresu do dostawy
          </small>
        ) : null}
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Kod pocztowy i miejscowość</label>
        <input
          placeholder="Podaj kod pocztowy oraz miejscowość"
          onChange={changeHandler}
          name="userPostcodeCity"
          type="text"
          className="form-control"
        />
        {!userPostcodeCity && validateMessage ? (
          <small id="emailHelp" className="form-text text-danger">
            Nie podano nazwy miejscowości ani kodu pocztowego.
          </small>
        ) : null}
      </div>
    </div>
  );

  const contactInfoPanel = (
    <div className="col-md-5 bg-light m-2 p-4">
      <p className="text-center font-weight-bold">Dane do kontaktu</p>
      <div className="form-group">
        <label for="exampleInputEmail1">Imię i nazwisko</label>
        <input
          placeholder="Podaj imię i nazwisko"
          onChange={changeHandler}
          name="userNameAndSurname"
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
        />
        {!userNameAndSurname && validateMessage ? (
          <small id="emailHelp" className="form-text text-danger">
            Nie podano danych osobowych
          </small>
        ) : null}
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Numer telefonu komórkowego </label>
        <input
          placeholder="Podaj numer telefonu"
          onChange={changeHandler}
          name="userPhone"
          type="text"
          className="form-control"
        />
        {!userPhone && validateMessage ? (
          <small id="emailHelp" className="form-text text-danger">
            Nie podano numeru telefonu.
          </small>
        ) : null}
      </div>
    </div>
  );

  const loyalPanel = (
    <div className="col-md-5 bg-light m-2 p-4 d-flex justify-content-center align-items-center flex-column">
      <h4 className="text-justify">
        Czy wiesz że jako zarejestrowany użytkownik możesz korzystać z naszego
        programu lojalnościowego ?
      </h4>
      <button
        type="button"
        style={{ display: "block" }}
        className="btn btn-primary w-50 mx-auto mt-2"
      >
        Sprawdź
      </button>{" "}
    </div>
  );

  const guestInfoPanel = guest && (
    <div className="col-md-5 bg-light m-2 p-4 d-flex justify-content-center align-items-center flex-column order ">
      <h4 className="text-justify">
        Jako nowy użytkownik wpisz do komentarza w zamówieniu hasło 'NOWY', a
        otrzymasz od nas wyjątkowy upominek :)
      </h4>
    </div>
  );

  return (
    <div className="container">
      {headInfo}
      <form className="row justify-content-around" onSubmit={handleSubmit}>
        {loginInfoPanel}
        {adressInfoPanel}
        {contactInfoPanel}
        {loyalPanel}
        {guestInfoPanel}
        <div className="col-md-12">
          {validateMessage && (
            <small id="emailHelp" className="form-text text-danger text-center">
              Uzupełnij brakujące pola.
            </small>
          )}
        </div>
        <div className="col-md-3 d-flex justify-content-center">
          <button type="submit" className="btn btn-success mt-3 w-100">
            {guest ? "Przejdź dalej" : "Zarejestruj"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPanel;
