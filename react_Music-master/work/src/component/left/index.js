import React, { Component } from 'react'
import Item from "./item/index.js";

export default class index extends Component {
    render() {
        //console.log(this.props)
        return (
            <> 
            <Item {...this.props} onShow={this.props.onShow} vioce={this.props.vioce}></Item>
            </>
        )
    }
}
