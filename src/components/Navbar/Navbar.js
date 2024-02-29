import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Context from "../../Context";
import { NavLink, useNavigate } from "react-router-dom";

function NavbarCom({ display }) {
  const ctx = useContext(Context);
  const navigate = useNavigate();
  function logInPage() {
    navigate("/logIn");
  }
  return (
    <Navbar expand="md" className="bg-body-dark" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home" style={{ fontSize: "25px" }}>
          The Generics
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <NavLink to={"/"} className="nav-link d-inline">
              Home
            </NavLink>
            {ctx.isLogIn && (
              <>
                <NavLink to={"/products"} className="nav-link d-inline">
                  Store
                </NavLink>
                <NavLink to={"/contact"} className="nav-link d-inline">
                  Contact
                </NavLink>
              </>
            )}
            <NavLink to={"/about"} className="nav-link d-inline">
              About
            </NavLink>
            {ctx.isLogIn && display && (
              <>
                <NavLink to={"/profile"} className="nav-link d-inline">
                  Profile
                </NavLink>
              </>
            )}
            {ctx.isLogIn && display && (
              <>
                <Nav.Link className="p-0 align-self-center w-100 ms-md-2">
                  <div className="d-grid">
                    <Button
                      variant="light"
                      size="sm"
                      className="px-3 fw-semibold"
                      onClick={ctx.openCart}
                    >
                      Cart
                      {ctx.CartList.length > 0
                        ? ` - ${ctx.CartList.length}`
                        : ""}
                    </Button>
                  </div>
                </Nav.Link>
              </>
            )}

            {!ctx.isLogIn && (
              <Nav.Link className="p-0 align-self-center w-100 ms-md-2">
                <div className="d-grid">
                  <Button
                    variant="light"
                    size="sm"
                    className="px-3 fw-semibold"
                    onClick={logInPage}
                  >
                    Log In
                  </Button>
                </div>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCom;
