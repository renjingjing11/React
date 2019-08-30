import React, { Component } from 'react'
import "../style/storyStyle/story.css";
import "../../fonts/iconfont.css";
import axios from "axios";

export default class story extends Component {
    constructor(props){
        super(props);
        this.state={
            storyArr:[]
        }
    }
    render() {
        return (
            <div className="story-box">
            {this.state.storyArr.map((item,index)=>{
                return item.id&&<div className="story" key={index} onClick={()=>{
                    this.props.history.push("/Songdetail",item.downurl)
                }}>
                            <div className="story-left">
                                <p><img src={item.pic} alt=""/></p>
                            </div>
                            <div className="story-mid">
                                <h4>{index}.{item.name}</h4>
                                <p><span>儿童睡前故事大全</span><span>播放：{item.playcnt}</span></p>
                            </div>
                            <div className="story-right">
                                <i className="iconfont icon-chevron-thin-right"></i>
                            </div>
                        </div>
            })}
            </div>
        )
    }
    componentDidMount(){
        axios.get("http://bb.shoujiduoduo.com/baby/bb.php?type=getvideos&pagesize=30&collectid=27").then((res)=>{
            console.log(res.data.list)
            this.setState({
                storyArr:res.data.list
            })
        })
    }
}
