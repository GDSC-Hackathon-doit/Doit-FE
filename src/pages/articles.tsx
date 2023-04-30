import React, { useContext } from "react";
import Cards from "../components/cards";
import { testData } from "../lib/const/data";
import Layout from "../components/layout";
import { CartContext } from "../lib/provider/cartprovider";

function Articles() {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("no cart context");
  }
  return (
    <Layout>
      <Cards data={cartContext.cartItems} />
    </Layout>
  );
}

export default Articles;
