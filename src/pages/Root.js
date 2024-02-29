import React, { useContext } from "react";
import NavbarCom from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Cart from "../Components/Cart/Cart";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Context from "../Context";

function Root() {
  const ctx = useContext(Context);
  const display = true;

  return (
    <>
      {ctx.Cart && <Cart />}
      <div className={`${ctx.Cart ? "vh-100 overflow-y-hidden" : ""}`}>
        <NavbarCom display={display} />
        <Hero />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Root;
