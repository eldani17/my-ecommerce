import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/navbar";
import Home from "./screens/home";
import NotFound from "./screens/not-found";
import ItemListContainer from "./screens/item-list-container";
import ItemDetailContainer from "./screens/item-detail-container";
import Cart from "./screens/cart";
import { CartProvider } from "./context/cartContext";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <CartProvider value={cart}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/shop">
            <ItemListContainer />
          </Route>
          <Route path="/shop/product/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/shop/cart">
            <Cart />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
