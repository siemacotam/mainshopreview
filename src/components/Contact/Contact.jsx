import React, { useEffect } from "react";

import Info from "./subcomponents/Info";
import Mail from "./subcomponents/Mail";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <h3 className="text-center m-5">
        Witaj. Daj nam znać co możemy dla Ciebie zrobić :)
      </h3>
      <div className="row my-5">
        <Info />
        <div className="col-md-6 bg-light p-3">
          <Mail />
        </div>
      </div>
    </div>
  );
};

export default Contact;
