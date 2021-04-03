import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <About />
        <Projects />
        <Switch>
          <Route path="/" exact />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
