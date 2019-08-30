import React, { Component } from 'react'
import {NavLink} from "react-router-dom";
import RouterView from "../../router/RouterView.js";
import "../style/watchStyle/watch.css";

export default class watch extends Component {
    render() {
        return (
            <>
            <div className="watch">
                <NavLink to="/home/watch/song">儿歌</NavLink>
                <NavLink to="/home/watch/story">故事</NavLink>
                <NavLink to="/home/watch/curtoon">卡通片</NavLink>
            </div>
            <div className="content">
                    <RouterView routes={this.props.children} />
                </div>
            </>
        )
    }
}
