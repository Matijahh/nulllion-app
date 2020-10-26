import React, { Fragment } from "react";
import Media from "react-media";

/** Material UI Imports */
import Typography from "@material-ui/core/Typography";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const ContactUs = () => {
  return (
    <div>
      <Media
        queries={{
          small: "(max-width: 699px)",
          medium: "(min-width: 700px) and (max-width: 1399px)",
          large: "(min-width: 1400px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.small && (
              <>
                <div className="contact-us">
                  <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6 paragraph">
                      <span className="title title-small">
                        Let's talk about your portfolio
                      </span>
                      <div className="subtitle subtitle-small">
                        Start working with <span>Landrick</span> that can
                        provide everything you need to generate awareness, drive
                        traffic, connect.
                      </div>
                      <div className="row">
                        <div className="col-md-1">
                          <i class="fas fa-envelope"></i>
                        </div>
                        <div className="col-md-11">
                          <div className="contact-detail">
                            <div className="title title-small">Email</div>
                            <div className="subtitle subtitle-small">
                              contact@example.com
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-1">
                          <i class="fas fa-phone-alt"></i>
                        </div>
                        <div className="col-md-11">
                          <div className="contact-detail">
                            <div className="title title-small">Phone</div>
                            <div className="subtitle subtitle-small">
                              +152 534-468-854
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-1">
                          <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="col-md-11">
                          <div className="contact-detail">
                            <div className="title title-small">Location</div>
                            <div className="subtitle subtitle-small">
                              View on Google Map
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {matches.medium && (
              <>
                <div className="contact-us">
                  <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6 paragraph">
                      <span className="title title-medium">
                        Let's talk about your portfolio
                      </span>
                      <div className="subtitle subtitle-medium">
                        Start working with <span>Landrick</span> that can
                        provide everything you need to generate awareness, drive
                        traffic, connect.
                      </div>
                      <div className="row">
                        <div className="col-md-1">
                          <i class="fas fa-envelope"></i>
                        </div>
                        <div className="col-md-11">
                          <div className="contact-detail">
                            <div className="title title-medium">Email</div>
                            <div className="subtitle subtitle-medium">
                              contact@example.com
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-1">
                          <i class="fas fa-phone-alt"></i>
                        </div>
                        <div className="col-md-11">
                          <div className="contact-detail">
                            <div className="title title-medium">Phone</div>
                            <div className="subtitle subtitle-medium">
                              +152 534-468-854
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-1">
                          <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="col-md-11">
                          <div className="contact-detail">
                            <div className="title title-medium">Location</div>
                            <div className="subtitle subtitle-medium">
                              View on Google Map
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {matches.large && (
              <>
                <div className="contact-us">
                  <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6 paragraph">
                      <span className="title title-large">
                        Let's talk about your portfolio
                      </span>
                      <div className="subtitle subtitle-large">
                        Start working with <span>Landrick</span> that can
                        provide everything you need to generate awareness, drive
                        traffic, connect.
                      </div>
                      <div className="row">
                        <div className="col-md-1">
                          <i class="fas fa-envelope"></i>
                        </div>
                        <div className="col-md-11">
                          <div className="contact-detail">
                            <div className="title title-large">Email</div>
                            <div className="subtitle subtitle-large">
                              contact@example.com
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-1">
                          <i class="fas fa-phone-alt"></i>
                        </div>
                        <div className="col-md-11">
                          <div className="contact-detail">
                            <div className="title title-large">Phone</div>
                            <div className="subtitle subtitle-large">
                              +152 534-468-854
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-1">
                          <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="col-md-11">
                          <div className="contact-detail">
                            <div className="title title-large">Location</div>
                            <div className="subtitle subtitle-large">
                              View on Google Map
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </Fragment>
        )}
      </Media>
    </div>
  );
};

export default ContactUs;
