import React, { Component } from 'react';
import Yezhuindex from './Yezhuindex';
import Btn from './Btn'
import Alert from './Alert';
import './../css/yezhu.css'
import $ from 'jquery'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import * as action from './../action/action'
import {connect} from 'react-redux';
import createHistory from 'history/createHashHistory'
const history = createHistory();

class Yezhu extends Component {
	yezhufh1(){
		$(".yezhudenglu").show()
		$(".yezhuzhuce").hide()
		$(".yezhuruhuma").hide()
	}
	yezhufh2(){
		$(".yezhudenglu").hide()
		$(".yezhuzhuce").hide()
		$(".yezhuruhuma").show()
	}
	yezhuzhuce(){
		$(".yezhudenglu").hide()
		$(".yezhuzhuce").hide()
		$(".yezhuruhuma").show()
	}
	yezhudl(e){
		if ($("#yezhudluser").val()==''||$("#yezhudlpass").val()=='') {
			$(".mask").eq(0).show()
			e.preventDefault()
		} else{
			this.props.yezhudlv($("#yezhudluser").val(),$("#yezhudlpass").val())
//			setTimeout(()=>{
//				console.log(this.props.data.yezhudata)
//			},1)
		}
	}
	yezhurhm(){
		if ($("#yezhurhm").val()=='') {
			$(".mask").eq(0).show()
		} else{
			this.props.yezhurhmv($("#yezhurhm").val())	
		}
	}
	yezhuzc(e){
		if ($("#yezhuzcuser").val()==''||$("#yezhuzcpass").val()=='') {
			$(".mask").eq(0).show()
		} else{
			this.props.yezhuzcv($("#yezhuzcuser").val(),$("#yezhuzcpass").val())	
		}
	}
  render() {
    return (
       <Router history={history}>
    	  <div>
    	  	<Route exact path='/yezhu' render={() => (
    	  		<div className="yezhulogin">
    	  			<Alert data="请输入内容" />
    	  			<Alert data="输入错误" />
    	  			<Alert data="该入户码已被使用" />
    	  			<Alert data="注册成功" />
    	  			<Alert data="该用户名已被注册" />
    	  			{/*
    	  			  入户码
    	  			*/}
    	  			<div className="yezhuruhuma">
    	  				<span className="fh" onClick={this.yezhufh1}>返回</span>
    	  				<h2>请输入入户码</h2>
    	  				<input type="text" id="yezhurhm" />
    	  				<span onClick={this.yezhurhm.bind(this)}><Btn btnVal="确定"/></span>
    	  			</div>
    	  			{/*
    	  			  注册	
    	  			*/}
    	  			<div className="yezhuzhuce">
    	  				<span className="fh" onClick={this.yezhufh2}>返回</span>
    	  					<h2>注册新账户</h2>
    	  				<div>
    	  					<span>账号</span>
    	  					<input type="text" id="yezhuzcuser"  placeholder="请输入" />
    	  				</div>
    	  				<div>
    	  					<span>密码</span>
    	  					<input type="password" id="yezhuzcpass"  placeholder="请输入" />
    	  				</div>
    	  				<span onClick={this.yezhuzc.bind(this)}><Btn btnVal="注册" /></span>
    	  			</div>
    	  			{/*
    	  			  登录	
    	  			*/}
    	  			<div className="yezhudenglu">
    	  				<h2>欢迎回家</h2>
    	  				<div>
    	  					<span>账号</span>
    	  					<input type="text" id="yezhudluser" placeholder="请输入" />
    	  				</div>
    	  				<div>
    	  					<span>密码</span>
    	  					<input type="password" id="yezhudlpass"  placeholder="请输入" />
    	  				</div>    	  	  	  				
    	  				<Link to="/yezhu/index" onClick={this.yezhudl.bind(this)}><Btn btnVal="登 录" /></Link>
    	  				<span onClick={this.yezhuzhuce} style={{'marginTop':'13px','display':'block'}}><Btn btnVal="注 册" /></span>
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