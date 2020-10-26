import React, { Fragment } from "react";
import Media from "react-media";

const AboutUs = () => {
  return (
    <div className="about-container">
      <Media
        queries={{
          small: "(max-width: 699px)",
          medium: "(min-width: 700px) and (max-width: 1399px)",
          large: "(min-width: 1400px)",
        }}
      >
        {(matches) => (
          <Fragment>
            <div>
              {matches.small && (
                <>
                  <div className="row">
                    <div className="col-md-12 about-us">
                      <span className="title title-small">How It Work?</span>
                      <p className="subtitle subtitle-small">
                        Start working with <span>Landrick</span> that can
                        provide everything you need to generate awareness, drive
                        traffic, connect.
                      </p>
                    </div>
                    <div className="about-content">
                      <div className="row">
                        <div className="col-md-6 list-item">
                          <p className="list-title list-title-small">
                            <i class="far fa-question-circle"></i>
                            How Our <span>Landrick</span> work?
                          </p>
                          <div className="list-subtitle list-subtitle-small">
                            Due to its widespread use as filler text for
                            layouts, non-readability is of great importance:
                            human perception is tuned to recognize certain
                            patterns and receptions in texts.
                          </div>
                        </div>

                        <div className="col-md-6 list-item">
                          <p className="list-title list-title-small">
                            <i class="far fa-question-circle"></i>
                            What is the main process open account?
                          </p>
                          <div className="list-subtitle list-subtitle-small">
                            If the distribution of letters and 'words' is
                            random, the reader will not be distracted from
                            making a neutral judgement on the visual impact.
                          </div>
                        </div>

                        <div className="col-md-6 list-item bottom">
                          <p className="list-title list-title-small">
                            <i class="far fa-question-circle"></i>
                            How to make unlimited data entry?
                          </p>
                          <div className="list-subtitle list-subtitle-small">
                            Futhermore, it is advantageous when the dummy text
                            is relatively realistic so that the layout
                            impression of the final publication is not
                            compromised.
                          </div>
                        </div>

                        <div className="col-md-6 list-item bottom">
                          <p className="list-title list-title-small">
                            <i class="far fa-question-circle"></i>
                            Is <span>Landrick</span> safer to use with my
                            account?
                          </p>
                          <div className="list-subtitle list-subtitle-small">
                            The most well-known dummy text is the 'Lorem Ipsum',
                            which is said to have originated in the 16th
                            century. Lorem Ipsum is composed in a pseudo-Latin
                            language which more or less corresponds to 'proper'
                            Latin.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {matches.medium && (
                <>
                  <div className="row">
                    <div className="col-md-12 about-us">
                      <span className="title title-medium">How It Work?</span>
                      <p className="subtitle subtitle-medium">
                        Start working with <span>Landrick</span> that can
                        provide everything you need to generate awareness, drive
                        traffic, connect.
                      </p>
                    </div>
                    <div className="about-content">
                      <div className="row">
                        <div className="col-md-6 list-item">
                          <p className="list-title list-title-medium">
                            <i class="far fa-question-circle"></i>
                            How Our <span>Landrick</span> work?
                          </p>
                          <div className="list-subtitle list-subtitle-medium">
                            Due to its widespread use as filler text for
                            layouts, non-readability is of great importance:
                            human perception is tuned to recognize certain
                            patterns and receptions in texts.
                          </div>
                        </div>

                        <div className="col-md-6 list-item">
                          <p className="list-title list-title-medium">
                            <i class="far fa-question-circle"></i>
                            What is the main process open account?
                          </p>
                          <div className="list-subtitle list-subtitle-medium">
                            If the distribution of letters and 'words' is
                            random, the reader will not be distracted from
                            making a neutral judgement on the visual impact.
                          </div>
                        </div>

                        <div className="col-md-6 list-item bottom">
                          <p className="list-title list-title-medium">
                            <i class="far fa-question-circle"></i>
                            How to make unlimited data entry?
                          </p>
                          <div className="list-subtitle list-subtitle-medium">
                            Futhermore, it is advantageous when the dummy text
                            is relatively realistic so that the layout
                            impression of the final publication is not
                            compromised.
                          </div>
                        </div>

                        <div className="col-md-6 list-item bottom">
                          <p className="list-title list-title-medium">
                            <i class="far fa-question-circle"></i>
                            Is <span>Landrick</span> safer to use with my
                            account?
                          </p>
                          <div className="list-subtitle list-subtitle-medium">
                            The most well-known dummy text is the 'Lorem Ipsum',
                            which is said to have originated in the 16th
                            century. Lorem Ipsum is composed in a pseudo-Latin
                            language which more or less corresponds to 'proper'
                            Latin.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {matches.large && (
                <>
                  <div className="row">
                    <div className="col-md-12 about-us">
                      <span className="title title-large">How It Work?</span>
                      <p className="subtitle subtitle-large">
                        Start working with <span>Landrick</span> that can
                        provide everything you need to generate awareness, drive
                        traffic, connect.
                      </p>
                    </div>
                    <div className="about-content">
                      <div className="row">
                        <div className="col-md-6 list-item">
                          <p className="list-title list-title-large">
                            <i class="far fa-question-circle"></i>
                            How Our <span>Landrick</span> work?
                          </p>
                          <div className="list-subtitle list-subtitle-large">
                            Due to its widespread use as filler text for
                            layouts, non-readability is of great importance:
                            human perception is tuned to recognize certain
                            patterns and receptions in texts.
                          </div>
                        </div>

                        <div className="col-md-6 list-item">
                          <p className="list-title list-title-large">
                            <i class="far fa-question-circle"></i>
                            What is the main process open account?
                          </p>
                          <div className="list-subtitle list-subtitle-large">
                            If the distribution of letters and 'words' is
                            random, the reader will not be distracted from
                            making a neutral judgement on the visual impact.
                          </div>
                        </div>

                        <div className="col-md-6 list-item bottom">
                          <p className="list-title list-title-large">
                            <i class="far fa-question-circle"></i>
                            How to make unlimited data entry?
                          </p>
                          <div className="list-subtitle list-subtitle-large">
                            Futhermore, it is advantageous when the dummy text
                            is relatively realistic so that the layout
                            impression of the final publication is not
                            compromised.
                          </div>
                        </div>

                        <div className="col-md-6 list-item bottom">
                          <p className="list-title list-title-large">
                            <i class="far fa-question-circle"></i>
                            Is <span>Landrick</span> safer to use with my
                            account?
                          </p>
                          <div className="list-subtitle list-subtitle-large">
                            The most well-known dummy text is the 'Lorem Ipsum',
                            which is said to have originated in the 16th
                            century. Lorem Ipsum is composed in a pseudo-Latin
                            language which more or less corresponds to 'proper'
                            Latin.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </Fragment>
        )}
      </Media>
    </div>
  );
};

export default AboutUs;
