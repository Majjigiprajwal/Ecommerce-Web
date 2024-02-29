import React, { useContext, useRef, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import Context from "../../Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Auth() {
  const ctx = useContext(Context);
  const [isLogging, setLogging] = useState(true);
  function createHandler() {
    setLogging(!isLogging);
  }
  function loginHandler() {
    setLogging(!isLogging);
  }
  const navigate = useNavigate();

  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();

  async function formSubmitHandler(e) {
    e.preventDefault();
    const email = inputEmailRef.current.value;
    const password = inputPasswordRef.current.value;
    if (!isLogging) {
      try {
        await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDLKmMRL800SGHidB6TAoC9jXvKuu24adw",
          { email: email, password: password, returnSecureToken: true }
        );
        setLogging(!isLogging);
        e.target.reset();
      } catch (error) {
        alert("SignUp Failed");
      }
    } else {
      try {
        const response = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDLKmMRL800SGHidB6TAoC9jXvKuu24adw",
          { email: email, password: password, returnSecureToken: true }
        );
        navigate("/");
        e.target.reset();
        ctx.logIn(response.data.idToken, email);
      } catch (error) {
        alert("Authentication Failed");
      }
    }
  }

  return (
    <>
      <Container className="py-3 text-center" style={{ maxWidth: "400px" }}>
        <Form className="mx-auto" onSubmit={formSubmitHandler}>
          <FormGroup className=" text-bg-dark p-3 rounded">
            {isLogging && <h4 className="mt-1 mb-4">Log In</h4>}
            {!isLogging && <h4 className="mt-1 mb-4">Sign Up</h4>}
            <div>
              <FormLabel>Email</FormLabel>
              <FormControl type="text" required ref={inputEmailRef} />
            </div>
            <div>
              <FormLabel>Password</FormLabel>
              <FormControl
                type="password"
                required
                minLength={6}
                ref={inputPasswordRef}
              />
            </div>
            <div className="mt-3">
              {isLogging && (
                <Button variant="light" type="submit" className=" fw-medium">
                  Log In
                </Button>
              )}
              {!isLogging && (
                <Button variant="light" type="submit" className=" fw-medium">
                  Sign Up
                </Button>
              )}
              <div className="mt-1">
                {isLogging && (
                  <span style={{ cursor: "pointer" }} onClick={createHandler}>
                    Create Account
                  </span>
                )}
                {!isLogging && (
                  <span style={{ cursor: "pointer" }} onClick={loginHandler}>
                    Log In
                  </span>
                )}
              </div>
            </div>
          </FormGroup>
        </Form>
      </Container>
    </>
  );
}

export default Auth;
