import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/navbar";
import Home from "./screens/home";
import NotFound from "./screens/not-found";
import ItemListContainer from "./screens/item-list-container";
import ItemDetailContainer from "./screens/item-detail-container";

function App() {
  return (
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
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
