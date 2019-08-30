import React, { Component } from 'react';
import './App.css';
import RouterView from "./router/RouterView";
import {BrowserRouter as Router} from "react-router-dom";
import routes from "./router/router.config.js";

class App extends Component {
  render(){
    return(
      <Router className="app">
          {/* <Login/> */}
          <RouterView routes={routes}></RouterView>
      </Router>
    )
  }
}

export default App;