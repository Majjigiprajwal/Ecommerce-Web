import React, { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import CartItem from "./CartItem";
import Context from "../../Context";

function Cart() {
  const ctx = useContext(Context);
  const total = ctx.CartList.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
  return (
    <>
      <div
        className="position-fixed fixed-top bg-dark vw-100 vh-100 opacity-50"
        style={{ top: "0", left: "0" }}
        onClick={ctx.closeCart}
      ></div>

      <div
        className=" position-absolute fixed-top"
        style={{
          minWidth: "300px",
          maxWidth: "500px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <div className="bg-body-secondary p-3 rounded">
          <h5 className="text-center">Cart</h5>
          <ListGroup>
            {ctx.CartList.map((item) => {
              return <CartItem data={item} key={item.id} />;
            })}
          </ListGroup>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <h6>
              Total: <span className="fw-semibold">₹ {total}</span>
            </h6>
            <div>
              <Button variant="outline-dark" size="sm" onClick={ctx.closeCart}>
                Close
              </Button>
              <Button
                variant="dark"
                size="sm"
                className="ms-2"
                onClick={ctx.closeCart}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
