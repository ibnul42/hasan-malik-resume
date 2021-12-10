import React from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation("translation", { keyPrefix: "navMenu" });

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#!" style={{ fontWeight: '800', fontSize:"2rem"}}>
          Your Name
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#!">
                {t("home")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                {t("features")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                {t("blog")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                {t("about")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                {t("contact")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
