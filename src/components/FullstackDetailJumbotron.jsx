import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
const FullstackDetailJumbotron = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Full Stack Developer</h1>
        <p>
          What is meant by full stack development? 
          <br/>A full-stack developer is a
          web developer or engineer who works with both the front and back ends
          of a website or application—meaning they can tackle projects that
          involve databases, building user-facing websites, or even work with
          clients during the planning phase of projects. 
          <hr/>
          <p style={{textDecoration:"underline"}}>I beleive myself to be a fullstack developer because of the following reasons.</p>
          <hr/>
          <ol>
              <li>
              I am an experienced and
          industry tested developer with zeal and zest to spearhead into new
          technologies and frameworks.
              </li>
          <li>Devote most of my day either in learning
          or applying something new.</li>
          <li>
          A ployglot programmer who is capable to
          create complete applications which include User-Interface , Backend
          Service/s and Database.
          </li>
          <li>
          KnowHow of DevOps using CI/CD pipeline and
          deploying scalable apps to cloud.
          </li>
          <li>
          To add the cherry on top Currently I am learning mobile app
          development using React Native and aspiring for AWS certification.
          </li>
            
          </ol>
        </p>
      </Container>
    </Jumbotron>
  );
};

export default FullstackDetailJumbotron;
