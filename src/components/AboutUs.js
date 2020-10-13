import React, { Fragment } from "react";
import Media from "react-media";

/** Material UI Imports */
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const AboutUs = () => {
  return (
    <div className="container">
      <Media
        queries={{
          small: "(max-width: 699px)",
          medium: "(min-width: 700px) and (max-width: 1399px)",
          large: "(min-width: 1400px)",
        }}
      >
        {(matches) => (
          <Fragment>
            <Grid container>
              <Grid item md={12} className="about-us">
                {matches.small && (
                  <Typography variant="h5" className="title">
                    How It Work?
                  </Typography>
                )}
                {matches.medium && (
                  <Typography variant="h3" className="title">
                    How It Work?
                  </Typography>
                )}
                {matches.large && (
                  <Typography variant="h2" className="title">
                    How It Work?
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
              </Grid>
              <Grid container className="about-content">
                <Grid item md={6} className="list-item">
                  {matches.small && (
                    <Typography variant="subtitle1" className="list-title">
                      <HelpOutlineIcon className="icon" />
                      How Our <span>Landrick</span> work?
                    </Typography>
                  )}
                  {matches.medium && (
                    <Typography variant="h6" className="list-title">
                      <HelpOutlineIcon className="icon" />
                      How Our <span>Landrick</span> work?
                    </Typography>
                  )}
                  {matches.large && (
                    <Typography variant="h4" className="list-title">
                      <HelpOutlineIcon className="icon" />
                      How Our <span>Landrick</span> work?
                    </Typography>
                  )}
                  {matches.small && (
                    <Typography variant="body2" className="subtitle">
                      Due to its widespread use as filler text for layouts,
                      non-readability is of great importance: human perception
                      is tuned to recognize certain patterns and receptions in
                      texts.
                    </Typography>
                  )}
                  {matches.medium && (
                    <Typography variant="subtitle2" className="subtitle">
                      Due to its widespread use as filler text for layouts,
                      non-readability is of great importance: human perception
                      is tuned to recognize certain patterns and receptions in
                      texts.
                    </Typography>
                  )}
                  {matches.large && (
                    <Typography variant="h6" className="subtitle">
                      Due to its widespread use as filler text for layouts,
                      non-readability is of great importance: human perception
                      is tuned to recognize certain patterns and receptions in
                      texts.
                    </Typography>
                  )}
                </Grid>
                <Grid item md={6} className="list-item">
                  {matches.small && (
                    <Typography variant="subtitle1" className="list-title">
                      <HelpOutlineIcon className="icon" />
                      What is the main process open account?
                    </Typography>
                  )}
                  {matches.medium && (
                    <Typography variant="h6" className="list-title">
                      <HelpOutlineIcon className="icon" />
                      What is the main process open account?
                    </Typography>
                  )}
                  {matches.large && (
                    <Typography variant="h4" className="list-title">
                      <HelpOutlineIcon className="icon" />
                      What is the main process open account?
                    </Typography>
                  )}
                  {matches.small && (
                    <Typography variant="body2" className="subtitle">
                      If the distribution of letters and 'words' is random, the
                      reader will not be distracted from making a neutral
                      judgement on the visual impact.
                    </Typography>
                  )}
                  {matches.medium && (
                    <Typography variant="subtitle2" className="subtitle">
                      If the distribution of letters and 'words' is random, the
                      reader will not be distracted from making a neutral
                      judgement on the visual impact.
                    </Typography>
                  )}
                  {matches.large && (
                    <Typography variant="h6" className="subtitle">
                      If the distribution of letters and 'words' is random, the
                      reader will not be distracted from making a neutral
                      judgement on the visual impact.
                    </Typography>
                  )}
                </Grid>
                <Grid item md={6} className="list-item bottom">
                  {matches.small && (
                    <Typography variant="subtitle1" className="list-title">
                      <HelpOutlineIcon className="icon" />
                      How to make unlimited data entry?
                    </Typography>
                  )}
                  {matches.medium && (
                    <Typography variant="h6" className="list-title">
                      <HelpOutlineIcon className="icon" />
                      How to make unlimited data entry?
                    </Typography>
                  )}
                  {matches.large && (
                    <Typography variant="h4" className="list-title">
                      <HelpOutlineIcon className="icon" />
                      How to make unlimited data entry?
                    </Typography>
                  )}
                  {matches.small && (
                    <Typography variant="body2" className="subtitle">
                      Futhermore, it is advantageous when the dummy text is
                      relatively realistic so that the layout impression of the
                      final publication is not compromised.
                    </Typography>
                  )}
                  {matches.medium && (
                    <Typography variant="subtitle2" className="subtitle">
                      Futhermore, it is advantageous when the dummy text is
                      relatively realistic so that the layout impression of the
                      final publication is not compromised.
                    </Typography>
                  )}
                  {matches.large && (
                    <Typography variant="h6" className="subtitle">
                      Futhermore, it is advantageous when the dummy text is
                      relatively realistic so that the layout impression of the
                      final publication is not compromised.
                    </Typography>
                  )}
                </Grid>
                <Grid item md={6} className="list-item bottom">
                  {matches.small && (
                    <Typography variant="subtitle1" className="list-title">
                      <HelpOutlineIcon className="icon" />
                      Is <span>Landrick</span> safer to use with my account?
                    </Typography>
                  )}
                  {matches.medium && (
                    <Typography variant="h6" className="list-title">
                      <HelpOutlineIcon className="icon" />
                      Is <span>Landrick</span> safer to use with my account?
                    </Typography>
                  )}
                  {matches.large && (
                    <Typography variant="h4" className="list-title">
                      <HelpOutlineIcon className="icon" />
                      Is <span>Landrick</span> safer to use with my account?
                    </Typography>
                  )}
                  {matches.small && (
                    <Typography variant="body2" className="subtitle">
                      The most well-known dummy text is the 'Lorem Ipsum', which
                      is said to have originated in the 16th century. Lorem
                      Ipsum is composed in a pseudo-Latin language which more or
                      less corresponds to 'proper' Latin.
                    </Typography>
                  )}
                  {matches.medium && (
                    <Typography variant="subtitle2" className="subtitle">
                      The most well-known dummy text is the 'Lorem Ipsum', which
                      is said to have originated in the 16th century. Lorem
                      Ipsum is composed in a pseudo-Latin language which more or
                      less corresponds to 'proper' Latin.
                    </Typography>
                  )}
                  {matches.large && (
                    <Typography variant="h6" className="subtitle">
                      The most well-known dummy text is the 'Lorem Ipsum', which
                      is said to have originated in the 16th century. Lorem
                      Ipsum is composed in a pseudo-Latin language which more or
                      less corresponds to 'proper' Latin.
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Fragment>
        )}
      </Media>
    </div>
  );
};

export default AboutUs;
