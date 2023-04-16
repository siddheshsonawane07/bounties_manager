
import { Row, Col } from "react-bootstrap";
import "./Submission.css";
import { useEffect, useState } from "react";

export const SubmissionComponent = () => {
  const [title, setTitle] = useState("Title");
  const [description, setDescription] = useState("Description");
  const [details, setDetails] = useState("Details");
  const [reward, setReward] = useState("Reward");
  const [Deadline, setDeadline] = useState("Deadline");

  return (
    <div>
      <h1 className="pg-title">{title}</h1>
      <Col className="submission-container">
        <Row>
          <h3>Description</h3>
          <p className="w-50 justify-items-start">{description}</p>
        </Row>
        <Row>
          <h3>Details</h3>
          <p className="w-75 justify-items-start">{details}</p>
        </Row>
        <Row>
          <Col>
            <h5>Reward : </h5>
          </Col>
          <Col lg={10} md={5} xs={4}>
            <p>{reward}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Deadline : </h5>
          </Col>
          <Col lg={10} md={5} xs={4}>
            <p>{Deadline}</p>
          </Col>
        </Row>
        <Row>
          <Col>Github Link: </Col>
          <Col lg={10} md={5} xs={4}>
            <input className="w-100"></input>
          </Col>
        </Row>
      </Col>  
    </div>
  );
};
