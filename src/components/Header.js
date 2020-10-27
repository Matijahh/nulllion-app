import React, { useState } from "react";

/** Material UI Imports */
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

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
          <div className="select-lang">
            <FormControl variant="outlined" className="form-control white">
              <InputLabel id="demo-simple-select-outlined" className="white">
                LANG
              </InputLabel>
              <Select
                id="demo-simple-select-outlined"
                value={lang}
                onChange={handleLangChange}
                label="Language"
                className="select white"
              >
                <MenuItem value="en" className="white">
                  <em>ENG</em>
                </MenuItem>
                <MenuItem value="fr" className="white">
                  FRA
                </MenuItem>
                <MenuItem value="sr" className="white">
                  SRB
                </MenuItem>
                <MenuItem value="jp" className="white">
                  JPN
                </MenuItem>
              </Select>
            </FormControl>
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
