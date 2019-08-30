import React, { Component } from 'react'

import "../../style/optionalStyle/optional.css";
import "../../fonts/iconfont.css";
import {withRouter} from "react-router-dom";
import Rate from "../../components/rate.js";
import {connect} from "react-redux";
import List from "../../components/list.js";

class optional extends Component {
    render() {
        return (
            <div className="optional">
                <Rate/>
                <div className="content">
                    <ul className="con-top">
                        <li onClick={()=>{
                            this.props.history.push("/redact")
                        }}>编辑</li>
                        <li>最新</li>
                        <li>涨幅</li>
                        <li>涨跌</li>
                    </ul>
                    <div className="add">
                      {this.props.list.length?<List list={this.props.list}/>:<div className="push"><p onClick={()=>{
                            this.props.history.push("/detail")
                        }}><span>+</span></p>
                        <p>暂无股票  点击添加</p>
                       </div>}
                    </div>
                </div>
            </div>
        )
    }
}


let mapStateToProps=(state)=>{
    return {
        list:state.reducerList
    }
}

let mapDispatchToProps=(dispatch)=>{
    return {}
}

optional=withRouter(optional);

export default connect(mapStateToProps,mapDispatchToProps)(optional)


