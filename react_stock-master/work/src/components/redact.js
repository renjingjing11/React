import React, { Component } from 'react'

import "../fonts/iconfont.css";
import "../style/redactStyle/redact.css";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import List from "../components/list.js";

class redact extends Component {

    render() {
        return (
            <div className="redact">
                <div className="Rhead">
                    <div className="headLeft">
                        <i className="iconfont icon-zuojiantou-01" onClick={()=>{
                            this.props.history.go(-1);
                        }}></i>
                    </div>
                    <div className="headMid">
                        自选设置
                    </div>
                    <div className="headRight">
                        添加设置
                    </div>
                </div>
                <main className="Rmain">
                    <List list={this.props.list}/>
                </main>
                <footer className="Rfooter" onClick={()=>{
                    let newList=this.props.list;
                    // let newDelist=this.props.delist;
                    newList.forEach(item=>{
                        this.props.save(item)
                    })
                }}>
                        <span>删除<i>({this.props.num})</i></span>
                </footer>
            </div>
        )
    }
}
let mapStateToProps=(state)=>{
    return {
        list:state.reducerList,
        num:state.reducerNum.length,
        delist:state.reducerdeList
    }
}
let mapDistchToProps=(dispatch)=>{
    return {
        save:(item)=>{
            dispatch({type:"REMOVE_DATA",delist:item})
        }
    }
}
redact=withRouter(redact);
export default connect(mapStateToProps,mapDistchToProps)(redact);