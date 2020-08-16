import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "./../assets/logo.svg";
import "./../App.css";

const PortfolioNavbar = () => {
  const navbarItemStyle = {
    marginLeft: "10px",
    color:"#fff",
    fontSize:'20px'
  };
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="50"
            height="50"
            className="App-logo"
            id="App-logo"
            alt="logo"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
      <Nav.Link href="#home" style={navbarItemStyle}>Home</Nav.Link>
      <Nav.Link href="#experience-section" style={navbarItemStyle}>Experience</Nav.Link>
      <Nav.Link href="#skill-section" style={navbarItemStyle}>My Skills</Nav.Link>
      <Nav.Link href="#about-section" style={navbarItemStyle}>About</Nav.Link>

    </Nav>
      </Navbar>
    </>
  );
};

export default PortfolioNavbar;
