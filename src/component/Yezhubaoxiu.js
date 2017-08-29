import React, { Component } from 'react';
import './../css/yezhubaoxiu.css';
import $ from 'jquery'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import * as action from './../action/action'
import {connect} from 'react-redux';
import Btn from './Btn';
class Yezhubaoxiu extends Component {
  componentDidMount(){
    $(".admin_con").hide()
    var bb=JSON.parse(window.sessionStorage.getItem("yezhu"))
    this.props.yezhu_antee(bb[0].address)
  }
  componentWillUnmount(){
    $(".admin_con").show()
  }
  
  bxtj(){
    if($(".orgin").val()!=""){
      var bb=JSON.parse(window.sessionStorage.getItem("yezhu"))
    this.props.wuye_bx($("#con").val(),bb[0].address,bb[0].family)
    $(".orgin").val(" ")
    document.getElementById("organize").style.height="0"
      $(".topsbtn").css("display","block")
    }else{
   $(".organize p").css("opacity","1")
    }
    
  }
  btnfn=function(){
    $(".topsbtn").css("display","none")
    document.getElementById("organize").style.height="7.5rem"
  }
  render() {
    return (
    	  <div>
             <div className="deal_top">
                <div className='del_top'>
                    <p></p>
                    <p>报事报修</p>
                    <p></p>   
                </div>
             </div>
              <div className="deal_con">
                  <div className="topsbtn" onClick={this.btnfn}><Btn btnVal="快捷保修" ></Btn></div>
                  <div className="organize" id="organize">
                      <textarea  className="orgin" id="con"></textarea>
                      <p>不能为空</p>
                      <div onClick={this.bxtj.bind(this)}><Btn btnVal="发布" ></Btn></div>
                  </div>
              </div>
           <ul className="orgin_con">
           {console.log(this.props.data)}
            {this.props.data.map(function(e,i){
  return        <li key={i} className="baoxiu_box">
                    <div className="one">
                        <span>{e.village}</span>
                        <span>{e.address}</span>
                    </div>
                    <p className="two">{e.con}</p>
                    <p className="time">{e.time}</p>
                </li>
})}
            </ul>
        </div>
    );
  }
}

export default connect(e=>({data:e.wuyeantee}),action)(Yezhubaoxiu);