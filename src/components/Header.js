import React, { useState } from "react";

import { useTranslation } from "react-i18next";

import { NavLink, withRouter } from "react-router-dom";
import Logo from "../images/logo.png";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const [lang, setLang] = React.useState("");

  const { t, i18n } = useTranslation();

  const handleLangChange = (e) => {
    i18n.changeLanguage(e.target.value);
    setLang(e.target.value);
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleMobileMenuClick = () => {
    setClicked(false);
  };

  return (
    <div className="navbar">
      <nav>
        <img src={Logo} alt="" />

        <a href="#" className="toggle-button" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </a>

        <div className={clicked ? "nav-links nav-active" : "nav-links"}>
          <div className="select-box">
            <select value={lang} onChange={handleLangChange}>
              <option value="">LANG</option>
              <option value="en">ENG</option>
              <option value="sr">SRB</option>
              <option value="fr">FRA</option>
              <option value="jp">JPN</option>
            </select>
          </div>

          <NavLink
            to="/"
            exact
            className="nav-link"
            onClick={handleMobileMenuClick}
          >
            {t("home")}
          </NavLink>
          <NavLink
            to="/about"
            className="nav-link"
            onClick={handleMobileMenuClick}
          >
            {t("about")}
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-link"
            onClick={handleMobileMenuClick}
          >
            {t("contact")}
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Header);
