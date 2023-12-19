import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const ListMyLessons = () => {
  const [listLessons, setListLessons] = useState([]);
  const [listData, setListData] = useState([]);
  const length = listLessons ? listLessons.length : 0;

  useEffect(() => {
    fetch("https://localhost:8000/api/contacts")
      .then((response) => response.json())
      .then((data) => {
        setListLessons(data["hydra:member"]);
        setListData(data["hydra:member"]);
      });
  }, [length]);

  function setSearch(e) {
    console.log(e.target.value);
    console.log(listLessons);
    const value = e.target.value;

    if (value !== "") {
      const filteredItems = listLessons.filter((lesson) =>
        lesson.description.toLowerCase().includes(value.toLowerCase())
      );
      setListLessons(filteredItems);
    }

    return setListLessons(listData);
  }

  return (
    <Container>
      <Row className="mb-4">
        <h2 className="d-flex align-items-left mb-4 mt-4 p-0">
          Liste de mes cours
        </h2>
        <input
          type="text"
          placeholder="Rechercher son cours.."
          name="search"
          onChange={(e) => setSearch(e)}
        />
      </Row>
      {listLessons.map((lesson) => (
        <Row key={lesson.id} className="row-listMyLessons ">
          <Col className="d-flex align-items-left"> {lesson.description} </Col>
          {/* <Col>{lesson.phone}</Col>
          <Col>{lesson.places[0].name}</Col> */}
        </Row>
      ))}
    </Container>
  );
};

export default ListMyLessons;
