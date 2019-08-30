import React, { Component } from 'react'
import "../style/regiStyle/registor.css"
import {withRouter} from "react-router-dom"
import {Input, Button,message} from 'antd'
import Api from '../api'
import {emailCheck,jsEncrypt} from '../utils/index'
import * as KeyCode from "../api/KeyCode.js"



 class Registor extends Component {
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:"",
            confirm:"",
            email:"",
        }
    }
    render() {
        let {
            username,
            password,
            confirm,
            email,
        }=this.state
        return (
            <div className="login">
               <div className="title">
                    后台管理系统
               </div>
               <div className="con">
                   <div className="user">
                       <Input placeholder="请输入用户名" value={username} onChange={this.handleInput.bind(this,"username")}></Input> 
                   </div>
                   <div className="pwd">
                       <Input placeholder="请输入密码" value={password} onChange={this.handleInput.bind(this,"password")}></Input> 
                   </div>
                   <div className="confirm">
                       <Input placeholder="请确认密码" value={confirm} onChange={this.handleInput.bind(this,"confirm")}></Input> 
                   </div>
                   <div className="email">
                       <Input placeholder="请输入邮箱" value={email} onChange={this.handleInput.bind(this,"email")}></Input> 
                   </div>
                   <div className="btn">
                       <Button onClick={this.handleRegistor.bind(this)}>注册</Button> 
                   </div>
               </div>
            </div>
        )
    }
}

// 受控组件
Object.assign(Registor.prototype, {
    handleInput(filed,e){
       this.setState({
           [filed]:e.target.value
       })
    }
})

// 事件
Object.assign(Registor.prototype,{
    handleRegistor(){
        let {username,password,confirm,email}=this.state
        if (!username.trim()) {
            message.info('用户名不能为空')
            return
          } else if (!password.trim()) {
            message.info('密码不能为空')
            return      
          } else if (password !== confirm) {
            message.info('两次输入的密码不一致')
            return
          } else if (!(emailCheck(email) === true)) {
            message.info(emailCheck(email))
            return
          }
          let data={
            username,
            password:jsEncrypt(password),
            email
        }
        Api.register(data).then(res=>{
            if (res.code === KeyCode.SUCCESS) {
                this.props.history.push('/login')
              }
        })
    }
})


Registor=withRouter(Registor)

export default Registor;
