import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/navbar";
import Hero from "../components/home";
import Footer from "../components/footer";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
