import React, { Component } from 'react'
import "../style/curtoonStyle/curtoon.css";
import axios from "axios";

export default class curtoon extends Component {
    constructor(props){
        super(props);
        this.state={
            curtoonArr:[]
        }
    }
    render() {
        return (
            <div className="curtoon-box">
           
               <div className="curtoon">
               {this.state.curtoonArr.map((item,index)=>{
                    return  item.id&&<ul className="item" key={index} onClick={()=>{
                        this.props.history.push("/Songdetail")
                    }}>
                                <li><p><img src={item.pic} alt=""/></p></li>
                                <li><h4>{item.name}</h4></li>
                                <li>共142集</li>
                            </ul>
                 })} 
               </div>     
            </div>
        )
    }
    componentDidMount(){
        axios.get("http://bb.shoujiduoduo.com/baby/bb.php?type=getlistv2&act=home&pagesize=30&pid=26").then((res)=>{
            console.log(res.data.list)
            this.setState({
                curtoonArr:res.data.list
            })
        })
    }
}
