import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../../store/StoreProvider";

const UserInfo = () => {
  const [editMode, setEditMode] = useState(false);
  const { activeUser, guestData } = useContext(StoreContext);
  const [allValues, setAllValues] = useState({
    userNameAndSurname: "",
    userAdress: "",
    userPostcodeCity: "",
    userPhone: "",
  });

  useEffect(() => {
    if (userData) {
      const { nameAndSurname, adress, postCodeCity, phone } = userData;
      setAllValues({
        userNameAndSurname: nameAndSurname,
        userAdress: adress,
        userPostcodeCity: postCodeCity,
        userPhone: phone,
      });
    }
    if (guestInfoData) {
      const { nameAndSurname, adress, postCodeCity, phone } = guestInfoData;
      setAllValues({
        userNameAndSurname: nameAndSurname,
        userAdress: adress,
        userPostcodeCity: postCodeCity,
        userPhone: phone,
      });
    }
  }, []);

  const userData = activeUser;
  const guestInfoData = guestData;

  const changeHandler = (e) => {
    setAllValues((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };
  const { userNameAndSurname, userAdress, userPostcodeCity, userPhone } =
    allValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userNameAndSurname && userAdress && userPostcodeCity && userPhone) {
      setEditMode(!editMode);
      if (userData) {
        let editedUser = activeUser;
        editedUser.nameAndSurname = userNameAndSurname;
        editedUser.adress = userAdress;
        editedUser.postCodeCity = userPostcodeCity;
        editedUser.phone = userPhone;
      }
      if (guestInfoData) {
        let editedUser = guestInfoData;
        editedUser.nameAndSurname = userNameAndSurname;
        editedUser.adress = userAdress;
        editedUser.postCodeCity = userPostcodeCity;
        editedUser.phone = userPhone;
      }
    } else {
      alert("Uzupełnij wszystkie wymagane dane");
    }
  };

  const nameInput = (
    <input
      onChange={changeHandler}
      type="text"
      disabled={!editMode}
      value={userNameAndSurname}
      name="userNameAndSurname"
      className="form-control"
    />
  );

  const adressInput = (
    <input
      onChange={changeHandler}
      type="text"
      disabled={!editMode}
      value={userAdress}
      name="userAdress"
      className="form-control"
    />
  );
  const postCodeInput = (
    <input
      onChange={changeHandler}
      type="text"
      disabled={!editMode}
      value={userPostcodeCity}
      name="userPostcodeCity"
      className="form-control"
    />
  );
  const phoneInput = (
    <input
      onChange={changeHandler}
      type="text"
      disabled={!editMode}
      value={userPhone}
      name="userPhone"
      className="form-control"
    />
  );

  return (
    <form className="d-flex flex-column" onSubmit={handleSubmit}>
      <small className="text-muted py-1">Imię i nazwisko</small>
      {nameInput}
      <small className="text-muted py-1">Adres</small>
      {adressInput}
      <small className="text-muted py-1">Miejscowość</small>
      {postCodeInput}
      <small className="text-muted py-1">Numer telefonu</small>
      {phoneInput}
      {editMode === false && (
        <button
          type="button"
          onClick={() => setEditMode(!editMode)}
          className="btn btn-primary mt-4"
        >
          Edytuj dane
        </button>
      )}
      {editMode === true && (
        <button type="submit" className="btn btn-primary mt-4">
          Zakończ edycję
        </button>
      )}
    </form>
  );
};

export default UserInfo;
