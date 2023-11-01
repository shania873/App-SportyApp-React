import React, { useState, useEffect, useRef } from "react";
import Menu from "../Menu";
import Map from "./Map/Map";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddLessons from "./Form/Add-Lessons";

const Home = (props) => {
  return (
    <>
      <Container className="container-home d-flex mt-4">
        <Col sm={6} className="text-align-left">
          <h1>Bienvenue chez sportyApp !</h1>Rajoutez votre cours ici
        </Col>
        <Col sm={6}>
          <AddLessons />
        </Col>
      </Container>
    </>
  );
};

export default Home;
