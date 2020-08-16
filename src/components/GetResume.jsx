import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import me from './../assets/logo512.png'
import link from './../assets/skillLogos/external-link-alt-solid.svg'
import Resume from './../assets/AbhinavResume.pdf'


const GetResume = () => {
    return(
        <div className="my-profile">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={me} />
        <Card.Body>
         <Card.Title>Abhinav Mishra</Card.Title>
         
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>My Hacker Earth Profile - <a href="https://www.hackerearth.com/@abhinav9032"><img src={link} height="20px" alt="link"/></a></ListGroupItem>
    <ListGroupItem>My Techgig Profile - <a href="https://www.techgig.com/abhinavmishra28"><img src={link} height="20px" alt="link"/></a></ListGroupItem>
    <ListGroupItem>Mail  -   abhinav9032@gmail.com</ListGroupItem>
  </ListGroup>
  <Card.Body>
  <a href={Resume} download="AbhinavResume.pdf">
   <Button variant="primary">Download My Resume</Button>
   </a>
  </Card.Body>
</Card>
        </div>
    )
}

export default GetResume;