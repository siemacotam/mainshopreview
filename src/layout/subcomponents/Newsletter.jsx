import React, { useEffect, useState } from "react";
import { validateEmail } from "../../utils/validateEmail";

const Newsletter = () => {
  const [agreed, setAgreed] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleCheckbox = (e) => {
    const data = e.target.checked;
    setAgreed(data);
  };

  const handleChange = (e) => {
    const data = e.target.value;
    setEmail(data);
  };

  useEffect(() => {
    const id = setTimeout(() => setMessage(""), 3000);
    return () => clearTimeout(id);
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && agreed) {
      if (validateEmail(email)) {
        setAgreed(false);
        setEmail("");
        setMessage("Twój email został dodany do bazy danych :)");
        //   function to send email to db
      } else {
        setMessage("Niepoprawny adres email");
      }
    } else {
      setMessage("Wpisz adress email oraz zaznacz okienko aby wyrazić zgodę");
    }
  };

  return (
    <>
      <div className="col-md-4 d-flex align-items-center">
        <form>
          <h5 className="mb-3">Zapisz się do newselettera</h5>
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="e-mail adress"
              value={email}
              onChange={handleChange}
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary"
            >
              Sign in
            </button>
          </div>
          <div className="d-flex">
            <input
              type="checkbox"
              className="m-3 p-2 "
              onChange={handleCheckbox}
              checked={agreed}
            />
            <p>
              Wyrażam zgodę na otrzymywanie newslettera i informacji handlowych
              od firmy MainShop.
            </p>
          </div>
          <div className="text-center">
            <small className="text-light">{message}</small>
          </div>
        </form>
      </div>
    </>
  );
};

export default Newsletter;
