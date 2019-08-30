import React, { Component } from 'react'
import "./index.css";

export default class index extends Component {
    constructor(props){
        super(props);
        this.refAudio=React.createRef()
        this.state={
            flag:false
        }
    }
    render() {
        return (
            <>
            <audio ref={this.refAudio} src={this.props.url}></audio>
            <span onMouseDown={(()=>{
                let oAudio=this.refAudio.current
                oAudio.currentTime=0;
                oAudio.play();
                this.setState({
                    flag:true
                })
                let vioce=parseFloat(this.props.vioce/100);
                oAudio.volume = vioce;
                
                // 子级向父级传递参数
                this.props.onShow(this.props.id)
            })} className={this.state.flag?"active":""} onMouseUp={()=>{
                this.setState({
                    flag:false
                })
            }}>{this.props.keyTrigger}</span>
            </>
        )
    }
    componentDidMount(){
        document.addEventListener("keydown",(e)=>{
            if(e.keyCode===this.props.keyCode){
                let oAudio=this.refAudio.current
                oAudio.currentTime=0;
                oAudio.play();
                this.setState({
                    flag:true
                })
                this.props.onShow(this.props.id)
            }
        })
        document.addEventListener("keyup",()=>{
            this.setState({
                flag:false
            })
        })
    }
    componentWillUnmount(){
        document.removeEventListener("keydown",()=>{})
    }
}
