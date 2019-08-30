import React, { Component } from 'react'
import "../../fonts/iconfont.css";
import "../style/singStyle/sing.css";
import axios from "axios";

export default class sing extends Component {
    constructor(props){
        super(props);
        this.state={
            singArr:[]
        }
    }
    render() {
        return (
            <div className="sing">
            {this.state.singArr.map((item,index)=>{
                return item.id&&<div className="sing-item" key={index} onClick={()=>{
                    this.props.history.push("/Songdetail",item.downurl)
                }}>
                        <div className="item-left">
                            {index}
                        </div>
                        <div className="item-mid">
                            <h4>{item.name}</h4>
                            <p><span>儿童歌曲</span><span>播放：{item.playcnt}</span></p>
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
        axios.get("http://bb.shoujiduoduo.com/baby/bb.php?type=getlist&pagesize=30&listid=5").then((res)=>{
            console.log(res.data.list)
            this.setState({
                singArr:res.data.list
            })
        })
    }
}
