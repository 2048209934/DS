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
		var wuyesj=window.sessionStorage.getItem('wuye')
		var wuyesjjson=JSON.parse(wuyesj)
		this.props.wuyegllist(wuyesjjson[0].village)
	}
	wyxq(){
		$(".tjglk").slideDown()
	}
	wysq(){
		if($("#wyhzxm").val()==''||$("#wyhzsex").val()==''||$("#wylxfs").val()==''||$("#wyhzzz").val()==''){
			alert("请输入内容")
		}else{
			var wuyesj=window.sessionStorage.getItem('wuye')
			var wuyesjjson=JSON.parse(wuyesj)
			var datetime=new Date().getTime()
			this.props.wuyegltj(wuyesjjson[0].village,$("#wyhzxm").val(),$("#wyhzsex").val(),$("#wylxfs").val(),$("#wyhzzz").val(),datetime)
			$(".tjglk").slideUp()
			$("#wyhzxm").val('')
			$("#wyhzsex").val('')
			$("#wylxfs").val('')
			$("#wyhzzz").val('')
		}
//		$(".tjglk").slideUp()
	}
  render() {
    return (
    	  <div className="zhgl">
    	  	<h2>住户管理</h2>
    	  	<p className="tjgl" onClick={this.wyxq}>
    	  		<img className="left" src="../../images/addressbook.png" alt="" />
    	  		添加住户
    	  	</p>
    	  	<div className="tjglk">
    	  		<div>
    	  			<span>户主姓名</span>
    	  			<input type="text" placeholder="户主姓名" id="wyhzxm" />
    	  		</div>
    	  		<div>
    	  			<span>户主性别</span>
    	  			<input type="text" placeholder="户主性别" id="wyhzsex" />
    	  		</div>
    	  		<div>
    	  			<span>联系方式</span>
    	  			<input type="text" placeholder="联系方式" id="wylxfs" />
    	  		</div>
    	  		<div>
    	  			<span>户主住址</span>
    	  			<input type="text" placeholder="户主住址" id="wyhzzz" />
    	  		</div>
    	  		<button onClick={this.wysq.bind(this)}>确定</button>
    	  	</div>
    	  	<p className="sytj">
                <img className="left" src="../../images/addpeople.png" alt="" />
                所有住户
            </p>
    	  	<ul className="zhlist">  	
    	  		{
    	  			this.props.data.map(function(v,i){
    	  				return <li key={i}>
		    	  			<p>户主 : {v.name}</p>
		    	  			<p>性别 : {v.sex}</p>
		    	  			<p>住址 : {v.family}</p>
		    	  			<p>住户码 : {v.homeyard}</p>
		    	  			<p>联系方式 : {v.phone}</p>
		    	  		</li>
    	  			})
    	  		}
    	  	</ul>
        </div>
    );
  }
}

export default connect(e=>({data:e.wuyegllb}),action)(Wuyesteward);