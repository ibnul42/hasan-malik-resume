import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookie from "js-cookie";
import Navbar from "./components/Navbar";

import "./app.css";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Certification from "./components/Certification";
import image1 from './images/Flag-1.png'
import image2 from './images/Flag-2.png'
import image3 from './images/Flag-3.png'
import image4 from './images/Flag-4.png'

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
    image: image1
  },
  {
    code: "kz",
    name: "қазақ",
    country_code: "kz",
    image: image2
  },
  {
    code: "rs",
    name: "Россия",
    country_code: "rs",
    image: image3
  },
  {
    code: "kd",
    name: "Kurdî",
    country_code: "iq",
    image: image4
  },
];

const GlobeIcon = ({ width = 20, height = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    className="bi bi-translate"
    viewBox="0 0 16 16"
    color="black"
  >
    <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
    <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
  </svg>
);

function App() {
  const curreLanguageCode = cookie.get("i18next");
  const curreLanguage = languages.find((l) => l.code === curreLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = curreLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [curreLanguage, t]);
  return (
    <div className="container">
      <div className="d-flex justify-content-end">
        <div className="dropdown">
          <button
            className="btn btn-link dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <GlobeIcon />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{padding: '0rem 0'}}>
            {languages.map(({ code, name, country_code, image }) => {
              console.log(image);
              return (
                <li key={code}>
                  
                  <button
                    className="dropdown-item"
                    onClick={() => i18next.changeLanguage(code)}
                    disabled={code === curreLanguageCode}
                  >
                    <img src={image} alt="" className="px-2"  />
                    {/* <span
                      className={`flag-icon flag-icon-${country_code} mx-2`}
                      style={{ opacity: code === curreLanguageCode ? 0.5 : 1 }}
                    ></span> */}
                      {name}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <Navbar />
      <div className="d-flex flex-column align-items-start mt-2">
        <h3 className="fw-bold">{t("hello")}</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          laboriosam.
        </p>

        <div className="my-2">
          <h3 className="fw-bold">{t("projects")}</h3>
          <Project />
        </div>

        <div className="my-2">
          <h3 className="fw-bold">{t("skills")}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            recusandae, officiis reprehenderit veritatis ipsum id.
          </p>
          <Skill />
        </div>

        <div className="my-2">
          <h3 className="fw-bold">{t("certificates")}</h3>
          <Certification />
        </div>
      </div>
    </div>
  );
}

export default App;
