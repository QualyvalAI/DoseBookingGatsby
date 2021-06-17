import "./index.css";
import React from "react";
import Home from "../Home";
import Hospitals from "../Hospitals";
import Certificate from "../Certificate";

import { Router } from "@reach/router"
import Siddhivinayak from "../Siddhivinayak";
import Vaidya from "../Vaidya";
import Shwaas from "../shwaas";
import ReactGA from 'react-ga';

const isBrowser = typeof window !== "undefined";

function initializeAnalytics() {
  if (!isBrowser) return;
  ReactGA.initialize("G-VY6V29MQZJ")
  ReactGA.pageview(window.location.pathname + window.location.search);
}
function App() {
  initializeAnalytics();
  return (
    <div className="app">
      <Router>

        <Certificate path="/certificate" />

        <Shwaas path="/shwaas" />

        <Vaidya path="/vaidya" />

        <Siddhivinayak path="/siddhivinayak" />

        <Hospitals path="/hospitals" />

        <Home path="/" />

      </Router>
    </div>
  );
}

export default App;
