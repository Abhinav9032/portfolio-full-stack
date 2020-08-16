import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import cerner from "./../assets/cer-08.png";
import tcslogo from "./../assets/TCS-Logo.jpg";
import tatlogo from "./../assets/tat-01.jpeg";

const Experiece = () => {
  return (
    <>
      <div className="experience-card-container">
        <Card>
          <Card.Header as="h4" className="text-center">
            Current Employer
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <h3>Cerner HealthCare </h3>
            </Card.Title>
            <img id="company-logo" src={cerner} alt="CERNER" />
            <Card.Text>
              <h4>Associate Senior Software Engineer</h4>
              <h4>Responsibilities :</h4>
              <ul className="responsibilities-list">
                <li>Maintain 100+ microservices deployed on cloud</li>
                <li>
                  Develop spring boot microservices based based on 12 factor App
                </li>
                <li>
                  Develop Front End Apps based on React on Rails Framework
                </li>
                <li>Debug/Fix and Deploy any bug in existing product</li>
                <li>
                  Monitor CI/CD pipelines and continuously scan for
                  vulnerabilities in code
                </li>
                <li>Review and enhance peer developer's code</li>
              </ul>
            </Card.Text>
            <a href="https://www.cerner.com/">
              <Button variant="primary">Visit Cerner's site</Button>
            </a>
          </Card.Body>
          <Card.Footer className="text-muted">May/2019 - Present</Card.Footer>
        </Card>
      </div>
      <div className="hard-margin"></div>

      <div className="experience-card-container">
        <Card>
          <Card.Header as="h4" className="text-center">
            Previous Employer
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <h3>Tata Consultancy Services</h3>
            </Card.Title>
            <img id="company-logo" src={tcslogo} alt="TCS" />
            <Card.Text>
              <h4>Systems Engineer</h4>
              <h4>Responsibilities :</h4>
              <ul className="responsibilities-list">
                <li>
                  Developer for service layer constructed on Spring framework.
                </li>
                <li>API for android app for real time geo positioning</li>
                <li>
                  Monitor and Enhance the App developed using REST Web service ,
                  Spring boot microservices , JPA
                </li>
                <li>Debug/Fix and Deploy any bug in existing product</li>
                <li>
                  UI included cutting edge technologies - React JS , Bootstrap
                </li>
                <li>Deploying exceutables on Azure</li>
              </ul>
            </Card.Text>
            <a href="https://www.tcs.com/">
              <Button variant="primary">TCS Official Website</Button>
            </a>
          </Card.Body>
          <Card.Footer className="text-muted">Aug/2015 - May/2019</Card.Footer>
        </Card>
      </div>
      <div className="hard-margin" />

      <div className="experience-card-container">
        <Card>
          <Card.Header as="h4" className="text-center">
            Educational Background
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <h3>Trident Academy Of Technology</h3>
            </Card.Title>
            <img id="company-logo" src={tatlogo} alt="Trident" />
            <div className="hard-margin" />
            <Card.Text>
              <h4>Electronics And Telecommunications</h4>
              <h4>
                CGPA : <h6>76%</h6>{" "}
              </h4>
              <h4>
                Year of passing : <h6>2015</h6>{" "}
              </h4>

              <div className="hard-margin" />
            </Card.Text>
            <div className="hard-margin" />
            <a href="https://tat.ac.in/">
              <Button variant="primary">Visit Trident's site</Button>
            </a>
          </Card.Body>
          <Card.Footer className="text-muted">Apr/2011 - Apr/2015</Card.Footer>
        </Card>
      </div>
      <div className="hard-margin" />
    </>
  );
};

export default Experiece;
