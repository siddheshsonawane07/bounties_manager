import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Submission/Submission.css";
import { ethers } from "ethers";
import { Card } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Bounty.css";
import CardComponent from "../Card/CardComponent";

const SubmissionComponent = ({
  _title,
  _description,
  _reward,
  _deadLine,
  _onSubmit,
  _index,
  _githubLink,
  _setGithubLink,
  _handleGithubLinkChange,
  _detail,
}) => {
  const handleSubmit = () => {
    // Call the onSubmit function passed as prop with the githubLink value
    _onSubmit(_index, _githubLink);
  };

  return (
    <div>
      <h1 className="pg-title">{_title.split("/")[0]}</h1>
      <Col className="submission-container">
        <Row>
          <h3>Description</h3>
          <p className="w-50 justify-items-start">
            {_description.split("/")[1]}
          </p>
        </Row>
        <Row>
          <h3>Details</h3>
          <p className="w-75 justify-items-start">{_detail.split("/")[2]}</p>
        </Row>
        <Row>
          <Col>
            <h5>Reward : </h5>
          </Col>
          <Col lg={10} md={5} xs={4}>
            <p>{_reward}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Deadline : </h5>
          </Col>
          <Col lg={10} md={5} xs={4}>
            <p>{_deadLine}</p>
          </Col>
        </Row>
        <Row>
          <Col>Github Link: </Col>
          <Col lg={10} md={5} xs={4}>
            <input
              className="w-100"
              value={_githubLink}
              onChange={_handleGithubLinkChange}
            ></input>
          </Col>
        </Row>
      </Col>
      <Col className="container text-center">
        <button
          type="button"
          className="btn btn-dark"
          style={{ "margin-right": "60vh" }}
        >
          SUBMIT
        </button>
      </Col>
    </div>
  );
};

// const CardComponent = ({
//   _reward,
//   _deadLine,
//   _desc,
//   _title,
//   _owner,
//   handleCardClick,
//   _index,
// }) => {
//   return (
//     <Card
//       onClick={() =>
//         handleCardClick({ _reward, _deadLine, _desc, _owner, _index })
//       }
//     >
//       <Card.Img variant="top" src="Blockchain-Tech-Web3-NFT-placeholder.jpg" />
//       <Card.Body>
//         <Card.Title>{_title.split(" / ")[0]}</Card.Title>
//         <Card.Text>{_desc.split(" / ")[1]}</Card.Text>
//         <Card.Text>
//           <b>Reward:</b>
//           {_reward}
//         </Card.Text>
//         <Card.Text>
//           <b>Deadline:</b>
//           {_deadLine}
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// };

const Bounties = ({ contract, account }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [description, setDescription] = useState("");
  const [detail, setDetail] = useState("");
  const [homepage, setHomepage] = useState(true);
  const [githubLink, setGithubLink] = useState("");
  const [noOfBOunties, SetnoOfBOunties] = useState("");
  const [reward, setReward] = useState("");
  const [deadLine, setDeadLine] = useState("");
  const [BountyIndex, setBountyIndex] = useState("");
  const [Submission, setSubmission] = useState("");
  const [SubmissionIndex, setSubmissionIndex] = useState("");
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  // const [desc1,setDesc1 ] = useState('');
  // const [bountyin,SetBountyin ] = useState('');
  // const [balance, setBalance] = useState('');
  // const [numBounties, setNumBounties] = useState('');

  const handleGithubLinkChange = (event) => {
    setGithubLink(event.target.value);
  };

  const handleBountyIndex = (e) => {
    setBountyIndex(e.target.value);
  };
  const handleSubmission = (e) => {
    setSubmission(e.target.value);
  };

  const handleCreateSubmission = async (e) => {
    e.preventDefault();
    const createSubmit = await contract.bountySubmission(
      BountyIndex,
      githubLink
    );
    await createSubmit.wait();
    console.log("created submission : ", {
      "bounty index ": BountyIndex,
      "submission ": Submission,
    });
  };
  const handleCardClick = (card) => {
    console.log("Card clicked!", card);

    setDescription(card._desc);
    setReward(card._reward);
    setDeadLine(card._deadLine);
    setBountyIndex(card._index);
    setTitle(card._desc);
    setDetail(card._desc);
    setHomepage(false);

    // ... Do something ...
  };

  const handleSelectWinner = async (e) => {
    e.preventDefault();
    const createSubmit = await contract.selectBountyWinner(BountyIndex, [
      SubmissionIndex,
    ]);
    await createSubmit.wait();
    console.log(
      "winner selected for bounty ",
      BountyIndex,
      " is ",
      SubmissionIndex
    );
  };

  return (
    <div>
      <div className="navbar">
        <a className="navbar-item" href="#">
          Welcome to Bounties
        </a>
        <a className="navbar-item" href="/createBounty">
          Create a Bounty
        </a>
        <a className="navbar-item" href="/allBounties">
          All Bounties
        </a>
        <span>
          <button
            type="button"
            class="btn btn-dark"
            style={{ "margin-right": "5rem" }}
          >
            {`${account.substring(0, 4)}...${account.substring(38)}`}
          </button>
        </span>
      </div>

      {homepage ? (
        <>
          <Col>
            <h1 className="car-title">💰Your Bounties</h1>
            <Row xs={1} md={2} lg={3} className="g-3 cont-card">
              {filteredCards.map((card) => {
                return (
                  <Col className="card-column">
                    <CardComponent
                      key={card._desc}
                      _reward={card._reward}
                      _deadLine={card._deadLine}
                      _desc={card._desc}
                      _owner={card._owner}
                      _title={card._desc}
                    ></CardComponent>
                  </Col>
                );
              })}
              1
            </Row>
            <br />
            <h2>create Submission : </h2>
            <Row>
              <Form onSubmit={handleCreateSubmission}>
                <Form.Group className="mb-3" value="bountyindx">
                  <Form.Control
                    type="input"
                    onChange={handleBountyIndex}
                    placeholder="Enter bounty index"
                  />
                </Form.Group>
                <Form.Group className="mb-3" value="submission">
                  <Form.Control
                    type="input"
                    onChange={handleSubmission}
                    placeholder="Enter github link"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Row>
            <br />
            <p>Select bounty winner : </p>
            <Row></Row>
          </Col>
        </>
      ) : (
        <SubmissionComponent
          _title={title} // Pass title as prop
          _description={description} // Pass description as prop
          _reward={reward} // Pass reward as prop
          _deadLine={deadLine} // Pass deadLine as prop
          _index={BountyIndex}
          _onSubmit={handleCreateSubmission}
          _githubLink={githubLink}
          _setGithubLink={setGithubLink}
          _handleGithubLinkChange={handleGithubLinkChange}
          _detail={detail}
        />
      )}
    </div>
  );
};

export default Bounties;
