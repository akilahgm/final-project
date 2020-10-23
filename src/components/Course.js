import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {styleSheet} from '../styles/style'

const Course = ({ course }) => {
  const [selectedModule, setSelectedModule] = useState(1);
  const [description, setDescription] = useState(
    course.subModules.length > 0 ? course.subModules[0].description : ''
  );
  const externalLinks = useSelector((state) => state.externalLinks);
  console.log(externalLinks)
  return (
    <div>
      <div style={styleSheet.mainStyle}>
        <Container>
          <Row>
            <Col >
              <Card border="light" style={styleSheet.card1}>
                <Card.Body>
                  <Card.Title>Sub Modules</Card.Title>
                  <ListGroup>
                    {course.subModules.map((module) => {
                      return (
                        <ListGroup.Item
                          action
                          key={module.id}
                          onClick={(data) => {
                            setSelectedModule(module.id);
                            setDescription(module.description);
                          }}
                        >
                          {module.name}
                        </ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="light" style={styleSheet.card2}>
                <Card.Body>
                  <Card.Title>Description</Card.Title>
                  <Card.Text>{description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            <Card border="light" style={styleSheet.card3}>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <ListGroup>
                    {externalLinks.map((module) => {
                      return (
                        <ListGroup.Item
                          action
                          href={module.link}
                        >
                          {module.name}
                        </ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Course;
