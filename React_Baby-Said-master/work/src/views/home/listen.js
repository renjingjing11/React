import React, { Component } from 'react'
import {NavLink} from "react-router-dom";
import RouterView from "../../router/RouterView";
import "../style/listenStyle/listen.css";

export default class listen extends Component {
    render() {
        return (
            <div className="listen-box">
            <div className="listen">
                <NavLink to="/home/listen/sing">儿歌</NavLink>
                <NavLink to="/home/listen/bstory">故事</NavLink>
            </div>
            <div className="listen-content">
                <RouterView routes={this.props.children}/>
            </div>
            </div>
        )
    }
}
