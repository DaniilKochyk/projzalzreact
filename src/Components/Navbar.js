import React, { useState } from "react";
import { Nav, Navbar, Button, Container, Modal, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div `
a, .navbar-brand, .navbar-nav .nav-link {
    color: #adb1b8;
    &:hover {
        color: white
    }
}
`

export default function NavBar() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(

    <>
    <Styles>
    <Navbar collapsOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>Project react with bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link><Link to="/">Strona główna</Link></Nav.Link>
                <Nav.Link><Link to="/pr">Tabela z ocenami</Link></Nav.Link>
                <Nav.Link><Link to="/about">Dodać ocenę</Link></Nav.Link>
            </Nav>
            <Nav>
                <Button variant="primary" className="me-2" onClick={handleShow}>Log in</Button>
               
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </Styles>
    <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controllId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Controll type="email" placeHolder="Wpisz email"/>
                        <Form.Text className="text-muted">Wyzej wpisz email</Form.Text>
                    </Form.Group>
                    <Form.Group controllId="formBasicPassword">
                        <Form.Label>Hasło</Form.Label>
                        <Form.Controll type="password" placeHolder="Wpisz hasło"/>
                        <Form.Text className="text-muted">Wyzej wpisz hasło</Form.Text>
                    </Form.Group>
                    <Form.Group controllId="formBasicCheckbox">
                        <Form.Label>Email</Form.Label>
                        <Form.Check type="checkbox" label="Zapamiętać"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
    </Modal>
    </>
    
    )}