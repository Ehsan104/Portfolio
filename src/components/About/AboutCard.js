import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey Everyone, I am <span className="purple">Ehsan Nawaz </span>
            from <span className="purple"> California, USA.</span>
            <br />
            I am currently a senior at University of California, Davis majoring in Computer Science.
            <br />
            I have a strong passion for technology and innovation, constantly seeking to enhance my skills and knowledge.
            <br />
            <br />
            Apart from trying to build cool coding projects, some other activities that I love to do are: 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Work Out
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel
            </li>
            <li className="about-activity">
              <ImPointRight /> Work on Cars
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Creating meaningful projects means crafting solutions that inspire and drive positive change"{" "}
          </p>
          <footer className="blockquote-footer">Ehsan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
