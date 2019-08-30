import React, { Component } from 'react'
import "../views/style/detailStyle/Songdetail.css";
import {withRouter} from "react-router-dom"
 class Songdetail extends Component {
    componentWillMount(){
        if(!localStorage.getItem('renming')){
            this.props.history.push("/home/my")
        }
    }
    render() {
        console.log(this.props)
        return (
            <div className="detail">
               <video src={this.props.location.state} autoPlay></video>
            </div>
        )
    }
}
Songdetail=withRouter(Songdetail)
export default Songdetail
