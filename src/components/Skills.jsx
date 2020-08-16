import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";

import cssLogo from "./../assets/skillLogos/css3-brands.svg";
import mySql from "./../assets/skillLogos/database-solid.svg";
import docker from "./../assets/skillLogos/docker-brands.svg";
import git from "./../assets/skillLogos/github-brands.svg";
import html from "./../assets/skillLogos/html5-brands.svg";
import java from "./../assets/skillLogos/java-brands.svg";
import jenkins from "./../assets/skillLogos/jenkins-brands.svg";
import javascript from "./../assets/skillLogos/js-brands.svg";
import react from "./../assets/skillLogos/react-brands.svg";
import springboot from "./../assets/sb-02.svg";
import springCloud from "./../assets/spring-cloud.svg";
import aws from './../assets/skillLogos/aws-brands.svg'

const Skills = () => {



  let skillStyleStatic = {
    boxShadow:"5px 8px 6px -6px #1ebba3",
    borderRadius:"20px",
    backgroundColor:"rgba(255,255,255,0.4)",
    color:"rgba(255,255,255,0.0)",
  }

  let skillStyle = skillStyleStatic;

  function MouseOver(event) {
    console.log(event.target);
    event.currentTarget.style.boxShadow="0 10px 50px 4px #1ebba3";
    event.currentTarget.style.backgroundColor="rgba(255,255,255,1)";
    event.currentTarget.style.borderRadius="0px";
    event.currentTarget.style.color="#000";
  }
  function MouseOut(event){
    event.currentTarget.style.boxShadow="5px 8px 6px -6px #1ebba3";
  }

  return (
    <>
      <div className="skills-container">
        

        <CardDeck>
          <Card onMouseOver={MouseOver} onMouseOut={MouseOut} style={skillStyle}>
            <Card.Img variant="top" src={react} height="300px" className="skill-card-img"/>
            <Card.Body>
              <Card.Title>React JS</Card.Title>
              <hr />
              <Card.Text className="skill-card-text">
                Good Hands On experience with adding CSS for a marvelous User
                Experience
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <p>Self assesed proficiency in this skill</p>
              <ProgressBar variant="success" animated now={75} label={'75%'} />
            </Card.Footer>
          </Card>

          <Card onMouseOver={MouseOver} onMouseOut={MouseOut} style={skillStyle}>
            <Card.Img variant="top" src={html} height="300px" />
            <Card.Body>
              <Card.Title>HTML</Card.Title>
              <hr />
              <Card.Text>
                Built/Enhanced and added features to several websites built using html.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <p>Self assesed proficiency in this skill</p>
              <ProgressBar variant="success" animated now={80} label={'80%'} />
            </Card.Footer>
          </Card>

          <Card onMouseOver={MouseOver} onMouseOut={MouseOut} style={skillStyle}>
            <Card.Img variant="top"  src={javascript} height="300px" />
            <Card.Body>
              <Card.Title>JavaScript</Card.Title>
              <hr />
              <Card.Text>
                Used ES6 features as well as Vanilla JS features a lot. The magical synchronous language in which I am very comfortable 
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <p>Self assesed proficiency in this skill</p>
              <ProgressBar variant="success" animated now={88} label={'88%'} />
            </Card.Footer>
          </Card>

          <Card onMouseOver={MouseOver} onMouseOut={MouseOut} style={skillStyle}>
            <Card.Img variant="top" src={cssLogo} height="300px" />
            <Card.Body>
              <Card.Title>CSS</Card.Title>
              <hr />
              <Card.Text>
                Good Hands On experience with adding CSS for a marvelous User
                Experience, used Bootstrap in some projects as well.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <p>Self assesed proficiency in this skill</p>
              <ProgressBar variant="success" animated now={70} label={'70%'} />
            </Card.Footer>
          </Card>
        </CardDeck>

        <div className="hard-margin" />


        <CardDeck>
        <Card onMouseOver={MouseOver} onMouseOut={MouseOut} style={skillStyle}>
            <Card.Img variant="top" src={docker} height="300px" />
            <Card.Body>
              <Card.Title>Docker</Card.Title>
              <hr />
              <Card.Text>
                Deploying containerised apps using Docker since more than a year, might have released 100+ apps but not less
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <p>Self assesed proficiency in this skill</p>
              <ProgressBar variant="success" animated now={72} label={'72%'} />
            </Card.Footer>
          </Card>

          <Card onMouseOver={MouseOver} onMouseOut={MouseOut} style={skillStyle}>
            <Card.Img variant="top" src={git} height="300px" />
            <Card.Body>
              <Card.Title>Git</Card.Title>
              <hr />
              <Card.Text>
                Used 4 Source control systems since last 5 years , this is the most advanced and elastic VCS I came accross.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <p>Self assesed proficiency in this skill</p>
              <ProgressBar variant="info" animated now={50} label={'50%'} />
            </Card.Footer>
          </Card>

          <Card onMouseOver={MouseOver} onMouseOut={MouseOut} style={skillStyle}>
            <Card.Img variant="top"  src={jenkins} height="300px" />
            <Card.Body>
              <Card.Title>Jenkins</Card.Title>
              <hr />
              <Card.Text>
                Familiar with the dashboard to configure Jobs , adding plugins , configuring Hooks and other basic CI/CD operations.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <p>Self assesed proficiency in this skill</p>
              <ProgressBar variant="warn" animated now={40} label={'40%'} />
            </Card.Footer>
          </Card>

          <Card onMouseOver={MouseOver} onMouseOut={MouseOut} style={skillStyle}>
            <Card.Img variant="top" src={aws} height="300px" />
            <hr />
            <Card.Body>
              <Card.Title>AWS</Card.Title>
              <hr />
              <Card.Text>
             Basic knowledge, recently moved to this platform and found it a one stop solution for many needs. Targeting Certification ASAP
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <p>Self assesed proficiency in this skill</p>
              <ProgressBar variant="warning" animated now={30} label={'30%'} />
            </Card.Footer>
          </Card>
        </CardDeck>

        <div className="hard-margin" />

        <CardDeck>
        <Card onMouseOver={MouseOver} onMouseOut={MouseOut} style={skillStyle}>
            <Card.Img variant="top" src={springboot} height="300px"  />
            <Card.Body>
              <Card.Title>Spring Boot</Card.Title>
              <hr />
              <Card.Text>
                Scalable and secured standalone Spring boot microservices which can communicate via Messaging systems or Rest calls.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <p>Self assesed proficiency in this skill</p>
              <ProgressBar variant="success" animated now={30} label={'30%'} />
            </Card.Footer>
          </Card>

          <Card onMouseOver={MouseOver} onMouseOut={MouseOut} style={skillStyle}>
            <Card.Img variant="top" src={springCloud} height="300px" />
            <Card.Body>
              <Card.Title>Spring Cloud</Card.Title>
              <hr />
              <Card.Text>
                Used API Gateways, Discovery service, Fault tolerance, Cloud configuration, etc. extensively in many applications.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <p>Self assesed proficiency in this skill</p>
              <ProgressBar variant="success" animated now={75} label={'75%'} />
            </Card.Footer>
          </Card>

          <Card onMouseOver={MouseOver} onMouseOut={MouseOut} style={skillStyle}>
            <Card.Img variant="top" src={java} height="300px" />
            <Card.Body>
              <Card.Title>Java</Card.Title>
              <hr />
              <Card.Text>
                5+ years of experience in maintaining, developing, testing and debugging Java/J2EE applications.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <p>Self assesed proficiency in this skill</p>
              <ProgressBar variant="success" animated now={90} label={'90%'} />
            </Card.Footer>
          </Card>

          <Card onMouseOver={MouseOver} onMouseOut={MouseOut} style={skillStyle}>
            <Card.Img variant="top" src={mySql} height="300px" />
            <Card.Body>
              <Card.Title>MySql DB</Card.Title>
              <hr />
              <Card.Text>
                Confident in writing common organisational level Queries and operations. Neither a pro nor a Begginner.  
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <p>Self assesed proficiency in this skill</p>
              <ProgressBar variant="info" animated now={60} label={'60%'} />
            </Card.Footer>
          </Card>
        </CardDeck>

        <div className="hard-margin" />

      </div>
    </>
  );
};
export default Skills;
