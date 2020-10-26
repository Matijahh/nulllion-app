import React, { Fragment } from "react";
import Media from "react-media";

/** Carousel Imports */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
                      <span className="title title-small">
                        Health Insurance
                      </span>
                      <p className="subtitle subtitle-small">
                        You can combine all the Landrick templates into a single
                        one, you can take a component from the Application theme
                        and use it in the Website.
                      </p>
                      <ul className="list list-small">
                        <li className="list-text">
                          <i class="far fa-check-circle"></i>Digital Marketing
                          Solutions for Tommorow
                        </li>
                        <li className="list-text">
                          <i class="far fa-check-circle"></i>Our Talented &
                          Experienced Marketing Agency
                        </li>
                        <li className="list-text">
                          <i class="far fa-check-circle"></i>Create your own
                          skin to match your brand
                        </li>
                      </ul>
                      <button
                        className="btn btn-small"
                        onClick={noLinkFoundToast}
                      >
                        Read More
                        <i class="fas fa-arrow-right"></i>
                      </button>
                    </>
                  )}
                  {matches.medium && (
                    <>
                      <span className="title title-medium">
                        Health Insurance
                      </span>
                      <p className="subtitle subtitle-medium">
                        You can combine all the Landrick templates into a single
                        one, you can take a component from the Application theme
                        and use it in the Website.
                      </p>
                      <ul className="list list-medium">
                        <li className="list-text">
                          <i class="far fa-check-circle"></i>Digital Marketing
                          Solutions for Tommorow
                        </li>
                        <li className="list-text">
                          <i class="far fa-check-circle"></i>Our Talented &
                          Experienced Marketing Agency
                        </li>
                        <li className="list-text">
                          <i class="far fa-check-circle"></i>Create your own
                          skin to match your brand
                        </li>
                      </ul>
                      <button
                        className="btn btn-medium"
                        onClick={noLinkFoundToast}
                      >
                        Read More
                        <i class="fas fa-arrow-right"></i>
                      </button>
                    </>
                  )}
                  {matches.large && (
                    <>
                      <span className="title title-large">
                        Health Insurance
                      </span>
                      <p className="subtitle subtitle-large">
                        You can combine all the Landrick templates into a single
                        one, you can take a component from the Application theme
                        and use it in the Website.
                      </p>
                      <ul className="list list-large">
                        <li className="list-text">
                          <i class="far fa-check-circle"></i>Digital Marketing
                          Solutions for Tommorow
                        </li>
                        <li className="list-text">
                          <i class="far fa-check-circle"></i>Our Talented &
                          Experienced Marketing Agency
                        </li>
                        <li className="list-text">
                          <i class="far fa-check-circle"></i>Create your own
                          skin to match your brand
                        </li>
                      </ul>
                      <button
                        className="btn btn-large"
                        onClick={noLinkFoundToast}
                      >
                        Read More
                        <i class="fas fa-arrow-right"></i>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="landing-container investment-plans">
              <div className="row">
                <div className="col-md-6 paragraph invest-paragraph">
                  {matches.small && (
                    <>
                      <span className="title title-small">
                        Investment Plans
                      </span>
                      <p className="subtitle subtitle-small">
                        You can combine all the Landrick templates into a single
                        one, you can take a component from the Application theme
                        and use it in the Website.
                      </p>
                      <ul className="list list-small">
                        <li className="list-text">
                          <i class="far fa-check-circle"></i>Digital Marketing
                          Solutions for Tommorow
                        </li>
                        <li className="list-text">
                          <i class="far fa-check-circle"></i>Our Talented &
                          Experienced Marketing Agency
                        </li>
                        <li className="list-text">
                          <i class="far fa-check-circle"></i>Create your own
                          skin to match your brand
                        </li>
                      </ul>
                      <button
                        className="btn btn-small"
                        onClick={noLinkFoundToast}
                      >
                        Read More
                        <i class="fas fa-arrow-right"></i>
                      </button>
                    </>
                  )}
                  {matches.medium && (
                    <>
                      <span className="title title-medium">
                        Investment Plans
                      </span>
                      <p className="subtitle subtitle-medium">
                        You can combine all the Landrick templates into a single
                        one, you can take a component from the Application theme
                        and use it in the Website.
                      </p>
                      <ul className="list list-medium">
                        <li className="list-text">
                          <i class="far fa-check-circle"></i>Digital Marketing
                          Solutions for Tommorow
                        </li>
                        <li className="list-text">
                          <i class="far fa-check-circle"></i>Our Talented &
                          Experienced Marketing Agency
                        </li>
                        <li className="list-text">
                          <i class="far fa-check-circle"></i>Create your own
                          skin to match your brand
                        </li>
                      </ul>
                      <button
                        className="btn btn-medium"
                        onClick={noLinkFoundToast}
                      >
                        Read More
                        <i class="fas fa-arrow-right"></i>
                      </button>
                    </>
                  )}
                  {matches.large && (
                    <>
                      <span className="title title-large">
                        Investment Plans
                      </span>
                      <p className="subtitle subtitle-large">
                        You can combine all the Landrick templates into a single
                        one, you can take a component from the Application theme
                        and use it in the Website.
                      </p>
                      <ul className="list list-large">
                        <li className="list-text">
                          <i class="far fa-check-circle"></i>Digital Marketing
                          Solutions for Tommorow
                        </li>
                        <li className="list-text">
                          <i class="far fa-check-circle"></i>Our Talented &
                          Experienced Marketing Agency
                        </li>
                        <li className="list-text">
                          <i class="far fa-check-circle"></i>Create your own
                          skin to match your brand
                        </li>
                      </ul>
                      <button
                        className="btn btn-large"
                        onClick={noLinkFoundToast}
                      >
                        Read More
                        <i class="fas fa-arrow-right"></i>
                      </button>
                    </>
                  )}
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
