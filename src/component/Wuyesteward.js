import React, { Component } from 'react';

import $ from 'jquery'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import * as action from './../action/action'
import {connect} from 'react-redux';


class Wuyesteward extends Component {
	componentDidMount(){
		
	}
	wyxq(){
		$(".tjglk").slideDown()
	}
	wysq(){
		
		$(".tjglk").slideUp()
	}
  render() {
    return (
    	  <div className="zhgl">
    	  	<h2>住户管理</h2>
    	  	<p className="tjgl" onClick={this.wyxq}>
    	  		<img src="../../images/addressbook.png" alt="" />
    	  		添加住户
    	  	</p>
    	  	<div className="tjglk">
    	  		<div>
    	  			<span>户主姓名</span>
    	  			<input type="text" placeholder="户主姓名" />
    	  		</div>
    	  		<div>
    	  			<span>联系方式</span>
    	  			<input type="text" placeholder="联系方式" />
    	  		</div>
    	  		<div>
    	  			<span>户主住址</span>
    	  			<input type="text" placeholder="户主住址" />
    	  		</div>
    	  		<button onClick={this.wysq.bind(this)}>确定</button>
    	  	</div>
    	  	<p className="sytj"><img src="../../images/addpeople.png" alt="" />所有住户</p>
    	  	<ul className="zhlist">  	
    	  		<li>
    	  			<p>户主 : 呵呵</p>
    	  			<p>联系方式 : 123444567897</p>
    	  			<p>住址 : 101A</p>
    	  		</li>
    	  	</ul>
        </div>
    );
  }
}

export default connect(e=>({data:e}),action)(Wuyesteward);