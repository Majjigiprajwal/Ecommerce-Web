import React from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import HeroVideo from "./HeroVideo";

function Hero(props) {
  const location = useLocation();

  if (location.pathname.includes("/products/")) {
    return null;
  }

  if (location.pathname === "/") {
    return <HeroVideo />;
  }
  return (
    <div className="bg-dark-subtle py-3 text-center">
      <Container>
        <h1 style={{ fontSize: "60px" }} className="fw-bold">
          The Generics
        </h1>
      </Container>
    </div>
  );
}

export default Hero;
