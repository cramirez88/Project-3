import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import './App.css'
//import ReactDOM from 'react-dom';
//import FacebookLogInBtn from 'react-facebook-login'
//import Facebook from './components/Facebook';

 export const Home = () => {

    return(

      <Container fluid className="login-container">

      <div className="home-container">
        <h1 className="text-center">Find Your Court</h1>
      
        <div className="map">
          <h3 className="text-center">*Our map will be placed here*</h3>
        </div>

      </div>
  
  

    <Form className="mapfilters">
    <Row>
      <Col>
      <FormGroup>
        <Label for="exampleSelect">Select Distance</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>3</option>
            <option>5</option>
            <option>10</option>
            <option>15</option>
        </Input>
      </FormGroup>
      </Col>

      <Col>
      <FormGroup>
        <Label for="exampleSelect">Select Court Type</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Indoor</option>
            <option>Outdoor</option>-6
        </Input>
      </FormGroup>
      </Col>

      </Row>
    </Form>

  
  </Container>     

  );
};