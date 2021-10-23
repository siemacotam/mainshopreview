import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { StoreContext } from "../../../store/StoreProvider";
import { validateEmail } from "../../../utils/validateEmail";

const LoginPanel = () => {
  const { users, setActiveUser, setIsLoggedIn, inCheckout, setGuest } =
    useContext(StoreContext);
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validateMessage, setValidateMessage] = useState("");

  const handleOnChangeEmail = (event) => setEmail(event.target.value);
  const handleOnChangePassword = (event) => setPassword(event.target.value);

  const resetStateOfInputs = () => {
    setEmail("");
    setPassword("");
    setValidateMessage("");
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setGuest(false);

    const userEmail = users.filter((user) =>
      user.email === email ? user.email : null
    );
    const userPassword = users.filter((userPassword) =>
      userPassword.password === password ? userPassword : null
    );
    let activeUser = users.filter((user) =>
      user.email === email && user.password === password ? user : null
    );
    if (userEmail.length && userPassword.length && activeUser) {
      if (validateEmail(email)) {
        setActiveUser(activeUser[0]);
        setIsLoggedIn(true);
        resetStateOfInputs();
        !inCheckout && history.push("/account");
        inCheckout && history.push("/checkout/order");
      } else {
        alert("niepoprawny adres email");
      }
    } else {
      setValidateMessage("Niepoprawny adres email lub hasło. spróbuj ponownie");
    }
  };

  const validateMessageInfo = validateMessage.length ? (
    <small id="emailHelp" className="form-text text-center text-danger">
      {validateMessage}
    </small>
  ) : null;

  return (
    <div className="col-md-5 mx-1 bg-light mb-3 p-4">
      <form className=" m-auto" onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            onChange={handleOnChangeEmail}
            value={email}
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Wpisz swój adres email"
          />
          <small id="emailHelp" className="form-text text-muted">
            Twoje dane są u nas bezpieczne.
          </small>
        </div>
        <div className="form-group mb-5">
          <label>Hasło</label>
          <input
            onChange={handleOnChangePassword}
            type="password"
            value={password}
            className="form-control"
            placeholder="Hasło"
          />
          {validateMessageInfo}
        </div>
        <button
          type="submit"
          style={{ display: "block" }}
          className="btn btn-primary w-50 m-auto"
        >
          Zaloguj się
        </button>
      </form>
    </div>
  );
};

export default LoginPanel;
