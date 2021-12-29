import React from "react";
import Slider from "./Components/Slider";
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import reactt from './reactt.jpg';
import reactboot from './reactboot.png';
import { Link } from 'react-router-dom';

export const Home = () => (
    <>
    <Slider />
    <Container  style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
        <Row>
            <Col>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={reactboot}/>
                <Card.Body>
                    <Card.Title>Projekt z react i bootstrap</Card.Title>
                    <Card.Text>to jest projekt zliczeniowy</Card.Text>
                    <Link className="btn btn-primary" to='/about'>Więcej o projekcie</Link>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={reactt}/>
                <Card.Body>
                    <Card.Title>Projekt z react i bootstrap</Card.Title>
                    <Card.Text>to jest projekt zliczeniowy</Card.Text>
                    <Link className="btn btn-primary" to='/about'>Więcej o projekcie</Link>
                </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
    <Container>
        <Row>
            <Col md={7}>
                 <img src={reactt} height={400} />
            </Col>
            <Col md={5}>
                <h2>Projekt z react + react-bootstrap</h2>
                <p>Tekst</p>
            </Col>
        </Row>
    </Container>
</>
)