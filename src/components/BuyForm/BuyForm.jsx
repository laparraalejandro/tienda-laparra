import React from "react";
import { Form, Button, Container } from 'react-bootstrap';

const BuyForm = ({ submitHandler }) => {

  return (
    <Container fluid center >
      <h4 className="text-center">Ya es casi tuyo !!</h4>
      <h5 className="text-center">Por favor complete su informacion personal</h5>
    <Form 
      autoComplete="off" 
      onSubmit={submitHandler} 
      className="bg-transparent w-80 p-3">

      <Form.Group 
        className="mb-3" >
        <Form.Label>Direccion de Email</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="example@email.com" 
          id="email" 
          required/>
        <Form.Text className="text-muted">
          Nunca compartiremos tu direccion de correo.
        </Form.Text>
      </Form.Group>

      <Form.Group 
        className="mb-3" >
        <Form.Label>Nombre completo</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="your name" 
          id="fullname" 
          required/>
        <Form.Text className="text-muted">
          Tu Nombre completo
        </Form.Text>
      </Form.Group>

      <Form.Group 
        className="mb-3" >
        <Form.Label>Numero telefonico</Form.Label>
        <Form.Control 
          type="tel" 
          placeholder="+1234567890" 
          id="telephone" 
          required/>
        <Form.Text className="text-muted">
          Tu numero telefonico
        </Form.Text>
      </Form.Group>

      <Button 
        variant="primary" 
        type="submit" 
        className="button is-success"
        >
          Completar Compra
      </Button>

    </Form>
    </Container>
  );
};

export default BuyForm;

