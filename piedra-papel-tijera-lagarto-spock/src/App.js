import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Main";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/Main" component={Main} />
          <Route path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
