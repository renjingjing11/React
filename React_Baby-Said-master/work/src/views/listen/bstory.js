import React, { Component } from 'react'
import "../style/bstoryStyle/bstory.css";
import axios from "axios"

export default class bstory extends Component {
    constructor(props){
        super(props);
        this.state={
            bstoryArr:[]
        }
    }
    render() {
        console.log(this.props)
        return (
            <div className="bstory">
            {this.state.bstoryArr.map((item,index)=>{
                return item.id&&<div className="bstory-item" key={index} onClick={()=>{
                    this.props.history.push("/Songdetail",item.downurl)
                }}>
                        <div className="item-left">
                            {index}
                        </div>
                        <div className="item-mid">
                            <h4>{item.name}</h4>
                            <p><span>爸爸讲睡前故事十分钟</span><span>播放：{item.playcnt}</span></p>
                        </div>
                        <div className="item-right">
                            <i className="iconfont icon-angle-right"></i>
                        </div>
                    </div>
            })}
        </div>
        )
    }
    componentDidMount(){
        axios.get("http://bb.shoujiduoduo.com/baby/bb.php?type=getlist&pagesize=30&listid=6").then((res)=>{
            console.log(res.data.list);
            this.setState({
            bstoryArr:res.data.list
            })
        })
    }
}
