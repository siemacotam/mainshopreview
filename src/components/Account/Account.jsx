import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../store/StoreProvider";
import WelcomePanel from "./subcomponents/WelcomePanel";
import UserPanel from "./subcomponents/UserPanel";

const Account = () => {
  const { isLoggedIn } = useContext(StoreContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      {!isLoggedIn && <WelcomePanel />}
      {isLoggedIn && <UserPanel />}
    </div>
  );
};

export default Account;
