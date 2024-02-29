import React, { useContext } from "react";
import Context from "../Context";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetails from "../Components/Product/ProductDetails";
import { Button, Container } from "react-bootstrap";

function Product() {
  const ctx = useContext(Context);
  const navigate = useNavigate();
  const params = useParams();
  const ListItem = ctx.List.filter((item) => {
    return item.id === params.productId;
  });
  const MerchItem = ctx.Merchandise.filter((item) => {
    return item.id === params.productId;
  });

  function storeHandler() {
    navigate("/products");
  }

  return (
    <>
      <div className=" py-3">
        {ListItem.length > 0 && <ProductDetails data={ListItem[0]} />}
        {MerchItem.length > 0 && <ProductDetails data={MerchItem[0]} />}
        {ListItem.length === 0 && MerchItem.length === 0 && (
          <div className="text-center my-5">
            <Container
              style={{ height: "200px", maxWidth: "500px" }}
              className=" bg-dark text-light d-flex flex-column justify-content-center rounded"
            >
              <h1>
                <i className="bi bi-emoji-frown"></i> Could Not Found Product!
              </h1>
              <p>Please Visit Store!</p>
              <div>
                <Button
                  variant="light"
                  className=" fw-medium"
                  onClick={storeHandler}
                >
                  Store
                </Button>
              </div>
            </Container>
          </div>
        )}
      </div>
    </>
  );
}

export default Product;
