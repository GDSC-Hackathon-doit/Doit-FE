import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import AuthProvider from "./lib/provider/authprovider";
import CartProvider from "./lib/provider/cartprovider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MantineProvider withNormalizeCSS withGlobalStyles>
    <CartProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </CartProvider>
  </MantineProvider>
);
