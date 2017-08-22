import React, { Component } from 'react';
import Yezhuindex from './Yezhuindex';
import Btn from './Btn'
import './../css/yezhu.css'
import $ from 'jquery'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import * as action from './../action/action'
import {connect} from 'react-redux';


class Yezhu extends Component {
	yezhuzhuce(){
		$(".yezhudenglu").hide()
		$(".yezhuzhuce").hide()
		$(".yezhuruhuma").show()
	}
	dl(e){
		if ($("#dluser").val()==''||$("#dlpass").val()=='') {
			alert("请输入内容")
			e.preventDefault()
		} else{
			this.props.dlv($("#dluser").val(),$("#dlpass").val())	
			e.preventDefault()
		}
	}
  render() {
    return (
       <Router>
    	  <div>
    	  	<Route exact path='/yezhu' render={() => (
    	  		<div className="yezhulogin">
    	  			{/*
    	  			  入户码
    	  			*/}
    	  			<div className="yezhuruhuma">
    	  				<span className="fh">返回</span>
    	  				<h3>请输入入户码</h3>
    	  				<input type="text" ref="" />
    	  				<Btn btnVal="确定" />
    	  			</div>
    	  			{/*
    	  			  注册	
    	  			*/}
    	  			<div className="yezhuzhuce">
    	  				<span className="fh">返回</span>
    	  				<input type="text" ref=""  placeholder="请输入" />
    	  				<input type="password" ref=""  placeholder="请输入" />
    	  				<Btn btnVal="注册" />
    	  			</div>
    	  			{/*
    	  			  登录	
    	  			*/}
    	  			<div className="yezhudenglu">
    	  				<h2>欢迎回家</h2>
    	  				<div>
    	  					<span>账号</span>
    	  					<input type="text" id="dluser" placeholder="请输入" />
    	  				</div>
    	  				<div>
    	  					<span>密码</span>
    	  					<input type="password" id="dlpass"  placeholder="请输入" />
    	  				</div>    	  	  	  				
    	  				<Link to="/yezhu/index" onClick={this.dl.bind(this)}><Btn btnVal="登 录" /></Link>
    	  				<span className="zhuce" onClick={this.yezhuzhuce}>注册</span>
    	  			</div>           	
    	  		</div>
           )} />  
          <Route path="/yezhu/index" component={Yezhuindex} />
        </div>
    	 </Router> 
    );
  }
}

export default connect(e=>({data:e}),action)(Yezhu);