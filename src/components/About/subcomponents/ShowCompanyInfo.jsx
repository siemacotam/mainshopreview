import React from "react";
import towar from "../../../images/towar.jpg";
import research from "../../../images/research.jpg";
import trendy from "../../../images/trendy.jpg";
import jakosc from "../../../images/jakosc.jpg";

const ShowCompanyInfo = () => {
  const companyInfo = [
    {
      title: "Po pierwsze - wartościowy towar !",
      image: towar,
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
        quam alias libero molestiae eaque aliquam laudantium perferendis,
        voluptas debitis! Doloremque tempore quos adipisci eaque id sequi
        autem, deleniti ad deserunt!`,
    },
    {
      title: "Po drugie - badania",
      image: research,
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
        quam alias libero molestiae eaque aliquam laudantium perferendis,
        voluptas debitis! Doloremque tempore quos adipisci eaque id sequi
        autem, deleniti ad deserunt!`,
    },
    {
      title: "Po trzecie - jakość !",
      image: trendy,
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
        quam alias libero molestiae eaque aliquam laudantium perferendis,
        voluptas debitis! Doloremque tempore quos adipisci eaque id sequi
        autem, deleniti ad deserunt!`,
    },
    {
      title: "I na koniec, choć nie ostatnie - podążać za trendami",
      image: jakosc,
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
        quam alias libero molestiae eaque aliquam laudantium perferendis,
        voluptas debitis! Doloremque tempore quos adipisci eaque id sequi
        autem, deleniti ad deserunt!`,
    },
  ];

  const showCompanyInfo = () => {
    return companyInfo.map((i, index) => {
      return (
        <div className="row justify-content-center align-items-center">
          <div
            className={
              index % 2 === 0
                ? "col-md-6 d-flex justify-content-center align-items-center p-2"
                : "col-md-6 d-flex justify-content-center align-items-center p-2 order-lg-2"
            }
          >
            <img src={i.image} alt="" className="rounded" />
          </div>
          <div className="col-md-6 p-5">
            <h4 className="font-weight-bold border-bottom pb-2">{i.title}</h4>
            <p className="text-special">{i.text}</p>
          </div>
        </div>
      );
    });
  };

  return showCompanyInfo();
};

export default ShowCompanyInfo;
