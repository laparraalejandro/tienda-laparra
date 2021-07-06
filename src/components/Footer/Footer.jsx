import React from "react";
import { Card } from 'react-bootstrap';
import { GitHub, LinkedIn } from "@material-ui/icons";
import "./Footer.scss";

const Footer = (props) => {
  return (
    <>
      <footer class="footer">
        <Card bg="dark" variant="dark" className="text-center">
          <Card.Body>
            <Card.Link href={props.github}>
              <GitHub
                fontSize="large"
                className="social-icons"
              /></Card.Link>
            <Card.Link href={props.linkedin}>
              <LinkedIn
                fontSize="large"
                className="social-icons"
              /></Card.Link>
          </Card.Body>
          <Card.Subtitle className="mb-2 text-muted">© {new Date().getFullYear()} Copyright | {props.author}</Card.Subtitle>
        </Card>
      </footer>
    </>
  )
};

export default Footer;

