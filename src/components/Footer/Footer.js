import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <div className="bg-dark pt-5 pb-2 px-3 text-light text-center">
      <Container>
        <Row className="gap-3">
          <Col md={true}>
            <h4 className="m-0" style={{ fontSize: "50px" }}>
              The Generics
            </h4>
          </Col>
          <Col md={true}>
            <div className="mx-auto">
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <a href="#Home" className="text-decoration-none text-light">
                    <i className="bi bi-youtube"></i> YouTube
                  </a>
                </li>
                <li>
                  <a href="#Home" className="text-decoration-none text-light">
                    <i className="bi bi-facebook"></i> FaceBook
                  </a>
                </li>
                <li>
                  <a href="#Home" className="text-decoration-none text-light">
                    <i className="bi bi-instagram"></i> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <p>© 2023 The Generics, All right reserved</p>
      </Container>
    </div>
  );
}

export default Footer;
