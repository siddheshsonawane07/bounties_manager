import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardComponent from "../Card/CardComponent";
import "./Bounty.css";

const AllBountiesComponent = ({ contract, account }) => {
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
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

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

  useEffect(() => {
    async function getNumBounties() {
      const numBounty = await contract.getNumBounties();
      SetnoOfBOunties(parseInt(numBounty));
      console.log("Available bounties : ", parseInt(numBounty));
      const newCards = [];
      for (let i = 0; i < parseInt(numBounty); i++) {
        // Get the bounty detailss
        const bounty = await contract.bountyList(i);
        const val = 1000000000000000000;
        console.log(
          parseInt(bounty.reward) / val,
          bounty.deadline * 1000,
          bounty.description
        );
        console.log(cards);
        const newCard = {
          _reward: parseInt(bounty.reward) / val,
          _deadLine: bounty.deadline * 1000,
          _desc: bounty.description,
          _owner: bounty.owner,
        };
        newCards.push(newCard);
      }
      setCards([...cards, ...newCards]);
    }
    getNumBounties();
  }, [noOfBOunties]);

  useEffect(() => {
    const str = title + " / " + description + " / " + detail;
    setDesc(str);
  }, [title, detail, description]);

  useEffect(() => {
    async function getNumBounties() {
      const numBounty = await contract.getNumBounties();
      SetnoOfBOunties(parseInt(numBounty));
    }
    getNumBounties();
  });

  useEffect(() => {
    const filtered = cards.filter((card) => card._owner === account);
    setFilteredCards(filtered);
  }, [cards]);

  return (
    <>
      <h1 className="car-title">💰All Bounties</h1>
      <Row xs={1} md={2} lg={3} className="g-3 cont-card">
        {cards.map((card) => {
          return (
            <Col className="card-column">
              <CardComponent
                key={card._desc}
                _reward={card._reward}
                _deadLine={card._deadLine}
                _desc={card._desc}
                _owner={card._owner}
                _title={card._desc}
                _index={card._index}
                handleCardClick={handleCardClick}
              ></CardComponent>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default AllBountiesComponent;
