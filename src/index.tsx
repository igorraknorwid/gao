import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Store from "./store/store";
import Cities from "./store/cities";
import Objectives from "./store/objectives";
import Image from "./store/image";
import Links from "./store/links";
import Interests from "./store/interests";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/index.scss";

interface State {
  store: Store;
  cities: Cities;
  objectives: Objectives;
  photo: Image;
  links: Links;
  interests: Interests;
}

export const store = new Store();
export const cities = new Cities();
export const objectives = new Objectives();
export const photo = new Image();
export const links = new Links();
export const interests = new Interests();

export const Context = createContext<State>({
  store,
  cities,
  objectives,
  photo,
  links,
  interests,
});

ReactDOM.render(
  <Context.Provider
    value={{
      store,
      cities,
      objectives,
      photo,
      links,
      interests,
    }}
  >
    <Router>
      <App />
    </Router>
  </Context.Provider>,
  document.getElementById("root")
);
