import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/education.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Education = () => {

  const projects = [
    {
      title: "Begining Study 2020-2024",
      description: "Development & Build",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Education</h2>
                <p> 
                Nguyen Tat Thanh University in Ho Chi Minh City, Vietnam, is recognized for its commitment to delivering high-quality education. The university boasts modern facilities and a dedicated faculty. The Information Technology department offers a comprehensive curriculum covering programming, database management, system analysis, and advanced topics like artificial intelligence. Graduates have diverse career opportunities in software development, data analysis, and project management. For the latest information, it is recommended to contact the university directly or visit their official website.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>
                      Nguyen Tat Thanh University in Ho Chi Minh City, Vietnam, is recognized for its commitment to delivering high-quality education. The university boasts modern facilities and a dedicated faculty. The Information Technology department offers a comprehensive curriculum covering programming, database management, system analysis, and advanced topics like artificial intelligence. Graduates have diverse career opportunities in software development, data analysis, and project management. For the latest information, it is recommended to contact the university directly or visit their official website.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>
                      Nguyen Tat Thanh University in Ho Chi Minh City, Vietnam, is recognized for its commitment to delivering high-quality education. The university boasts modern facilities and a dedicated faculty. The Information Technology department offers a comprehensive curriculum covering programming, database management, system analysis, and advanced topics like artificial intelligence. Graduates have diverse career opportunities in software development, data analysis, and project management. For the latest information, it is recommended to contact the university directly or visit their official website.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
