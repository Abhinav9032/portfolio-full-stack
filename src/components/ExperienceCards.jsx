import React from "react";
import cerner from "./../assets/cer-aws.jpg";
import tcslogo from "./../assets/TCS-Logo.jpg";
import Button from "react-bootstrap/Button";

const ExperienceCards = () => {
  function mouseOver(event) {
    console.log(event.target.lastElementChild);
    const image = document.getElementById("image-id");
    image.style.transform = "translateX(-8rem)";
    image.style.transition = "transform 0.6s linear";
  }

  function mouseOverTcs(event) {
    console.log(event.target.lastElementChild);
    const image = document.getElementById("image-id-tcs");
    image.style.transform = "translateX(-8rem)";
    image.style.transition = "transform 0.6s linear";
  }
  

  function buttonMouseOver(event) {
    const button = document.getElementById("visit-button");
    button.style.backgroundImage =
      "linear-gradient(to right ,#4facfe  0%,#00f2fe 100% )";
  }

  function buttonMouseOut(event) {
    const button = document.getElementById("visit-button");
    button.style.backgroundImage =
      "linear-gradient(to right ,#00f2fe  0%,#4facfe 100% )";
  }

  return (
    <>
     <h3 className="skill-header" id="experience-section">Experience</h3>
      <div className="blog-post-container">
        <div className="blog-post" onMouseOver={mouseOver}>
          <div className="blog-post-img" id="image-id">
            <img src={cerner} alt="Cerner" />
          </div>
          <div className="blog-post-info">
            <div className="blog-post-date">
              <span>1.3 Years , May 2019 - Present</span>
              <span>Associate Senior Software Engineer</span>
            </div>
            <h1 className="blog-post-title">Cerner HealthCare</h1>
            <p className="blog-post-text" id="role">
              My Responsibilities :
              <p className="blog-post-text" id="tasks">
                <ul>
                  <li>Maintain 100+ microservices deployed on cloud</li>
                  <li>
                    Develop spring boot microservices based based on 12 factor
                    App
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
              </p>
            </p>
            <a
              href="https://www.cerner.com/"><Button variant="outline-secondary">Visit Cerner</Button>{' '}</a>
          </div>
        </div>
      </div>
      <div className="hard-margin" />


      <div className="blog-post-container">
        <div className="blog-post" onMouseOver={mouseOverTcs}>
          <div className="blog-post-img" id="image-id-tcs">
            <img src={tcslogo} alt="TCS" />
          </div>
          <div className="blog-post-info">
            <div className="blog-post-date">
              <span>3.9 Years , Aug 2015 - May 2019</span>
              <span>Systems Engineer</span>
            </div>
            <h1 className="blog-post-title">Tata Consultancy Services</h1>
            <p className="blog-post-text" id="role">
              My Responsibilities :
              <p className="blog-post-text" id="tasks">
                <ul>
                  <li>Developer for service layer constructed on Spring framework.</li>
                  <li>
                  API for android app for real time geo positioning
                  </li>
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
              </p>
            </p>
            <a
              href="https://www.tcs.com/"><Button variant="outline-secondary">Visit T.C.S</Button>{' '}</a>
          </div>
        </div>
      </div>
      <div className="hard-margin"></div>
    </>
  );
};

export default ExperienceCards;
