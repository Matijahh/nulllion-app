import React, { Fragment } from "react";
import Media from "react-media";

/** Carousel Imports */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

/** Material UI Imports */
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";
import ArrowForward from "@material-ui/icons/ArrowForward";
import Button from "@material-ui/core/Button";

/** Images Imports */
import img1 from "../images/carousel/10364.jpg";
import img2 from "../images/carousel/25060.jpg";
import img3 from "../images/carousel/31214.jpg";
import img4 from "../images/carousel/195548-OY9OIN-908.jpg";
import img5 from "../images/carousel/OGN39D0.jpg";
import imgHealth from "../images/health-insurance.svg";
import imgInvest from "../images/investment-plan.svg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const noLinkFoundToast = () => {
    toast.error("Error: No link found.", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  return (
    <div className="carousel-container">
      <Media
        queries={{
          small: "(max-width: 699px)",
          medium: "(min-width: 700px) and (max-width: 1399px)",
          large: "(min-width: 1400px)",
        }}
      >
        {(matches) => (
          <Fragment>
            <ToastContainer autoClose={4000} />
            <Carousel className="carousel" infiniteLoop="true" autoPlay="true">
              <div>
                <img src={img2} />
              </div>
              <div>
                <img src={img3} />
              </div>
              <div>
                <img src={img4} />
              </div>
              <div>
                <img src={img5} />
              </div>
              <div>
                <img src={img1} />
              </div>
            </Carousel>

            <div className="landing-container health-insurance">
              <div className="row">
                <div className="col-md-6">
                  <img src={imgHealth} />
                </div>
                <div className="col-md-6 health-paragraph">
                  {matches.small && (
                    <>
                      <Typography variant="h6" className="title">
                        Health Insurance
                      </Typography>
                      <Typography variant="body2" className="subtitle">
                        You can combine all the Landrick templates into a single
                        one, you can take a component from the Application theme
                        and use it in the Website.
                      </Typography>
                    </>
                  )}
                  {matches.medium && (
                    <>
                      <Typography variant="h4" className="title">
                        Health Insurance
                      </Typography>
                      <Typography variant="subtitle2" className="subtitle">
                        You can combine all the Landrick templates into a single
                        one, you can take a component from the Application theme
                        and use it in the Website.
                      </Typography>
                    </>
                  )}
                  {matches.large && (
                    <>
                      <Typography variant="h2" className="title">
                        Health Insurance
                      </Typography>
                      <Typography variant="h6" className="subtitle">
                        You can combine all the Landrick templates into a single
                        one, you can take a component from the Application theme
                        and use it in the Website.
                      </Typography>
                    </>
                  )}
                  <List className="list">
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutline></CheckCircleOutline>
                      </ListItemIcon>
                      <ListItemText
                        primary="Digital Marketing Solutions for Tomorrow"
                        className="list-text"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutline></CheckCircleOutline>
                      </ListItemIcon>
                      <ListItemText
                        primary="Our Talented & Experienced Marketing Agency"
                        className="list-text"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutline></CheckCircleOutline>
                      </ListItemIcon>
                      <ListItemText
                        primary="Create your own skin to match your brand"
                        className="list-text"
                      />
                    </ListItem>
                  </List>
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowForward />}
                    className="btn"
                    onClick={noLinkFoundToast}
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            <div className="container landing-container investment-plans">
              <div className="row">
                <div className="col-md-6 paragraph invest-paragraph">
                  {matches.small && (
                    <>
                      <Typography variant="h6" className="title">
                        Investment Plans
                      </Typography>
                      <Typography variant="body2" className="subtitle">
                        You can combine all the Landrick templates into a single
                        one, you can take a component from the Application theme
                        and use it in the Website.
                      </Typography>
                    </>
                  )}
                  {matches.medium && (
                    <>
                      <Typography variant="h4" className="title">
                        Investment Plans
                      </Typography>
                      <Typography variant="subtitle2" className="subtitle">
                        You can combine all the Landrick templates into a single
                        one, you can take a component from the Application theme
                        and use it in the Website.
                      </Typography>
                    </>
                  )}
                  {matches.large && (
                    <>
                      <Typography variant="h2" className="title">
                        Investment Plans
                      </Typography>
                      <Typography variant="h6" className="subtitle">
                        You can combine all the Landrick templates into a single
                        one, you can take a component from the Application theme
                        and use it in the Website.
                      </Typography>
                    </>
                  )}
                  <List className="list">
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutline></CheckCircleOutline>
                      </ListItemIcon>
                      <ListItemText
                        primary="Digital Marketing Solutions for Tomorrow"
                        className="list-text"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutline></CheckCircleOutline>
                      </ListItemIcon>
                      <ListItemText
                        primary="Our Talented & Experienced Marketing Agency"
                        className="list-text"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutline></CheckCircleOutline>
                      </ListItemIcon>
                      <ListItemText
                        primary="Create your own skin to match your brand"
                        className="list-text"
                      />
                    </ListItem>
                  </List>
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowForward />}
                    className="btn"
                    onClick={noLinkFoundToast}
                  >
                    Read More
                  </Button>
                </div>
                <div className="col-md-6">
                  <img src={imgInvest} />
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </Media>
    </div>
  );
};

export default Home;
