import React,{Component} from 'react';
import './App.css';

import {BrowserRouter as Router} from "react-router-dom";
import RouterView from "./Router/RouterView.js";
import routes from "./Router/router.config.js";
import {connect} from "react-redux";
import axios from "axios";

class App extends Component{
  render(){
      return(
        <Router>
            <RouterView routes={routes}/>
        </Router>
      )
  }
 //   从后端请求接口  需要用到axios 并且需要注意 next  这是异步请求数据  存到仓库里
  save (next){
    axios.get("/list").then(res=>{
        next({type:"ADD_OBJ",data:res.data})
    })
}

componentDidMount() {
   this.props.saveData(this.save)
    }
}


let mapStateToProps=(state)=>{
  return {}
}

let mapDispatchToProps=(dispatch)=>{
  return {
      saveData:(fn)=>{
          dispatch(fn)
      }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);

