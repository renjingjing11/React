import React, { Component } from 'react'
import "../../fonts/iconfont.css";
import "../style/songStyle/song.css";
import axios from "axios";

export default class song extends Component {
    constructor(props){
        super(props);
        this.state={
            homeList:[]
        }
    }
    render() {
        return (
            <div className="song-box">
            {this.state.homeList.map((item,index)=>{
                return  item.id&&<div className="song" key={index} onClick={()=>{
                   this.props.history.push("/Songdetail",item.downurl)
                   console.log(this.props)
                }}>
                            <div className="song-left">
                                <p><img src={item.pic} alt=""/></p>
                            </div>
                            <div className="song-mid">
                                <h4>{index}.{item.name}</h4>
                                <p><span>儿歌多多</span><span>播放量：{item.playcnt}</span></p>
                            </div>
                            <div className="song-right">
                                <i className="iconfont icon-xiazai"></i>
                            </div>
                        </div>
            })}
            </div>
        )
    }
    componentDidMount(){
        axios.get("http://bb.shoujiduoduo.com/baby/bb.php?type=getvideos&pagesize=30&collectid=29").then((res)=>{
            console.log(res.data.list)
            this.setState({
                homeList:res.data.list
            })
        })
    }
}

