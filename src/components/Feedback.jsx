import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import me from "./../assets/logo512.png";
import GetResume from "./GetResume";

const Feedback = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="contact-me">
      <Jumbotron fluid>
        <Container>
          <div id="cont-first-child">
            <div id="resume-cont">
              <GetResume />
            </div>
            <div id="contact-cont">
              <h1>Wanna have a word with me ?</h1>
              <p>
                Since you went though my Portfolio and saw what I know and how I
                can be helpful for you. I would request you to rate my portfolio
                and provide a genuine feedback so that I can improve my self. A
                great man once said to me "Feedback is a gift Abhinav" and I
                beleive that so please...
              </p>

              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Feedback Time</Form.Label>
                  <Form.Control
                    type="textarea"
                    placeholder="Please be fair and rude. I won't mind"
                  />
                  <Form.Text className="text-muted">
                    In case you are not interested in typing , go for the option
                    below..
                  </Form.Text>
                </Form.Group>
                <div className="range-input">
                  <Form.Group controlId="formBasicRange">
                    <Form.Label>
                      Rate it within this range of 1 to 10
                    </Form.Label>
                    <Form.Control type="range" />
                  </Form.Group>
                </div>

                <Alert show={show} variant="success">
                  <Alert.Heading>I am Obliged!</Alert.Heading>
                  <p>
                    Thanks for your time and efforts to visit this site and
                    provide the Gift of feedback. I really appreciate your
                    patience and kindness...
                  </p>
                  <hr />
                  <div className="d-flex justify-content-end">
                    <Button
                      onClick={() => setShow(false)}
                      variant="outline-success"
                    >
                      Close me
                    </Button>
                  </div>
                </Alert>

                {!show && (
                  <Button onClick={() => setShow(true)}>Submit Feedback</Button>
                )}
              </Form>

              <div id="lab_social_icon_footer">
                <link
                  href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
                  rel="stylesheet"
                />
                <div class="container">
                  <div class="text-center center-block">
                    <a href="https://www.facebook.com/bootsnipp">
                      <i
                        id="social-fb"
                        class="fa fa-facebook-square fa-3x social"
                      ></i>
                    </a>
                    <a href="https://twitter.com/bootsnipp">
                      <i
                        id="social-tw"
                        class="fa fa-twitter-square fa-3x social"
                      ></i>
                    </a>

                    <a href="mailto:abhinav9032@gmail.com">
                      <i
                        id="social-em"
                        class="fa fa-envelope-square fa-3x social"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Feedback;
