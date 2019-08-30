import React, { Component } from 'react'
import "../style/rateStyle/rate.css";

export default class rate extends Component {
    render() {
        return (
            <div className="rate">
                      <div className="top">
                    <div className="top-left">
                        <p><span>沪</span><span>2679.11</span></p>
                        <p>+10.94+0.41%</p>
                    </div>
                    <div className="top-right">
                        <ul className="ul">
                            <li><span className="iconfont icon-31"></span><span>资金</span></li>
                            <li><span className="iconfont icon-zixun"></span> <span>新闻</span> </li>
                            <li><span className="iconfont icon-shengyin"> </span><span>公告</span> </li>
                            <li><span className="iconfont icon-gerenxinxi"></span> <span>资产</span> </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
