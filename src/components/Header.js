import React from "react";

/** Material UI Imports */
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import { useTranslation } from "react-i18next";

import { NavLink, withRouter } from "react-router-dom";
import Logo from "../images/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const { history } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [lang, setLang] = React.useState("");

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const open = Boolean(anchorEl);

  const { t, i18n } = useTranslation();

  const handleLangChange = (e) => {
    i18n.changeLanguage(e.target.value);
    setLang(e.target.value);
  };

  /** Logic behind closing the Menu Button based on Material UI library docs */
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  return (
    <div className="navbar">
      <nav>
        <img src={Logo} alt="" />
        <div>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem onClick={() => handleMenuClick("/")}>
                  {t("home")}
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick("/about")}>
                  {t("about")}
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick("/contact")}>
                  {t("contact")}
                </MenuItem>
              </Menu>
            </>
          ) : (
            <div className="nav-links">
              <div className="select-lang">
                <FormControl variant="outlined" className="form-control white">
                  <InputLabel
                    id="demo-simple-select-outlined"
                    className="white"
                  >
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
              <NavLink to="/" exact className="nav-link">
                {t("home")}
              </NavLink>
              <NavLink to="/about" className="nav-link">
                {t("about")}
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                {t("contact")}
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Header);
