import React, { Component } from 'react'
import {Route,Redirect,Switch} from "react-router-dom";

export default class RouterView extends Component {
    render() {
        return (
           <Switch>
               {this.props.routes.map((item,index)=>{
                   if(item.redirect){
                    return <Redirect from={item.path} to={item.redirect} key={index}></Redirect>
                   }else{
                    return <Route key={index} path={item.path} render={()=>{
                        return <item.component children={item.children}/>
                    }}/>
                   }
               })}
           </Switch>
        )
    }
}