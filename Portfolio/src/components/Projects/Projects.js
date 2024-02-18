import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/task.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/shophere.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/happy.png";

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
              imgPath={chatify}
              isBlog={false}
              title="ShopHere"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/mrpratham/E-Commerce-Web"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SkillHub- Responsive landing Page"
              description="A responsive landing page called Skillhub! Developed using HTML, CSS, and Javascript, Skillhub offers a user-friendly interface to showcase skills and expertise. It's designed to adapt seamlessly across devices, providing a smooth experience for visitors. Check it out and let's connect!"
              ghLink="https://github.com/mrpratham/PRODIGY_WD_01"
              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Task Management System"
              description="A task management system using JavaScript, Node.js, and MongoDB enables users to efficiently organize, track, and prioritize tasks within projects or workflows."
              ghLink="https://github.com/mrpratham/task-management-system"
              demoLink="https://github.com/mrpratham/task-management-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="StopWatch Web App"
              description="A Stopwatch Web App built from scratch using HTML, CSS, and JavaScript! This sleek application offers precision timing features and a user-friendly interface, perfect for tracking time with accuracy. Dive in, explore its functionality, and let's connect to discuss more!"
              ghLink="https://github.com/mrpratham/PRODIGY_WD_02"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
