
// import React, { Component } from 'react'
import React from "react"

import "../style/homeStyle/home.css";
import {NavLink} from "react-router-dom";
import RouterView from "../Router/RouterView.js";


export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <header className="header">
                    <div className="head-left"></div>
                    <div className="head-mid">
                        自选
                    </div>
                    <div className="head-right"></div>
                </header>
                <main className="main">
                    <RouterView routes={this.props.children}></RouterView>
                </main>
                <footer className="footer">
                    <NavLink to="/home/page">首页</NavLink>
                    <NavLink to="/home/marget">行情</NavLink>
                    <NavLink to="/home/optional">自选</NavLink>
                    <NavLink to="/home/deal">交易</NavLink>
                    <NavLink to="/home/consult">咨询</NavLink>
                </footer>
            </div>
        )
    }
   
}

