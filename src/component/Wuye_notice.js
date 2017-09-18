import React, { Component } from 'react';
import './../css/wuye_notice.css';
import $ from 'jquery'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import * as action from './../action/action'
import {connect} from 'react-redux';

import imgs1 from "./images/tip.png";

class WuyeNotice extends Component {
  componentDidMount(){
  $(".admin_con").hide()
    var aa=JSON.parse(window.sessionStorage.getItem("wuye"))
    this.props.wuyetzs(aa[0].village,aa[0].name,$("#wuyenotice").val())  
  }
  componentWillUnmount(){
    $(".admin_con").show()
  }
  ok=function(){
    window.history.go(-1)
  }
  fn(){
    var aa=JSON.parse(window.sessionStorage.getItem("wuye"))
    this.props.wuyetz(aa[0].village,aa[0].name,$("#wuyenotice").val())  

  }
  render() {
    return (
    	  <div className="notice">   
    	  	  <div className="notice_editor"> 
                <span onClick={this.ok}><img src={imgs1} alt=""/></span>
                <span>小区通知</span>
            </div>
            <div className="editor_con">    
                <input type="text"  id="wuyenotice" placeholder="请输入"/>
                <p onClick={this.fn.bind(this)}>发布</p>
            </div>
            <ul className="notice_con">
                {this.props.data.map(function(e,i){
                     return   (
                       <li key={i} className="baoxiu_box">
                          <div className="one">
                              <span>{e.name}</span>
                              <span>{e.village}</span>
                          </div>
                          <p className="two">{e.con}</p>
                          <p className="time">{e.time.substr(0,19).split("T").join("   ")}</p>
                      </li>
                    )
                })}
            </ul>
        </div>
    );
  }
}
export default connect(e=>({data:e.wuyenotice}),action)(WuyeNotice);