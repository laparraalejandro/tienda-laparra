import React from "react";
import { Card } from 'react-bootstrap';
import { GitHub, LinkedIn } from "@material-ui/icons";
import "./Footer.css";

const Footer = (appData) => {
  return (
    <>
      <footer class="footer">
        <Card 
          bg="dark" 
          variant="dark" 
          className="text-center rounded-0">
          <Card.Body>
            <Card.Link href={appData.github}>
              <GitHub
                fontSize="large"
                className="social-icons"
              /></Card.Link>
            <Card.Link href={appData.linkedin}>
              <LinkedIn
                fontSize="large"
                className="social-icons"
              /></Card.Link>
          </Card.Body>
          <Card.Subtitle 
            className="mb-2 text-muted">
            © {new Date().getFullYear()} Copyright | {appData.author}
          </Card.Subtitle>
        </Card>
      </footer>
    </>
  )
};

export default Footer;

