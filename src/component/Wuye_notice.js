import React, { Component } from 'react';
import './../css/wuye_notice.css';
import $ from 'jquery'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import * as action from './../action/action'
import {connect} from 'react-redux';

class WuyeNotice extends Component {
  componentDidMount(){
  $(".admin_con").hide()
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
                <span onClick={this.ok}><img src="../../images/tip.png" alt=""/></span>
                <span>小区通知</span>
            </div>
            <div className="editor_con">    
                <input type="text"  id="wuyenotice" placeholder="请输入"/>
                <p onClick={this.fn.bind(this)}>发布</p>
            </div>
            <ul className="notice_con">
                 {this.props.data.map(function(e,i){
                     <li> {e.con} </li>
                 })}              
            </ul>
        </div>
    );
  }
}
export default connect(e=>({data:e.wuyenotice}),action)(WuyeNotice);