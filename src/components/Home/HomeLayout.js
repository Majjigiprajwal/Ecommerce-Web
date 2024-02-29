import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function HomeLayout() {
  const navigate = useNavigate();

  function contactHandler() {
    navigate("/contact");
  }
  function aboutHandler() {
    navigate("/about");
  }
  return (
    <>
      <Container className="pt-3 pb-5">
        <h2 className="text-dark text-center mb-3">Latest Tour</h2>
        <Row className="gap-4">
          <Col>
            <img
              src="https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/11/18074455/043-eff2016_0623_182213-9566_jsl.jpg"
              alt=""
              className="w-100 rounded shadow"
            />
          </Col>
          <Col md={true} className="d-flex align-items-center">
            <div>
              <h3>Electric Forest</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                pulvinar lectus in lacinia scelerisque. Cras maximus magna eros,
                quis sodales massa interdum ut. Mauris rhoncus nunc eu elit
                mattis aliquet. Mauris gravida interdum ex ac efficitur. Nullam
                molestie leo leo, ac euismod sem suscipit non. Nunc et elit nec
                quam
              </p>
              <Button variant="outline-dark" size="sm" onClick={aboutHandler}>
                About Us
              </Button>{" "}
              <Button variant="dark" size="sm" onClick={contactHandler}>
                Contact Us
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomeLayout;
