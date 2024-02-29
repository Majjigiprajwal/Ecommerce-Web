import axios from "axios";
import React, { useContext, useRef } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import Context from "../Context";
import { useNavigate } from "react-router-dom";

function Profile() {
  const changePasswordRef = useRef();
  const ctx = useContext(Context);
  const navigate = useNavigate();

  async function changePassword(e) {
    e.preventDefault();
    const password = changePasswordRef.current.value;
    try {
      await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDLKmMRL800SGHidB6TAoC9jXvKuu24adw",
        {
          idToken: ctx.token,
          password: password,
          returnSecureToken: false,
        }
      );
      navigate("/");
      ctx.logOut();
    } catch (error) {
      alert(error);
    }
  }

  function logout() {
    navigate("/");
    ctx.logOut();
  }
  return (
    <>
      <Container className="text-center py-3">
        <h2 className="mb-4 mt-2">Profile</h2>
        <h4>Email: {ctx.userEmail}</h4>
        <Form
          className="mx-auto"
          style={{ maxWidth: "400px" }}
          onSubmit={changePassword}
        >
          <FormGroup>
            <div>
              <FormLabel>Change Password</FormLabel>
              <FormControl
                type="password"
                ref={changePasswordRef}
                required
                minLength={6}
              />
            </div>
            <Button variant="dark mt-2" type="submit" size="sm">
              Change Password
            </Button>
          </FormGroup>
        </Form>
        <div className=" bg-dark-subtle p-3 rounded mt-3">
          <p className="mb-2">Log Out of Account</p>
          <Button variant="dark" onClick={logout}>
            Log Out
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Profile;
