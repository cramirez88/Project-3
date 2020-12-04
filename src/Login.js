import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Form, Button, FormGroup, Label, Input, Container } from "reactstrap";
import Facebook from "./components/Facebook";
import streetball from "./assets/streetball.jpg"

export const Login = () => {
    
    return(
      
    <Container className="backgro">
      <Form className="login-form">

        <h1 className="text-center">
          <span className="font-weight-bold">Pickup</span>
        </h1>
          
        <h2 className="text-center">Sign in or Register</h2>

        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Email"/>
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password"/>
        </FormGroup>

        <Button className="btn-lg btn-danger btn-block">Log in</Button> 

        <div className="text-center pt-3">
          Or continue with Facebook
        </div>
        <Facebook className="mt-3 mb-3"/>

        <div className="text-center">
          <a href="/sign-up">Sign Up</a>
          <span className="p-2">|</span>
          <a href="/sign-up">Forgot Password</a>
        </div>

      </Form>
    
    </Container>
      
    
  );
};