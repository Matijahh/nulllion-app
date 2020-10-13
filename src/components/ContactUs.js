import React, { Fragment } from "react";
import Media from "react-media";

/** Material UI Imports */
import Grid from "@material-ui/core/Grid";
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
            <Grid container className="contact-us">
              <Grid item md="6"></Grid>
              <Grid item md="6" className="paragraph">
                {matches.small && (
                  <Typography variant="h5" className="title">
                    Let's talk about your portfolio
                  </Typography>
                )}
                {matches.medium && (
                  <Typography variant="h3" className="title">
                    Let's talk about your portfolio
                  </Typography>
                )}
                {matches.large && (
                  <Typography variant="h1" className="title">
                    Let's talk about your portfolio
                  </Typography>
                )}
                {matches.small && (
                  <Typography variant="subtitle2" className="subtitle">
                    Start working with <span>Landrick</span> that can provide
                    everything you need to generate awareness, drive traffic,
                    connect.
                  </Typography>
                )}
                {matches.medium && (
                  <Typography variant="subtitle1" className="subtitle">
                    Start working with <span>Landrick</span> that can provide
                    everything you need to generate awareness, drive traffic,
                    connect.
                  </Typography>
                )}
                {matches.large && (
                  <Typography variant="h5" className="subtitle">
                    Start working with <span>Landrick</span> that can provide
                    everything you need to generate awareness, drive traffic,
                    connect.
                  </Typography>
                )}
                <Grid container>
                  <Grid item md={1}>
                    <MailIcon className="icon" />
                  </Grid>
                  <Grid item md={11}>
                    <div className="contact-detail">
                      {matches.small && (
                        <Typography variant="subtitle1" className="title">
                          Email
                        </Typography>
                      )}
                      {matches.medium && (
                        <Typography variant="h6" className="title">
                          Email
                        </Typography>
                      )}
                      {matches.large && (
                        <Typography variant="h3" className="title">
                          Email
                        </Typography>
                      )}
                      {matches.small && (
                        <Typography variant="subtitle2" className="subtitle">
                          contact@example.com
                        </Typography>
                      )}
                      {matches.medium && (
                        <Typography variant="subtitle1" className="subtitle">
                          contact@example.com
                        </Typography>
                      )}
                      {matches.large && (
                        <Typography variant="h5" className="subtitle">
                          contact@example.com
                        </Typography>
                      )}
                    </div>
                  </Grid>
                  <Grid item md={1}>
                    <PhoneIcon className="icon" />
                  </Grid>
                  <Grid item md={11}>
                    <div className="contact-detail">
                      {matches.small && (
                        <Typography variant="subtitle1" className="title">
                          Phone
                        </Typography>
                      )}
                      {matches.medium && (
                        <Typography variant="h6" className="title">
                          Phone
                        </Typography>
                      )}
                      {matches.large && (
                        <Typography variant="h3" className="title">
                          Phone
                        </Typography>
                      )}
                      {matches.small && (
                        <Typography variant="subtitle2" className="subtitle">
                          +152 534-468-854
                        </Typography>
                      )}
                      {matches.medium && (
                        <Typography variant="subtitle1" className="subtitle">
                          +152 534-468-854
                        </Typography>
                      )}
                      {matches.large && (
                        <Typography variant="h5" className="subtitle">
                          +152 534-468-854
                        </Typography>
                      )}
                    </div>
                  </Grid>
                  <Grid item md={1}>
                    <LocationOnIcon className="icon" />
                  </Grid>
                  <Grid item md={11}>
                    <div className="contact-detail">
                      {matches.small && (
                        <Typography variant="subtitle1" className="title">
                          Location
                        </Typography>
                      )}
                      {matches.medium && (
                        <Typography variant="h6" className="title">
                          Location
                        </Typography>
                      )}
                      {matches.large && (
                        <Typography variant="h3" className="title">
                          Location
                        </Typography>
                      )}
                      {matches.small && (
                        <Typography variant="subtitle2" className="subtitle">
                          View on Google Map
                        </Typography>
                      )}
                      {matches.medium && (
                        <Typography variant="subtitle1" className="subtitle">
                          View on Google Map
                        </Typography>
                      )}
                      {matches.large && (
                        <Typography variant="h5" className="subtitle">
                          View on Google Map
                        </Typography>
                      )}
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Fragment>
        )}
      </Media>
    </div>
  );
};

export default ContactUs;
