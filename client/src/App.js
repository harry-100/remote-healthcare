import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainHeader from "./shared/components/Navigation/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
    </div>
  );
}

export default App;
