import React, { Component } from 'react';

import * as action from './../action/action'
import {connect} from 'react-redux';
class Wuyealready extends Component {
    tip=function(){
         window.history.go(-2)
    }
   componentDidMount(){
    var bb=JSON.parse(window.sessionStorage.getItem("wuye"))
    this.props.wuye_boxs(bb[0].village)

   }
	render(){
		return (
			<div className="already">
				<div className="guarantee_bottom">
              <div className="notice_editor">
                <span onClick={this.tip}><img src="../../images/tip.png" alt=""/></span>
                <span>保修服务</span>
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
                      <p className="time">{e.time.substr(0,19).split("T").join("   ")}</p>
                  </li>
                }.bind(this))}
            </ul>
                </div>
			</div>
			)
	}
}

export default connect(e=>({data:e.wuyebaoxiu}),action)(Wuyealready);