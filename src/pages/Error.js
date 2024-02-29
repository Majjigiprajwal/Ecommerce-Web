import React from "react";
import NavbarCom from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Container } from "react-bootstrap";

function Error() {
  return (
    <>
      <NavbarCom />
      <div className="text-center my-5">
        <Container
          style={{ height: "200px", maxWidth: "500px" }}
          className=" bg-dark text-light d-flex flex-column justify-content-center rounded"
        >
          <h1>
            <i className="bi bi-emoji-frown"></i> A error occurred!
          </h1>
          <p>Could not find the page!</p>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Error;
