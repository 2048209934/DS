import React, { Component } from 'react';
import './../css/wuye_guarantee.css';
import $ from 'jquery'

import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import * as action from './../action/action'
import {connect} from 'react-redux';
import createHistory from 'history/createHashHistory'

import imgs1 from "./images/tip.png";

const history = createHistory();
class WuyeGuarantee extends Component {
  componentDidMount(){
  	$(".guarantees").show()
  	$(".already").hide()
  	$(".guarantee_top p").eq(0).click(function(){
  		$(".guarantees").show()
  		$(".already").hide()
  		$(".guarantee_top p").removeClass("cl")
  		$(this).addClass("cl")
  	})
  	$(".guarantee_top p").eq(1).click(function(){
  		$(".guarantees").hide()
  		$(".already").show()
  		$(".guarantee_top p").removeClass("cl")
  		$(this).addClass("cl")
  	})
    $(".admin_con").hide()
    var bb=JSON.parse(window.sessionStorage.getItem("wuye"))
    this.props.yezhu_antee(bb[0].village)
    this.props.wuye_boxs(bb[0].village)
  }
  componentWillUnmount(){
    $(".admin_con").show()
  }
  tip=function(){
    window.history.go(-1)
  }
  ok=function(){
    window.history.go(-1)
  }
  move=function(id,village,address){
    this.props.wuye_box(id,village,address)
  }
  render() {
    return (
      <Router history={history}>
    	  <div className="guarantee">
                <div className="notice_editor">
                     <span onClick={this.ok}><img src={imgs1} alt=""/></span>
                      <span>报修服务</span>
                </div>
    	  	  <div className="guarantee_top">
                <p className="cl">未处理</p>
                <p className="">已处理</p>
            </div>
            <div className="guarantees">
                <div className="guarantee_bottom">
             <ul className="orgin_con">
              {this.props.data.wuyeantee.map(function(e,i){
                  return        <li key={i} className="baoxiu_box">
                      <div className="one">
                          <span>{e.village}</span>
                          <span>{e.address}</span>
                          <span onClick={this.move.bind(this,e.id,e.village,e.address)}>标记为处理</span>
                      </div>
                      <p className="two">{e.con}</p>
                      <p className="time">{e.time.substr(0,19).split("T").join("   ")}</p>
                  </li>
                }.bind(this))}
            </ul>
            </div>
            </div>
            <div className="already">
							<div className="guarantee_bottom">
	              <div className="notice_editor">
	                <span onClick={this.tip}><img src={imgs1} alt=""/></span>
	                <span>保修服务</span>
	              </div>
	            <ul className="orgin_con">
		              {this.props.data.wuyebaoxiu.map(function(e,i){
		    return        <li key={i} className="baoxiu_box">
		                      <div className="one">
		                          <span>{e.village}</span>
		                          <span>{e.address}</span>
		                      </div>
		                      <p className="two">{e.con}</p>
		                      <p className="time">{e.time.substr(0,19).split("T").join("   ")}</p>
		                  </li>
		                }.bind(this))}
		            </ul>
			        </div>
						</div>
            
        </div>
      </Router>
    );
  }
}
export default connect(e=>({data:e}),action)(WuyeGuarantee);