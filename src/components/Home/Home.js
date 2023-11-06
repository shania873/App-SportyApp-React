import React, { useState, useEffect, useRef, useContext } from "react";
import Container from "react-bootstrap/Container";
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
