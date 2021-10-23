import React, { useEffect } from "react";
import ekipa from "../../images/ekipa.jpg";
import ShowCompanyInfo from "./subcomponents/ShowCompanyInfo";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const headImg = <img src={ekipa} alt="crew" style={{ width: "100%" }} />;

  return (
    <>
      {headImg}
      <div className="container">
        <div>
          <p className="text-center m-4 display-3">O MainShop</p>
          <p className="mx-auto mb-5 text-special">
            Jesteśmy młodą, innowacyjną firmą, która przebojem wdziera się na
            rynek e-commerce. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dolorem facere earum consequatur debitis provident praesentium
            eaque veniam consequuntur incidunt perferendis? Asperiores commodi
            nobis excepturi, in beatae nostrum voluptates tenetur voluptate!
          </p>
        </div>
        {ShowCompanyInfo()}
      </div>
    </>
  );
};

export default About;
