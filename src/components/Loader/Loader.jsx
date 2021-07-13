import React, { useEffect } from "react";
import { Spinner, Container, Card, Row, Col } from 'react-bootstrap';

const NavBar = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <main className="home">
                <Container fluid center>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Card style={{ width: '30rem' }}>
                                <Card.Body>
                                    <Spinner animation="border" class="pl-5">
                                        <span className="sr-only">Loading...</span>
                                    </Spinner>
                                    <br />
                                    <br />
                                    <Card.Title>Aguarde un momento por favor</Card.Title>
                                    <Card.Text>
                                        Obteniendo datos...
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
};

export default NavBar;