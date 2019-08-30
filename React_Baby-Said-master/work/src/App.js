import React ,{Component}from 'react';
import './App.css';

import {BrowserRouter as Router} from "react-router-dom";
import {routes} from "./router/router.config.js";
import RouterView from './router/RouterView';

class App extends Component{
  render(){
    return (
      <Router>
        <RouterView routes={routes}/>
      </Router>
    )
  }
}

export default App;
