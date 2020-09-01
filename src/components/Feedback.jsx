import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import me from './../assets/logo512.png'

const Feedback = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="contact-me">
      <Jumbotron fluid >
        <Container>

  
          <h1>Wanna have a word with me ?</h1>
          <p>
            Since you went though my Portfolio and saw what I know and how I can
            be helpful for you. I would request you to rate my portfolio and
            provide a genuine feedback so that I can improve my self. A great
            man once said to me "Feedback is a gift Abhinav" and I beleive that
            so please...
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
                <Form.Label>Rate it within this range of 1 to 10</Form.Label>
                <Form.Control type="range" />
              </Form.Group>
            </div>

            <Alert show={show} variant="success">
              <Alert.Heading>I am Obliged!</Alert.Heading>
              <p>
                Thanks for your time and efforts to visit this site and provide
                the Gift of feedback. I really appreciate your patience and
                kindness...
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
          <img src={me} alt="avatar" className="myImage"/>
        </Container>
        <div className="additional-height"/>
      </Jumbotron>
    </div>
  );
};

export default Feedback;
