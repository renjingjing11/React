import React, { Component } from 'react'
import {NavLink} from "react-router-dom";
import "../style/loginStyle/login.css"
import {Input, Button,Select} from 'antd'
import Api from '../api'
import * as KeyCode from "../api/KeyCode.js"
import intl from 'react-intl-universal'
import {jsEncrypt} from '../utils'
const { Option } = Select;


export default class login extends Component {
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:"",
            captcha:"",
            captchaSvg:"",
            language:""
        }
    }
    render() {
        let {
            username,
            password,
            captcha,
            captchaSvg,
            language,
        }=this.state
        return (
            <div className="login">
            <div>
                <Select value={language} onChange={this.handleSlect.bind(this,'language')}>
                    <Option value="zh-CN">简体中文</Option>
                    <Option value="en-US">English</Option>
                </Select>
            </div>
               <div className="title">
                    {intl.get('login.loginTitle')}
               </div>
               <div className="con">
                   <div className="user">
                       <Input placeholder="请输入用户名" value={username} onChange={this.handleInput.bind(this,"username")}></Input> 
                   </div>
                   <div className="pwd">
                       <Input placeholder="请输入密码" value={password} onChange={this.handleInput.bind(this,"password")}></Input> 
                   </div>
                   <div className="captcha">
                       <Input placeholder="请输入验证码" value={captcha} onChange={this.handleInput.bind(this,"captcha")}></Input> 
                       <span dangerouslySetInnerHTML={{__html: captchaSvg}} onClick={this.getCaptcha.bind(this)}></span>
                   </div>
                  
                   <div className="btn">
                       <Button onClick={this.handleLogin.bind(this)}>提交</Button> 
                   </div>
                   <NavLink to="/Registor" className="Rbtn">注册</NavLink>
               </div>
            </div>
        )
    }
    componentDidMount(){
       this.getCaptcha()
       this.initLanguage()
    }
}

// 受控组件
Object.assign(login.prototype, {
    handleInput(field, e) {
        console.log(field)
      this.setState({
        [field]: e.target.value
      })
    },
    handleSlect(field,value){
        console.log(field,value)
        this.setState({
            [field]:value
        })
    }
})

// 事件
Object.assign(login.prototype,{
    handleLogin(){
        let {
            username,
            password,
            captcha,
        }=this.state
        let data={
            username,
            password:jsEncrypt(password),
            captcha,
        }
        Api.login(data).then((res)=>{
            if(res.code===KeyCode.SUCCESS){
                alert("登录成功")
            }
        })
    },
    getCaptcha(){
        Api.captcha().then((res) => {
            if (res.code === KeyCode.SUCCESS) {
                this.setState({
                captchaSvg: res.data.captcha
                })
                localStorage.setItem('token', res.data.captchaId)
            }
        })
    },
    initLanguage() {
    let currentLocale = localStorage.getItem('language') || 'zh-CN'
    const locales = {
        "en-US": require('../i18n/en-US.js').default,
        "zh-CN": require('../i18n/zh-CN.js').default,
    };    
    intl.init({
            currentLocale,
            locales
        }).then(() => {

    })
    this.setState({
        language: currentLocale
        })
    }
})
