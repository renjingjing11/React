import React, { Component } from 'react'
import "../style/myStyle/my.css";
import "../../fonts/iconfont.css";

export default class my extends Component {
    render() {
        return (
            <div className="my">
               <ul className="top">
                    <li><span>我的下载</span><span className="iconfont icon-angle-right"></span></li>
                    <li><span>我的收藏</span><span className="iconfont icon-angle-right"></span></li>
               </ul>
               <ol className="mid">
                    <li>清除缓存</li>
                    <li>关于我们</li>
               </ol>
               <div className="bottom">
                    <button>推出应用</button>
               </div>
            </div>
        )
    }
}
