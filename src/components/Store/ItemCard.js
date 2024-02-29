import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Context from "../../Context";
import { useNavigate } from "react-router-dom";
import Review from "../Product/Review";

function ItemCard(props) {
  const navigate = useNavigate();
  const ctx = useContext(Context);

  function viewHandler(id) {
    navigate(`/products/${id}`);
  }

  return (
    <div className="p-2 bg-body-secondary text-emphasis-dark rounded-2 shadow-sm">
      <img
        src={props.data.url}
        alt=""
        className="object-fit-cover rounded"
        style={{ width: "200px", height: "200px" }}
      />
      <h5 className="mt-2 mb-0">{props.data.item}</h5>
      <Review star={props.data.star} css={"justify-content-center"} />
      <div className="d-flex mt-2 justify-content-between align-items-center">
        <p className="m-0 fw-semibold">₹ {props.data.price}</p>
        <Button
          variant="outline-dark"
          size="sm"
          className="align-self-center px-3 fw-semibold ms-auto"
          onClick={() => {
            viewHandler(props.data.id);
          }}
        >
          View
        </Button>
        <Button
          variant="dark"
          size="sm"
          className="align-self-center px-3 fw-semibold ms-1"
          onClick={() => {
            ctx.addCart(props.data);
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
}

export default ItemCard;
