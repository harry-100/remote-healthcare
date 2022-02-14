import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Hero from "./components/Hero/Hero";
import MainNavigation from "./components/Navigation/MainNavigation";
import About from "../src/components/About/About";
import Services from "../src/components/Services/Services";
import Dashboard from "../src/components/Dashboard/Dashboard";
import Appointment from "../src/components/Dashboard/Appointment";
const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Hero />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/Services" exact>
            <Services />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
