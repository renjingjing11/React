import React, { Component } from 'react'

import "../style/listStyle/list.css";
import {connect} from "react-redux";

 class list extends Component {
     state={
         delnum:[]
     }
    render() {
        return (
            <div className="list">
            {this.props.list.map((item,index)=>{
                return   <ul className="ul" key={index}>
                            <li><input type="checkbox" onChange={()=>{
                               this.props.delNum(item)
                               this.props.deList(item)
                            }}/></li>
                            <li><span>{item.name}</span><span>{item.type}</span></li>
                            <li>79.980</li>
                            <li>+1.87%</li>
                        </ul>
            })}
            </div>
        )
    }
}

let mapStateToProps=(state)=>{
    
    return {
       
    }
}

let mapDispatchToProps=(dispatch)=>{
    return {
        delNum:(num)=>{
            dispatch({type:"ADD_NUM",num});
        },
        deList:(delist)=>{
            dispatch({type:"DEL_LIST",delist})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(list);