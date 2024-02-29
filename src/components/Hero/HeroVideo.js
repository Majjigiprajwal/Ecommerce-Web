import React from "react";
import { Button } from "react-bootstrap";
import videodj from "../../Assets/djvideo.mp4";
import { useNavigate } from "react-router-dom";

function HeroVideo() {
  const navigate = useNavigate();
  function store() {
    navigate("/products");
  }
  return (
    <>
      <div className=" position-relative">
        <video
          src={videodj}
          className=" object-fit-cover w-100"
          style={{ maxHeight: "400px", marginBottom: "-4px" }}
          autoPlay
          loop
          muted
        ></video>
        <div className=" bg-black position-absolute w-100 h-100 top-0 opacity-50"></div>
        <div className=" position-absolute top-50 translate-middle-y text-center text-light w-100">
          <h1 style={{ fontSize: "60px" }} className="fw-bold">
            The Generics
          </h1>
          <p>Popular EDM Music production studio</p>
          <Button variant="light" className=" fw-semibold mt-2" onClick={store}>
            Visit Our Store
          </Button>
        </div>
      </div>
    </>
  );
}

export default HeroVideo;
