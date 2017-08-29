import React, { Component } from 'react';
import './../css/wuye_guarantee.css';
import wuyealready from './wuye_already';
import $ from 'jquery'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import * as action from './../action/action'
import {connect} from 'react-redux';

class WuyeGuarantee extends Component {
  componentDidMount(){
    $(".admin_con").hide()
    var bb=JSON.parse(window.sessionStorage.getItem("wuye"))
    this.props.yezhu_antee(bb[0].village)
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
      <Router>
    	  <div className="guarantee">
                <div className="notice_editor">
                     <span onClick={this.ok}><img src="../../images/tip.png" alt=""/></span>
                      <span>保修服务</span>
                </div>
    	  	  <div className="guarantee_top">
                <p><Link to="/wuye/index/guarantee">未处理</Link></p>
                <p><Link to="/wuye/index/already">已处理</Link></p>
            </div>
            <Route path="/wuye/index/guarantee" render={()=>(
                <div className="guarantee_bottom">
             <ul className="orgin_con">
              {console.log(this.props.data)}
              {this.props.data.map(function(e,i){
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
              )} />
            <Route path="/wuye/index/already" component={wuyealready} />
            
        </div>
      </Router>
    );
  }
}
export default connect(e=>({data:e.wuyeantee}),action)(WuyeGuarantee);