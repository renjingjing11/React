import React, { Component } from 'react'
import Footer from "../components/footer.js";
import "./style/homeStyle/home.css";
import RouterView from "../router/RouterView.js"
export default class home extends Component {
    render() {
        return (
            <div className="home">
                <div className="header">
                    宝宝看
                </div>
                <div className="main">
                    <RouterView routes={this.props.children}></RouterView>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        )
    }
}
