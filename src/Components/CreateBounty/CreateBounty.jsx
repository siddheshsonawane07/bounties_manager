import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ethers } from "ethers";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

const CreateBountyComponent = ({ contract, account }) => {
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [detail, setDetail] = useState("");
  const [reward, setReward] = useState("");
  const [deadLine, setDeadLine] = useState("");
  const [BountyIndex, setBountyIndex] = useState("");

  const handlesetTitle = (e) => {
    setTitle(e.target.value);
  };

  const handlesetDescription = (e) => {
    setDescription(e.target.value);
  };
  const handlesetDetail = (e) => {
    setDetail(e.target.value);
  };
  const handleDeadChange = (e) => {
    const deadlineInput = e.target.value;
    // Convert date and time to epoch time
    const epochTime = new Date(deadlineInput).getTime() / 1000;
    setDeadLine(epochTime);
  };
  const handleRewardChange = (e) => {
    setReward(e.target.value);
  };

  //button function to create Bounty
  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    const rewardWei = ethers.utils.parseUnits(reward, "ether");
    console.log(desc);
    const createSubmit = await contract.createBounty(
      desc,
      rewardWei,
      deadLine,
      { value: rewardWei }
    );
    await createSubmit.wait();
    console.log(title, desc, detail, rewardWei, deadLine);
  };
  return (
    <>
      <Row>
        <Form onSubmit={handleCreateSubmit}>
          <h2>Create Bounty </h2>
          <Form.Group className="mb-3">
            <Form.Control
              type="input"
              onChange={handlesetTitle}
              placeholder="Enter Title"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="input"
              onChange={handlesetDescription}
              placeholder="Enter Description"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="input"
              onChange={handlesetDetail}
              placeholder="Enter Details"
            />
          </Form.Group>
          <Form.Group className="mb-3" value="reward">
            <Form.Control
              type="text"
              onChange={handleRewardChange}
              placeholder="Enter Reward"
            />
          </Form.Group>
          <Form.Group className="mb-3" value="deadline">
            <Form.Control
              type="datetime-local"
              onChange={handleDeadChange}
              placeholder="Enter Deadline"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </>
  );
};

export default CreateBountyComponent;
