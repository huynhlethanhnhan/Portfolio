import { Col } from "react-bootstrap";

export const EducationCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="education-imgbx">
        <img src={imgUrl} />
        <div className="education-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
