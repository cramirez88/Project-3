import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Form, Button, FormGroup, Label, Input } from "reactstrap";
import Facebook from "./components/Facebook";

export const Login = () => {
    
    return(
      
    <div className="mycontainer">
      <div className="logindiv">    
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

        <div className="facebooklogin">
            <Facebook/>
        </div>

        <div className="text-center">
          <a href="/sign-up">Sign Up</a>
          <span className="p-2">|</span>
          <a href="/sign-up">Forgot Password</a>
        </div>
        
      </Form>
      </div>  
    </div>
    
      
    
  );
};