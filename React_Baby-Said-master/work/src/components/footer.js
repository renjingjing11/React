import React, { Component } from 'react'
import {NavLink} from "react-router-dom";
import "../views/style/footStyle/foot.css";

export default class footer extends Component {
    render() {
        return (
            <div className="footer">
                <NavLink to="/home/watch">宝宝看</NavLink>
                <NavLink to="/home/listen">宝宝听</NavLink>
                <NavLink to="/home/my">我的</NavLink>
            </div>
        )
    }
}
