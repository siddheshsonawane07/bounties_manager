import { Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import "./CardComponent.css";
import Countdown from "../../Utils/Countdown";

const CardComponent = ({
  _reward,
  _deadLine,
  _desc,
  _title,
  _owner,
  handleCardClick,
  _index,
}) => {
  const targetTimestamp = _deadLine;

  return (
    <Card
      className="CardEx"
      onClick={() =>
        handleCardClick({ _reward, _deadLine, _desc, _owner, _index })
      }
    >
      <Card.Img
        variant="top"
        src="Blockchain-Tech-Web3-NFT-placeholder.jpg"
        className="CardImg"
      />
      <Card.Body>
        <Card.Title>{_title.split(" / ")[0]}</Card.Title>
        <Card.Text>{_desc.split(" / ")[1]}</Card.Text>
        <Card.Text>Reward:{_reward}</Card.Text>
        <Card.Text>
          Deadline:{_deadLine}
          {/* <Countdown targetTimestamp={targetTimestamp} /> */}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
