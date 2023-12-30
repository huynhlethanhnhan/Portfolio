import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo_cv.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/CV.svg';
import navIcon3 from '../assets/img/nav-icon4.svg';
import navIcon4 from '../assets/img/education.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/huynhlethanhnhan/"><img src={navIcon1} alt="Icon" /></a>
                <a href="https://drive.google.com/file/d/1OhS4IQT9Gxg2NCP7K6y3jNSbqZfRZcks/view?usp=sharing"><img src={navIcon2} alt="Icon" /></a>
                <a href="https://github.com/huynhlethanhnhan"><img src={navIcon3} alt="Icon" /></a>
                <a href="https://ntt.edu.vn/"><img src={navIcon4} alt="Icon"></img></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
