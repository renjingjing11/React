import React, { Component } from 'react'

import "../style/detailStyle/detail.css";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

 class detail extends Component {
     state={
         value:'',
         list:[]
     }
    render() {
        return (
            <div className="detail">
                <header className="header">
                    <div className="de-top">
                        <div className="de-left" onClick={()=>{
                            this.props.history.go(-1)
                        }}>
                            <i className="iconfont icon-chevron-thin-left"></i>
                        </div>
                        <div className="de-mid">
                            股票添加
                        </div>
                        <div className="de-right"></div>
                    </div>
                    <div className="de-bottom">
                        <input type="text" onChange={(e)=>{
                            // input  模糊搜索
                            this.setState({
                                value:e.target.target
                            })
                            this.state.list=e.target.value===""?[]:this.props.list.filter((item)=>{
                                return item.name.indexOf(e.target.value)!==-1
                            })
                        }}/>
                    </div>
                </header>
                <main className="main">
                    <ul className="list">
                    {this.state.list.map((item,index)=>{
                        return  <li key={index}><span>{item.name}</span><span>{item.type}</span><span onClick={()=>{
                           this.setState({
                            
                           })
                           this.state.list[index].flag=!this.state.list[index].flag
                           this.props.saveList(item)
                        }} className={item.flag?"add":""}>{item.flag?"已添加":"未添加"}</span></li>
                    })}
                    </ul>
                </main>
            </div>
        )
    }
    componentDidMount(){
      
        this.setState({})
    }
}


let mapStateToProps=(state)=>{
    return {
        list:state.reducerFn
    }
}

let mapDispatchToProps=(dispatch)=>{
    return {
        saveList:(item)=>{
            dispatch({type:"ADD_LIST",item})
        }
    }
}

detail=withRouter(detail);

export default connect(mapStateToProps,mapDispatchToProps)(detail);