import React from "react";
import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
function Projects() {
  const projects = [
    {
      title: "E-comerce",
      description: "Design and Development",
      imgUrl: projImg1,
    },
    {
      title: "E-comerce",
      description: "Design and Development",
      imgUrl: projImg2,
    },
    {
      title: "E-comerce",
      description: "Design and Development",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
              quo ullam esse minus temporibus. Qui aperiam repellendus corporis
              debitis. Perspiciatis omnis ipsam consequuntur ad unde iure
              repellat vitae harum. Placeat!
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-item-center"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
                  eligendi fugit impedit atque doloremque tempore deleniti
                  placeat. Dolores praesentium sit eius debitis reiciendis
                  beatae iure perspiciatis. Fugit porro culpa officia!{" "}
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
                  eligendi fugit impedit atque doloremque tempore deleniti
                  placeat. Dolores praesentium sit eius debitis reiciendis
                  beatae iure perspiciatis. Fugit porro culpa officia!
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="" className="background-image-right" />
    </section>
  );
}

export default Projects;
