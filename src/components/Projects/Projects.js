import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Multithread from "../../Assets/Projects/Multithread.png";
import little_red from "../../Assets/Projects/little_red.png";
import F1 from "../../Assets/Projects/F1.png";
import BrainTumor from "../../Assets/Projects/BrainTumor.png";
import Wordle from "../../Assets/Projects/Wordle.png";
import Shell from "../../Assets/Projects/Shell.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BrainTumor}
              isBlog={false}
              title="Brain Tumor Classification Model"
              description="A Machine Learning project that classifies x-ray images of the brain into two categories, healthy and tumor affected. Achieved 99% accuracy."
              ghLink="https://github.com/Ehsan104/Brain_Tumor_Classification"
              demoLink="https://brain-tumor-classification-model.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Shell}
              isBlog={false}
              title="Shell"
              description="developed a simple shell, which we called wish using C++ programming. The main goal was to create a shell that could interpret and execute user input in the form of command lines, just like a typical UNIX terminal."
              ghLink="https://github.com/Ehsan104/ECS150-Projects/tree/main/project2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={F1}
              isBlog={false}
              title="F1 Race Countdown Timer"
              description="Currently working on a project that will display the countdown timer till the next F1 Race as well as the future races to come after that. The project is being developed using React.js and the data is being fetched from a google sheet."
              ghLink="https://github.com/Ehsan104/f1_race_timer"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Multithread}
              isBlog={false}
              title="MutliThreaded Web Server"
              description="Converted a single-threaded web server to a multi-threaded web server using C++ programming. The server is capable of handling multiple requests simultaneously."
              ghLink="https://github.com/Ehsan104/ECS150-Projects/tree/main/project3"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Wordle}
              isBlog={false}
              title="Automated Wordle Solver"
              description="Developed a program that runs a computer vs computer game of Wordle. The program automatically guesses the words and continues playing until it wins the wordle."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={little_red}
              isBlog={false}
              title="Little Red Riding Hood"
              description="Co-developed an OOP-based Little Red Riding Hood simulation, incorporating JSON for scalable data representation and character mobility."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
